import * as monaco from 'monaco-editor';
import { Type, matchType, lookupJSON } from './_node';
import _instruction, { IInstructionProps } from './_instruction';
import _value from './_value';
import variable from './variable';
import constant from './constant';
import target from './target';

interface IOperationProps extends IInstructionProps {}

class operation extends _instruction {
    protected opcode: OpCode | null;
    protected type: Type | null;
    protected values: _value[];
    protected presentation: string;

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.values = [];
        this.presentation = this.opcode + ' ' + (this.type ? this.type + ' ' : '');
        this.build();
        this.name = 'operation@line:' + this.line;
        let index = 0;
        this.range = new monaco.Range(this.line, index, this.line, index + this.toString().length);
    }

    private build() {
        switch (this.opcode) {
            case OpCode.CALL:
                {
                    this.presentation += lookupJSON(this.json, 'fun') + ' ';
                }
                break;
            case OpCode.STORE:
                {
                }
                break;
            case OpCode.BR:
                {
                }
                break;
            case OpCode.CONDBR:
                {
                }
                break;
            case OpCode.RETURN:
                //[ "opcode", "value" ] (return 1)
                {
                    let value: _value | null = null;
                    let json = lookupJSON(this.json, 'value');
                    if (lookupJSON(json, 'type')) {
                        value = new constant({
                            json,
                            line: this.line,
                            context: this,
                        });
                    } else {
                        value = new variable({
                            json,
                            line: this.line,
                            context: this,
                            parents: null,
                        });
                    }
                    this.values.push(value);
                    this.presentation += value.toString();
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
    }

    private buildValues(jsons: Object[]) {
        jsons.forEach((json) => {});
    }

    private printValues() {
        let str = '';
        this.values.forEach((v) => {
            str += v.toString() + ', ';
        });
        return str.slice(0, -2);
    }

    public getVariables() {
        let vars: variable[] = [];
        this.values.forEach((v) => {
            if (v.constructor === variable) vars.push(v as variable);
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
        if (str === codes[i]) return codes[i];
    }
    return null;
}
