import * as monaco from 'monaco-editor';
import { Type, matchType, lookupJSON } from './_node';
import { indentation } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import _value from './_value';
import variable, { findVariableRange } from './variable';
import constant, { findConstantRange } from './constant';
import target, { findTargetRange } from './target';

enum OpCode {
    ADD = 'add',
    AND = 'and',
    ASHR = 'ashr',
    ATOMICCMPXCHG = 'atomiccmpxchg',
    ATOMICLOAD = 'atomicload',
    ATOMICRMWADD = 'atomicrmwadd',
    ATOMICRMWUMAX = 'atomicrmwumax',
    ATOMICRMWXCHG = 'atomicrmwxchg',
    ATOMICSTORE = 'atomicstore',
    BR = 'br',
    BSWAP = 'bswap',
    BUILDDATA128 = 'builddata128',
    CALL = 'call',
    CALLBUILTIN = 'callbuiltin',
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
    CONST = 'const',
    CRC32 = 'crc32',
    CTLZ = 'ctlz',
    EXTRACTDATA128 = 'extractdata128',
    FPTOSI = 'fptosi',
    FUNCTIONARGUMENT = 'functionargument',
    FUNCTIONVARIABLE = 'functionvariable',
    GEP = 'gep',
    GETELEMENTPTR = 'getelementptr',
    GLOBALREF = 'globalref',
    HEADERPTRPAIR = 'headerptrpair',
    INTTOPTR = 'inttoptr',
    ISNOTNULL = 'isnotnull',
    ISNULL = 'isnull',
    LOAD = 'load',
    LSHR = 'lshr',
    MUL = 'mul',
    NEG = 'neg',
    NOT = 'not',
    OR = 'or',
    OVERFLOWRESULT = 'overflowresult',
    PHI = 'phi',
    POW = 'pow',
    PTRTOINT = 'ptrtoint',
    RETURN = 'return',
    RETURNVOID = 'returnvoid',
    ROTL = 'rotl',
    ROTR = 'rotr',
    SADDOVERFLOW = 'saddoverflow',
    SDIV = 'sdiv',
    SELECT = 'select',
    SEXT = 'sext',
    SHL = 'shl',
    SITOFP = 'sitofp',
    SMULOVERFLOW = 'smuloverflow',
    SREM = 'srem',
    SSUBOVERFLOW = 'ssuboverflow',
    STORE = 'store',
    SUB = 'sub',
    SWITCH = 'switch',
    TRUNC = 'trunc',
    UADDOVERFLOW = 'uaddoverflow',
    UDIV = 'udiv',
    UMULOVERFLOW = 'umuloverflow',
    UNREACHABLE = 'unreachable',
    UREM = 'urem',
    USUBOVERFLOW = 'usuboverflow',
    XOR = 'xor',
    ZEXT = 'zext',
}

interface IOperationProps extends IInstructionProps {
    assignmentOffset?: number;
}

class operation extends _instruction {
    protected opcode: OpCode | null;
    protected type: Type | null;
    protected operands: (_value | target)[];
    protected presentation: string;
    protected assignmentOffset: number;

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.operands = [];
        this.presentation = this.opcode + ' ' + (this.type ? this.type + ' ' : '');
        this.build();
        this.name = 'operation@line:' + this.line;
        this.assignmentOffset = (props.assignmentOffset ? props.assignmentOffset : 0) + indentation;
        this.range = new monaco.Range(
            this.line,
            this.assignmentOffset,
            this.line,
            this.assignmentOffset + this.toString().length,
        );
    }

    private build() {
        if (
            //[opcode]
            this.opcode === OpCode.UNREACHABLE
        ) {
            this.presentation = this.opcode;
        } else if (
            //[opcode,value]
            this.opcode === OpCode.RETURN
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'value'));
            this.presentation += this.printOperands();
        } else if (
            //[opcode,target]
            this.opcode === OpCode.BR
        ) {
            this.buildTarget(this.json);
            this.presentation += this.printOperands();
        } else if (
            //[opcode,condition,targetTrue,targetFalse]
            this.opcode === OpCode.CONDBR
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildTarget(this.json, 'targetTrue');
            this.buildTarget(this.json, 'targetFalse');
            this.presentation += this.printOperands();
        } else if (
            //[opcode,type,fun,args]
            this.opcode === OpCode.CALL
        ) {
            this.buildValues(lookupJSON(this.json, 'args'));
            this.presentation += lookupJSON(this.json, 'fun') + ' (' + this.printOperands() + ')';
        } else if (
            //[opcode,type,value,pointer,offsets]
            this.opcode === OpCode.STORE ||
            //[dst,opcode,type,value,pointer,offsets]
            this.opcode === OpCode.ATOMICRMWXCHG
        ) {
            this.buildValues(lookupJSON(this.json, 'value'));
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
            this.presentation += this.printOperands();
        } else if (
            //[dst,opcode,type,pointer,offsets]
            this.opcode === OpCode.ATOMICLOAD ||
            this.opcode === OpCode.GETELEMENTPTR ||
            this.opcode === OpCode.LOAD
        ) {
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
            this.presentation += this.printOperands();
        } else if (
            //[dst,opcode,type,condition,src]
            this.opcode === OpCode.SELECT
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildValues(lookupJSON(this.json, 'src'));
            this.presentation += this.printOperands();
        } else if (
            //[dst,opcode,type,src,targetSuccess,targetFailure]
            this.opcode === OpCode.CHECKEDSADD ||
            this.opcode === OpCode.CHECKEDSMUL ||
            this.opcode === OpCode.CHECKEDSSUB
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'src'));
            this.buildTarget(this.json, 'targetSuccess');
            this.buildTarget(this.json, 'targetFailure');
            this.presentation += this.printOperands();
        } else if (
            //[dst,opcode,type,incoming]
            this.opcode === OpCode.PHI
        ) {
            this.buildPhi(lookupJSON(this.json, 'incoming'));
            this.presentation += '[' + this.printOperands() + ']';
        } else if (
            //[dst,opcode,type,src]
            this.opcode === OpCode.AND ||
            this.opcode === OpCode.ADD ||
            this.opcode === OpCode.ASHR ||
            this.opcode === OpCode.BUILDDATA128 ||
            this.opcode === OpCode.CMPEQ ||
            this.opcode === OpCode.CMPNE ||
            this.opcode === OpCode.CMPSLE ||
            this.opcode === OpCode.CMPULE ||
            this.opcode === OpCode.CMPULT ||
            this.opcode === OpCode.CMPSLT ||
            this.opcode === OpCode.CRC32 ||
            this.opcode === OpCode.EXTRACTDATA128 ||
            this.opcode === OpCode.INTTOPTR ||
            this.opcode === OpCode.ISNOTNULL ||
            this.opcode === OpCode.ISNULL ||
            this.opcode === OpCode.LSHR ||
            this.opcode === OpCode.MUL ||
            this.opcode === OpCode.NOT ||
            this.opcode === OpCode.OR ||
            this.opcode === OpCode.PTRTOINT ||
            this.opcode === OpCode.ROTL ||
            this.opcode === OpCode.ROTR ||
            this.opcode === OpCode.SDIV ||
            this.opcode === OpCode.SEXT ||
            this.opcode === OpCode.SHL ||
            this.opcode === OpCode.SUB ||
            this.opcode === OpCode.TRUNC ||
            this.opcode === OpCode.XOR ||
            this.opcode === OpCode.ZEXT
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'src'));
            this.presentation += this.printOperands();
        } else {
            this.presentation += '%UNKNOWN_OPERATION //[' + Object.keys(this.json) + ']';
            //TODO - unknown OpCodes!
        }
        this.operands.forEach((o) => {
            if (o.constructor === variable) findVariableRange(o as variable, indentation);
            if (o.constructor === constant) findConstantRange(o as constant, indentation);
            if (o.constructor === target) findTargetRange(o as target, indentation);
        });
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
                        parents: null,
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
                            parents: null,
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
                        parents: null,
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
                            parents: null,
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

    private printOperands() {
        if (this.operands.length === 0) return '';
        let str = '';
        this.operands.forEach((o) => {
            str += o.toString() + (o.constructor === target ? ' ' : ', ');
        });
        return this.operands[this.operands.length - 1].constructor === target ? str.slice(0, -1) : str.slice(0, -2);
    }

    public toString() {
        return this.presentation /* + '//[' + Object.keys(this.json) + ']' */;
    }

    public getVariables() {
        let vars: variable[] = [];
        this.operands.forEach((o) => {
            if (o.constructor === variable) vars.push(o as variable);
        });
        return vars;
    }
}

export default operation;

function matchOpCode(str: string | null) {
    if (!str) return null;
    let codes = Object.values(OpCode);
    for (let i = 0; i < codes.length; i++) {
        if (str.toUpperCase() === codes[i].toUpperCase()) return codes[i];
    }
    return null;
}
