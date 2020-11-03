import * as monaco from 'monaco-editor';
import _node, { INodeProps, matchType, lookupJSON } from './_node';
import { indentation } from './block';
import _value from './_value';
import variable, { findVariableRangeIn } from './variable';
import constant, { findConstantRangeIn } from './constant';
import target, { findTargetRangeIn } from './target';

/**
 * OpCode:
 * Define operation codes
 */
enum OpCode {
    ADD = 'add',
    AND = 'and',
    ASHR = 'ashr',
    //ATOMICCMPXCHG = 'atomiccmpxchg',
    ATOMICLOAD = 'atomicload',
    ATOMICRMWADD = 'atomicrmwadd',
    ATOMICRMWUMAX = 'atomicrmwumax',
    ATOMICRMWXCHG = 'atomicrmwxchg',
    ATOMICSTORE = 'atomicstore',
    BR = 'br',
    BSWAP = 'bswap',
    BUILDDATA128 = 'builddata128',
    CALL = 'call',
    //CALLBUILTIN = 'callbuiltin',
    CHECKEDSADD = 'checkedsadd',
    CHECKEDSMUL = 'checkedsmul',
    CHECKEDSSUB = 'checkedssub',
    CMPEQ = 'cmpeq',
    CMPNE = 'cmpne',
    CMPSLE = 'cmpsle',
    CMPSLT = 'cmpslt',
    CMPSUOLE = 'cmpsuole',
    CMPSUOLT = 'cmpsuolt',
    CMPULE = 'cmpule',
    CMPULT = 'cmpult',
    CONDBR = 'condbr',
    //CONST = 'const',
    CRC32 = 'crc32',
    CTLZ = 'ctlz',
    EXTRACTDATA128 = 'extractdata128',
    FPTOSI = 'fptosi',
    //FUNCTIONARGUMENT = 'functionargument',
    //FUNCTIONVARIABLE = 'functionvariable',
    GEP = 'gep',
    GETELEMENTPTR = 'getelementptr',
    //GLOBALREF = 'globalref',
    //HEADERPTRPAIR = 'headerptrpair',
    INTTOPTR = 'inttoptr',
    ISNOTNULL = 'isnotnull',
    ISNULL = 'isnull',
    LOAD = 'load',
    LSHR = 'lshr',
    MUL = 'mul',
    NEG = 'neg',
    NOT = 'not',
    OR = 'or',
    //OVERFLOWRESULT = 'overflowresult',
    PHI = 'phi',
    POW = 'pow',
    PTRTOINT = 'ptrtoint',
    RETURN = 'return',
    RETURNVOID = 'returnvoid',
    ROTL = 'rotl',
    ROTR = 'rotr',
    //SADDOVERFLOW = 'saddoverflow',
    SDIV = 'sdiv',
    SELECT = 'select',
    SEXT = 'sext',
    SHL = 'shl',
    SITOFP = 'sitofp',
    //SMULOVERFLOW = 'smuloverflow',
    SREM = 'srem',
    //SSUBOVERFLOW = 'ssuboverflow',
    STORE = 'store',
    SUB = 'sub',
    //SWITCH = 'switch',
    TRUNC = 'trunc',
    //UADDOVERFLOW = 'uaddoverflow',
    UDIV = 'udiv',
    //UMULOVERFLOW = 'umuloverflow',
    UNREACHABLE = 'unreachable',
    UREM = 'urem',
    //USUBOVERFLOW = 'usuboverflow',
    XOR = 'xor',
    ZEXT = 'zext',
}

/**
 * OpInfo:
 * Define operation info (https://llvm.org/docs/LangRef.html)
 */
enum OpInfo {
    ADD = 'Returns the sum of its two operands.\n{ <result> = add <ty> <op1>, <op2> }',
    AND = 'Returns the bitwise logical and of its two operands.\n{ <result> = and <ty> <op1>, <op2> }',
    ASHR = 'Returns the first operand shifted to the right a specified number of bits with sign extension.\n{ <result> = ashr <ty> <op1>, <op2> }',
    //ATOMICCMPXCHG = 'Used to atomically compare the field in memory and exchange it with the operator if it meets the condition.\n{ atomiccmpxchg }',
    ATOMICLOAD = 'Used to atomically read from memory.\n{ <result> = atomicload <ty> <pointer> }',
    ATOMICRMWADD = 'Used to atomically modify memory.\nWrites the sum of its operands.\n{ <result> = atomicrmwadd <ty> <op1>, <op2> }',
    ATOMICRMWUMAX = 'Used to atomically modify memory.\nWrites the unsigned maximum of its operands.\n{ <result> = atomicrmwumax <ty> <op1>, <op2> }',
    ATOMICRMWXCHG = 'Used to atomically modify memory.\nExchanges the values of its operands.\n{ atomicrmwxchg <ty> <op1>, <op1> }',
    ATOMICSTORE = 'Used to atomically write to memory.\n{ atomicstore <ty> <value>, <pointer> }',
    BR = 'Used to cause control flow to transfer to a different basic block in the current function.\n{ br <label> }',
    BSWAP = 'Used to reverse the order of bytes in a register.\n{ bswap <ty> <op> }',
    BUILDDATA128 = 'Used to build a data128 out of its two input operands.\n{ builddata128 d128 <op1> <op2> }',
    CALL = 'Represents a simple function call.\n{ call <ty> <function> (<args>) }',
    //CALLBUILTIN = '__________________________________________________,
    CHECKEDSADD = '???\n{ checkedsadd <ty> <value>, <op1> <op2> <op3> }', //TODO
    CHECKEDSMUL = '???\n{ checkedsmul <ty> <value>, <op1> <op2> <op3> }', //TODO
    CHECKEDSSUB = '???\n{ checkedssub <ty> <value>, <op1> <op2> <op3> }', //TODO
    CMPEQ = 'Returns 1 if its two operands are equal otherwise 0.\n{ cmpeq <ty> <op1>, <op2> }',
    CMPNE = 'Returns 0 if its two operands are equal otherwise 1.\n{ cmpne <ty> <op1>, <op2> }',
    CMPSLE = 'Returns signed 1 if its two operands are eaqual or the first is is less than the second otherwise 0.\n{ cmpsle <ty> <op1> <op2> }',
    CMPSLT = 'Returns signed 1 if the first operand is is less than the second otherwise 0.\n{ cmpslt <ty> <op1> <op2> }',
    CMPSUOLE = 'Returns ???\n{ cmpsuole <ty> <op1> <op2> }', //TODO
    CMPSUOLT = 'Returns ???\n{ cmpsuolt <ty> <op1> <op2> }', //TODO
    CMPULE = 'Returns unsigned 1 if its two operands are eaqual or the first is is less than the second otherwise 0.\n{ cmpule <ty> <op1> <op2> }',
    CMPULT = 'Returns unsigned 1 if the first operand is is less than the second otherwise 0.\n{ cmpult <ty> <op1> <op2> }',
    CONDBR = 'Used to cause control flow to transfer to a different basic block in the current function depending on the condition.\n{ condbr <cond> <iftrue> <iffalse> }',
    //CONST = '__________________________________________________,
    CRC32 = 'Calculates the CRC32 checksum of the given value.\n{ crc32 <ty> <value>, <op> }',
    CTLZ = 'Counts the number of leading zeros in a variable.\n{ ctlz <ty> <op> }',
    EXTRACTDATA128 = 'Used to extract values out of a data128.\n{ extractdata128 <ty> <op> }',
    FPTOSI = 'Converts the floating-point value to the nearest signed interger value (rounding towards zero).\n{ <result> = or <ty> <value> }',
    //FUNCTIONARGUMENT = '__________________________________________________,
    //FUNCTIONVARIABLE = '__________________________________________________,
    GEP = 'Used to get the address of a subelement of an aggregate data structure. It performs address calculation only and does not access memory.\n{ <result> = gep <ty> <pointer>, <ty> <offset> }',
    GETELEMENTPTR = 'Used to get the address of a subelement of an aggregate data structure. It performs address calculation only and does not access memory.\n{ <result> = getelementpr <ty> <pointer>, <ty> <offset> }',
    //GLOBALREF = '__________________________________________________,
    //HEADERPTRPAIR = '__________________________________________________,
    INTTOPTR = 'Converts value to a pointer by applying either a zero extension or a truncation depending on the size of the integer value.\n{ <result> = intoptr ptr <value> }',
    ISNOTNULL = 'Returns 1 if its operand evaluates to null otherwise 0.\n{ isnotnull <ty> <value> }',
    ISNULL = 'Returns 0 if its operand evaluates to null otherwise 1.\n{ isnull <ty> <value> }',
    LOAD = 'Used to read from memory.\n{ <result> = load <ty> <pointer>(, <ty> <offset>)? }',
    LSHR = 'Returns the first operand shifted to the right a specified number of bits with zero fill.\n{ <result> = lshr <ty> <op1>, <op2> }',
    MUL = 'Returns the product of its two operands.\n{ <result> = mul <ty> <op1>, <op2> }',
    NEG = 'Returns the negation of its operand.\n{ <result> = neg <ty> <op1> }',
    NOT = 'Returns the negation of its operand.\n{ <result> = not <ty> <op1> }',
    OR = 'Returns the bitwise logical inclusive or of its two operands.\n{ <result> = or <ty> <op1>, <op2> }',
    //OVERFLOWRESULT = '__________________________________________________,
    PHI = 'At runtime, logically takes on the value specified by the pair corresponding to the predecessor basic block that executed just prior to the current block.\n{ <result> = phi <ty> [<val0>, <label0> <val1>, <label1>] }',
    POW = 'Calculates the power of two numbers.\n{ pow <ty> <op1>, <op2> }',
    PTRTOINT = 'Converts the pointer value to the specified integer type.\n{ <result> = ptrtoint <ty> <pointer> }',
    RETURN = 'Returns a value from a basic block.\n{ return <value> }',
    RETURNVOID = 'Return from a basic block.\n{ returnvoid }',
    ROTL = 'Rotates the first operand in the register a specified number of bits to the left.\n{ rotl <ty> <op1>, <op2> }',
    ROTR = 'Rotates the first operand in the register a specified number of bits to the right.\n{ rotr <ty> <op1>, <op2> }',
    //SADDOVERFLOW = 'Adds two signed integers with overflow.\n{ <result> = saddoverflow <ty> <op1>, <op2> }',
    SDIV = 'Returns the signed quotient of its two operands.\n{ <result> = sdiv <ty> <op1>, <op2> }',
    SELECT = 'Used to choose one value based on a condition. If the condition evaluates to 1, the instruction returns the first value argument. Otherwise, it returns the second value argument.\n{ <result> = select <ty> <cond>, <val1>, <val2> }',
    SEXT = 'Sign extends its value by copying the highest order sign bit until the value fits the type.\n{ <result> = sext <ty> <value> }',
    SHL = 'Returns the first operand shifted to the left a specified number of bits.\n{ <result> = shl <ty> <op1>, <op2> }',
    SITOFP = 'Converts a signed integer to a floating point number.\n{ sitofp <ty> <op> }',
    //SMULOVERFLOW = 'Calculates a signed multiplication with overflow.\n{  }',
    SREM = 'Returns the remainder from the signed division of its two operands.\n{ <result> = srem <ty> <op1>, <op2> }',
    //SSUBOVERFLOW = 'Calculates a signed subtraction with overflow.\n{  }',
    STORE = 'Used to write to memory.\n{ store <ty> <value>, <pointer> }',
    SUB = 'Returns the difference of its two operands.\n{ <result> = sub <ty> <op1>, <op2> }',
    //SWITCH = 'Transfers the control flow to several different location and is a generalisation of BR.\n{  }',
    TRUNC = 'Truncates its value by removing higher order bits to fit the type.\n{ <result> = trunc <ty> <value> }',
    //UADDOVERFLOW = 'Adds two unsigned integers with overflow.\n{  }',
    UDIV = 'Returns the unsigned quotient of its two operands.\n{ <result> = udiv <ty> <op1>, <op2> }',
    //UMULOVERFLOW = 'Multiplies two unsigned integers with overflow.\n{  }',
    UNREACHABLE = 'Used to inform the optimizer that a particular portion of the code is not reachable.\n{ unreachable }',
    UREM = 'Returns the remainder from the unsigned division of its two arguments.\n{ <result> = urem <ty> <op1>, <op2> }',
    //USUBOVERFLOW = 'Calculates an unsigned subtraction.\n{  }',
    XOR = 'Returns the bitwise logical exclusive or of its two operands.\n{ <result> = xor <ty> <op1>, <op2> }',
    ZEXT = 'Zero extends its value by filling the higher order bits with zero to fit the type.\n{ <result> = zext <ty> <value> }',
}

interface IInstructionProps extends INodeProps {}

class instruction extends _node {
    protected assignment?: variable;
    protected opcode: string | null;
    protected type: string | null;
    protected operands: (_value | target)[] = [];

    constructor(props: IInstructionProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.name = 'instruction@' + this.line;
        this.buildOperands();
        this.buildAssignment();
        this.findRanges();
    }

    private buildAssignment() {
        if (lookupJSON(this.json, 'dst')) {
            this.assignment = new variable({
                json: this.json,
                line: this.line,
                context: this,
            });
            this.assignment.setParents(this.getAssignees());
        }
    }

    private buildOperands() {
        if (
            //[opcode]
            compareOpCode(OpCode.UNREACHABLE, this.opcode) ||
            compareOpCode(OpCode.RETURNVOID, this.opcode)
        ) {
        } else if (
            //[opcode,value]
            compareOpCode(OpCode.RETURN, this.opcode)
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'value'));
        } else if (
            //[opcode,target]
            compareOpCode(OpCode.BR, this.opcode)
        ) {
            this.buildTarget(this.json);
        } else if (
            //[opcode,condition,targetTrue,targetFalse]
            compareOpCode(OpCode.CONDBR, this.opcode)
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildTarget(this.json, 'targetTrue');
            this.buildTarget(this.json, 'targetFalse');
        } else if (
            //[opcode,type,fun,args]
            compareOpCode(OpCode.CALL, this.opcode)
        ) {
            this.buildValues(lookupJSON(this.json, 'args'));
        } else if (
            //[opcode,type,value,pointer,offsets]
            compareOpCode(OpCode.ATOMICSTORE, this.opcode) ||
            compareOpCode(OpCode.STORE, this.opcode) ||
            //[dst,opcode,type,value,pointer,offsets]
            compareOpCode(OpCode.ATOMICRMWADD, this.opcode) ||
            compareOpCode(OpCode.ATOMICRMWUMAX, this.opcode) ||
            compareOpCode(OpCode.ATOMICRMWXCHG, this.opcode)
        ) {
            this.buildValues(lookupJSON(this.json, 'value'));
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
        } else if (
            //[dst,opcode,type,pointer,offsets]
            compareOpCode(OpCode.ATOMICLOAD, this.opcode) ||
            compareOpCode(OpCode.LOAD, this.opcode) ||
            compareOpCode(OpCode.GETELEMENTPTR, this.opcode)
        ) {
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
        } else if (
            //[dst,opcode,type,condition,src]
            compareOpCode(OpCode.SELECT, this.opcode)
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildValues(lookupJSON(this.json, 'src'));
        } else if (
            //[dst,opcode,type,src,targetSuccess,targetFailure]
            compareOpCode(OpCode.CHECKEDSADD, this.opcode) ||
            compareOpCode(OpCode.CHECKEDSMUL, this.opcode) ||
            compareOpCode(OpCode.CHECKEDSSUB, this.opcode)
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'src'));
            this.buildTarget(this.json, 'targetSuccess');
            this.buildTarget(this.json, 'targetFailure');
        } else if (
            //[dst,opcode,type,incoming]
            compareOpCode(OpCode.PHI, this.opcode)
        ) {
            this.buildPhi(lookupJSON(this.json, 'incoming'));
        } else if (
            //[dst,opcode,type,src]
            compareOpCode(OpCode.AND, this.opcode) ||
            compareOpCode(OpCode.ADD, this.opcode) ||
            compareOpCode(OpCode.ASHR, this.opcode) ||
            compareOpCode(OpCode.BUILDDATA128, this.opcode) ||
            compareOpCode(OpCode.BSWAP, this.opcode) ||
            compareOpCode(OpCode.CMPEQ, this.opcode) ||
            compareOpCode(OpCode.CMPNE, this.opcode) ||
            compareOpCode(OpCode.CMPSLE, this.opcode) ||
            compareOpCode(OpCode.CMPSLT, this.opcode) ||
            compareOpCode(OpCode.CMPSUOLE, this.opcode) ||
            compareOpCode(OpCode.CMPSUOLT, this.opcode) ||
            compareOpCode(OpCode.CMPULE, this.opcode) ||
            compareOpCode(OpCode.CMPULT, this.opcode) ||
            compareOpCode(OpCode.CRC32, this.opcode) ||
            compareOpCode(OpCode.CTLZ, this.opcode) ||
            compareOpCode(OpCode.EXTRACTDATA128, this.opcode) ||
            compareOpCode(OpCode.FPTOSI, this.opcode) ||
            compareOpCode(OpCode.INTTOPTR, this.opcode) ||
            compareOpCode(OpCode.ISNOTNULL, this.opcode) ||
            compareOpCode(OpCode.ISNULL, this.opcode) ||
            compareOpCode(OpCode.LSHR, this.opcode) ||
            compareOpCode(OpCode.MUL, this.opcode) ||
            compareOpCode(OpCode.NEG, this.opcode) ||
            compareOpCode(OpCode.NOT, this.opcode) ||
            compareOpCode(OpCode.OR, this.opcode) ||
            compareOpCode(OpCode.POW, this.opcode) ||
            compareOpCode(OpCode.PTRTOINT, this.opcode) ||
            compareOpCode(OpCode.ROTL, this.opcode) ||
            compareOpCode(OpCode.ROTR, this.opcode) ||
            compareOpCode(OpCode.SDIV, this.opcode) ||
            compareOpCode(OpCode.SEXT, this.opcode) ||
            compareOpCode(OpCode.SHL, this.opcode) ||
            compareOpCode(OpCode.SITOFP, this.opcode) ||
            compareOpCode(OpCode.SREM, this.opcode) ||
            compareOpCode(OpCode.SUB, this.opcode) ||
            compareOpCode(OpCode.TRUNC, this.opcode) ||
            compareOpCode(OpCode.UDIV, this.opcode) ||
            compareOpCode(OpCode.UREM, this.opcode) ||
            compareOpCode(OpCode.XOR, this.opcode) ||
            compareOpCode(OpCode.ZEXT, this.opcode)
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'src'));
        } else {
            //TODO - unknown enum OpCodes!
            throw new Error('UNKNOWN OPCODE!');
        }
    }

    private buildTarget(json: Object, reference?: string) {
        this.operands.push(
            new target({
                json,
                line: this.line,
                context: this,
                reference,
            }),
        );
    }

    private buildValues(json: Object | Object[]) {
        if (!Array.isArray(json))
            if (lookupJSON(json, 'type'))
                this.operands.push(
                    new constant({
                        json,
                        line: this.line,
                        context: this,
                        showType: true,
                    }),
                );
            else
                this.operands.push(
                    new variable({
                        json,
                        line: this.line,
                        context: this,
                    }),
                );
        else
            json.forEach((json) => {
                if (lookupJSON(json, 'type'))
                    this.operands.push(
                        new constant({
                            json,
                            line: this.line,
                            context: this,
                            showType: true,
                        }),
                    );
                else
                    this.operands.push(
                        new variable({
                            json,
                            line: this.line,
                            context: this,
                        }),
                    );
            });
    }

    private buildValuesHideType(json: Object | Object[]) {
        if (!Array.isArray(json))
            if (lookupJSON(json, 'type'))
                this.operands.push(
                    new constant({
                        json,
                        line: this.line,
                        context: this,
                    }),
                );
            else
                this.operands.push(
                    new variable({
                        json,
                        line: this.line,
                        context: this,
                    }),
                );
        else
            json.forEach((json) => {
                if (lookupJSON(json, 'type'))
                    this.operands.push(
                        new constant({
                            json,
                            line: this.line,
                            context: this,
                        }),
                    );
                else
                    this.operands.push(
                        new variable({
                            json,
                            line: this.line,
                            context: this,
                        }),
                    );
            });
    }

    private buildPhi(json: Object[]) {
        json.forEach((json) => {
            this.buildValues(lookupJSON(json, 'value'));
            this.buildTarget(json, 'block');
        });
    }

    public findRanges() {
        let compare = this.toString();
        if (this.assignment) compare = findVariableRangeIn(this.assignment, compare, indentation);
        this.operands.forEach((o) => {
            if (o instanceof variable) compare = findVariableRangeIn(o, compare, indentation);
            else if (o instanceof constant) compare = findConstantRangeIn(o, compare, indentation);
            else if (o instanceof target) compare = findTargetRangeIn(o, compare, indentation);
        });
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length + indentation);
    }

    private printOperands() {
        if (this.operands.length === 0) return '';
        let str = '';
        this.operands.forEach(
            (o) =>
                (str +=
                    (o instanceof target || compareOpCode(OpCode.BUILDDATA128, this.opcode) ? ' ' : ', ') +
                    o.toString()),
        );
        return this.operands[0] instanceof target || compareOpCode(OpCode.BUILDDATA128, this.opcode)
            ? str.slice(1)
            : str.slice(2);
    }

    private printPhi() {
        let str = '[';
        this.operands.forEach((o) => (str += o.toString() + (o instanceof target ? ' ' : ', ')));
        return (this.operands[this.operands.length - 1] instanceof target ? str.slice(0, -1) : str.slice(0, -2)) + ']';
    }

    public toString() {
        let str =
            (this.assignment ? '%' + this.assignment.getAlias() + ' = ' : '') +
            this.opcode! +
            ' ' +
            (this.type ? this.type + ' ' : '');
        if (compareOpCode(OpCode.CALL, this.opcode))
            str += lookupJSON(this.json, 'fun') + ' (' + this.printOperands() + ')';
        else if (compareOpCode(OpCode.PHI, this.opcode)) str += this.printPhi();
        else if (compareOpCode(OpCode.UNREACHABLE, this.opcode)) str = str.slice(0, -1);
        else str += this.printOperands();
        return str /* + '//[' + Object.keys(this.json) + ']' */;
    }

    public getNodes() {
        let nodes: _node[] = [this];
        if (this.assignment) nodes.push(this.assignment);
        nodes.push(...this.operands);
        return nodes;
    }

    public getVariables() {
        let vars: variable[] = [];
        if (this.assignment) vars.push(this.assignment);
        this.operands.forEach((o) => {
            if (o instanceof variable) vars.push(o);
        });
        return vars;
    }

    public getNodeAt(position: monaco.Position): _node | null {
        if (this.assignment && this.assignment.getRange().containsPosition(position))
            return this.assignment.getNodeAt(position);
        for (let i = 0; i < this.operands.length; i++)
            if (this.operands[i].getRange().containsPosition(position)) return this.operands[i].getNodeAt(position);
        return this;
    }

    public getAssigned() {
        return this.assignment ? this.assignment : null;
    }

    public getAssignees() {
        let vars: variable[] = [];
        this.operands.forEach((o) => {
            if (o instanceof variable) vars.push(o);
        });
        return vars;
    }

    public getValues() {
        let values: _value[] = [];
        this.operands.forEach((o) => {
            if (o instanceof _value) values.push(o);
        });
        return values;
    }
    public getTargets() {
        let targets: target[] = [];
        this.operands.forEach((o) => {
            if (o instanceof target) targets.push(o);
        });
        return targets;
    }

    public getOpCode() {
        return this.opcode!;
    }

    public getInfo() {
        return [...super.getInfo(), '\n\nOPCODE:\t' + this.opcode, matchOpInfo(this.opcode)!];
    }

    public getFunctionName() {
        if (compareOpCode(OpCode.CALL, this.opcode)) return '' + lookupJSON(this.json, 'fun').split('(')[0];
        else return null;
    }
}

export default instruction;

//--------------------------------------------------
//-----Helpers-----
//--------------------------------------------------

function compareOpCode(opcode: OpCode | null, str: string | null) {
    if (!opcode || !str) return false;
    return str.toUpperCase() === opcode.toUpperCase();
}

function matchOpCode(str: string | null) {
    if (!str) return null;
    let codes = Object.values(OpCode);
    for (let i = 0; i < codes.length; i++) if (compareOpCode(codes[i], str)) return str;
    return null;
}

function matchOpInfo(str: string | null) {
    if (!str) return null;
    let infos = Object.keys(OpInfo);
    for (let i = 0; i < infos.length; i++) if (infos[i] === str.toUpperCase()) return Object.values(OpInfo)[i];
    return null;
}
