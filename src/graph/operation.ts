import * as monaco from 'monaco-editor';
import { Type, matchType, lookupJSON } from './_node';
import { offset } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import _value from './_value';
import variable, { findVariableRange } from './variable';
import constant, { findConstantRange } from './constant';
import target, { findTargetRange } from './target';

interface IOperationProps extends IInstructionProps {}

class operation extends _instruction {
    protected opcode: OpCode | null;
    protected type: Type | null;
    protected operands: (_value | target)[];
    protected presentation: string;

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.operands = [];
        this.presentation = this.opcode + ' ' + (this.type ? this.type + ' ' : '');
        this.build();
        this.name = 'operation@line:' + this.line;
        let index = 0;
        this.range = new monaco.Range(this.line, index, this.line, index + this.toString().length);
    }

    private build() {
        switch (this.opcode) {
            case OpCode.CALL:
                //[ "opcode", "type", "fun", "args" ] (call void umbra::AggregationTarget::init(umbra::AggregationTarget*, unsigned long) (%CompilationContext_cpp_215_0, i64 88))
                {
                    this.buildValues(lookupJSON(this.json, 'args'));
                    this.presentation += lookupJSON(this.json, 'fun') + ' (' + this.printOperands() + ')';
                }
                break;
            case OpCode.STORE:
                //[ "opcode", "type", "value", "offsets" ] (store int64 %Numeric_cpp_777_51, %MaterializationHelper_cpp_983_52)
                {
                    this.buildValue(lookupJSON(this.json, 'value'));
                    this.buildValues(lookupJSON(this.json, 'offsets'));
                    this.presentation += this.printOperands();
                }
                break;
            case OpCode.BR:
                //[ "opcode", "target" ] (br %cont)
                {
                    this.buildTarget(this.json);
                    this.presentation += this.printOperands();
                }
                break;
            case OpCode.CONDBR:
                //[ "opcode", "condition", "targetTrue", "targetFalse" ] (condbr %RelationMappedLogic_cpp_343_ %loopBlocks %loopDoneBlocks)
                {
                    this.buildValue(lookupJSON(this.json, 'condition'));
                    this.buildTarget(this.json, 'targetTrue');
                    this.buildTarget(this.json, 'targetFalse');
                    this.presentation += this.printOperands2();
                }
                break;
            case OpCode.RETURN:
                //[ "opcode", "value" ] (return 1)
                {
                    this.buildValue(lookupJSON(this.json, 'value'));
                    this.presentation += this.printOperands();
                }
                break;
            case OpCode.PHI:
                {
                }
                break;
            case null:
                {
                }
                break;
            /* case '':
                {
                }
                break; */
            default:
                {
                }
                break;
        }
        this.operands.forEach((o) => {
            if (o.constructor === variable) findVariableRange(o as variable, offset);
            if (o.constructor === constant) findConstantRange(o as constant, offset);
            if (o.constructor === target) findTargetRange(o as target, offset);
        });
    }

    private buildTarget(json: Object, name?: string) {
        this.operands.push(
            new target({
                json,
                line: this.line,
                context: this,
                name,
            }),
        );
    }

    private buildValue(json: Object) {
        if (lookupJSON(json, 'type')) {
            this.operands.push(
                new constant({
                    json,
                    line: this.line,
                    context: this,
                }),
            );
        } else {
            this.operands.push(
                new variable({
                    json,
                    line: this.line,
                    context: this,
                    parents: null,
                }),
            );
        }
    }

    private buildValues(jsons: Object[]) {
        jsons.forEach((json) => {
            if (lookupJSON(json, 'type')) {
                this.operands.push(
                    new constant({
                        json,
                        line: this.line,
                        context: this,
                        showType: true,
                    }),
                );
            } else {
                this.operands.push(
                    new variable({
                        json,
                        line: this.line,
                        context: this,
                        parents: null,
                    }),
                );
            }
        });
    }

    private printOperands() {
        let str = '';
        this.operands.forEach((o) => {
            str += o.toString() + ', ';
        });
        return str.slice(0, -2);
    }

    private printOperands2() {
        let str = '';
        this.operands.forEach((o) => {
            str += o.toString() + ' ';
        });
        return str.slice(0, -1);
    }

    public getVariables() {
        let vars: variable[] = [];
        this.operands.forEach((o) => {
            if (o.constructor === variable) vars.push(o as variable);
        });
        return vars;
    }

    public toString() {
        return this.presentation;
    }
}

export default operation;

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

function matchOpCode(str: string | null) {
    if (!str) return null;
    let codes = Object.values(OpCode);
    for (let i = 0; i < codes.length; i++) {
        if (str.toUpperCase() == codes[i].toUpperCase()) return codes[i];
    }
    return null;
}
