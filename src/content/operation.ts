import * as monaco from 'monaco-editor';
import { Type } from './_node';
import instruction, { IInstructionProps } from './_instruction';
import variable from './variable';

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
    BR = 'br', //NULL
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
    CONDBR = 'condbr', //NULL
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
    RETURN = 'return', //NULL
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
    UNREACHABLE = 'unreachable', //NULL
    UREM = 'urem',
    USUBOVERFLOW = 'usuboverflow',
    XOR = 'xor',
    ZEXT = 'zext',
}

interface IOperationProps extends IInstructionProps {}

class operation extends instruction {
    protected opcode: OpCode;
    protected type: Type;
    protected args: variable[];

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = OpCode.CONST;
        this.type = Type.NULL;
        this.args = [];
    }

    public build() {
        // match opcode
        let opc = this.data.match(
            /|ashr|add|and|atomiccmpxchg|atomicload|atomicrmwadd|atomicrmwumax|atomicrmwxchg|atomicstore|bswap|builddata128|call|callbuiltin|checkedsadd|checkedsmul|checkedssub|cmpeq|cmpne|cmpsle|cmpslt|cmpsuole|cmpsuolt|cmpule|cmpult|crc32|ctlz|extractdata128|fptosi|functionargument|functionvariable|gep|getelementptr|globalref|headerptrpair|inttoptr|isnotnull|isnull|lshr|load|mul|neg|not|or|overflowresult|phi|pow|ptrtoint|rotl|rotr|saddoverflow|sdiv|sext|sitofp|smuloverflow|srem|ssuboverflow|select|shl|store|sub|switch|trunc|uaddoverflow|udiv|umuloverflow|urem|usuboverflow|xor|zext|return|returnvoid|br|condbr|unreachable/,
        )![0];
        let opcodes = Object.values(OpCode);
        opcodes.forEach((o) => {
            let str = '' + o;
            if (str === opc) {
                this.opcode = o;
            }
        });
        // match type
        let type = this.data.match(/\b(i(nt)?(8|32|64)|d(ata)?128|bool|global|ptr|void|object)/);
        if (type) {
            let types = Object.values(Type);
            types.forEach((t) => {
                let str = '' + t;
                if (str === type![0]) {
                    this.type = t;
                }
            });
        }
        // match args
        let line = this.range.startLineNumber;
        let index = this.range.startColumn;
        let args = this.data.match(/%[\w]*/g);
        args?.forEach((a) => {
            this.args.push(
                new variable({
                    name: a,
                    data: 'Variable:' + a + '@l:' + line,
                    range: new monaco.Range(
                        line,
                        index + variable.indexOfStrict(a, this.data),
                        line,
                        index + variable.indexOfStrict(a, this.data) + a.length,
                    ),
                    prev: null,
                    next: null,
                    parents: null,
                    context: this,
                }),
            );
            index += 0;
        });
    }

    public findNodeAt(position: monaco.Position): instruction | null {
        for (let i = 0; i < this.args.length; i++) {
            if (this.args[i].getRange().containsPosition(position)) return this.args[i].findNodeAt(position);
        }
        return this;
    }

    public getVariables() {
        return this.args;
    }

    public hasVariable(name: string) {
        for (let i = 0; i < this.args.length; i++) {
            if (this.args[i].isCalled(name)) return true;
        }
        return false;
    }
}

export default operation;
