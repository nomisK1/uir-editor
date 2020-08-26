import * as monaco from 'monaco-editor';
import _node, { matchType, lookupJSON } from './_node';
import { indentation } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import assignment from './assignment';
import _value from './_value';
import variable, { findVariableRangeIn } from './variable';
import constant, { findConstantRangeIn } from './constant';
import target, { findTargetRangeIn } from './target';

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

interface IOperationProps extends IInstructionProps {}

class operation extends _instruction {
    protected opcode: string | null;
    protected type: string | null;
    protected operands: (_value | target)[] = [];

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.name = 'operation@' + this.line;
        this.build();
        this.findRanges();
    }

    private build() {
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
        let offset =
            (this.context instanceof assignment ? this.context.toString().split('=')[0].length + 2 : 0) + indentation;
        let compare = this.toString();
        this.operands.forEach((o) => {
            if (o instanceof variable) compare = findVariableRangeIn(o, compare, offset);
            else if (o instanceof constant) compare = findConstantRangeIn(o, compare, offset);
            else if (o instanceof target) compare = findTargetRangeIn(o, compare, offset);
        });
        this.range = new monaco.Range(this.line, offset, this.line, offset + this.toString().length);
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
        let str = this.opcode! + ' ' + (this.type ? this.type + ' ' : '');
        if (compareOpCode(OpCode.CALL, this.opcode))
            str += lookupJSON(this.json, 'fun') + ' (' + this.printOperands() + ')';
        else if (compareOpCode(OpCode.PHI, this.opcode)) str += this.printPhi();
        else if (compareOpCode(OpCode.UNREACHABLE, this.opcode)) str = str.slice(0, -1);
        else str += this.printOperands();
        return str /* + '//[' + Object.keys(this.json) + ']' */;
    }

    public getNodes() {
        return [this, ...this.operands];
    }

    public getVariables() {
        let vars: variable[] = [];
        this.operands.forEach((o) => {
            if (o instanceof variable) vars.push(o);
        });
        return vars;
    }

    public getNodeAt(position: monaco.Position): _node | null {
        for (let i = 0; i < this.operands.length; i++)
            if (this.operands[i].getRange().containsPosition(position)) return this.operands[i].getNodeAt(position);
        return this;
    }

    public hasVariable(name: string) {
        let vars = this.getVariables();
        for (let i = 0; i < vars.length; i++) if (vars[i].getName() === name) return true;
        return false;
    }

    public getFunctionName() {
        if (compareOpCode(OpCode.CALL, this.opcode)) return '' + lookupJSON(this.json, 'fun').split('(')[0];
        else return null;
    }

    public getTargets() {
        let targets: target[] = [];
        this.operands.forEach((o) => {
            if (o instanceof target) targets.push(o);
        });
        return targets;
    }

    public getValues() {
        let values: _value[] = [];
        this.operands.forEach((o) => {
            if (o instanceof _value) values.push(o);
        });
        return values;
    }

    public getOpCode() {
        return this.opcode!;
    }
}

export default operation;

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
