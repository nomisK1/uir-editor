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
        this.type = Type.VOID;
        this.args = [];
    }

    public build() {
        let line = this.range.startLineNumber;
        let index = this.range.startColumn;
        // match opcode
        let opc = this.data.substr(0, this.data.indexOf(' '));
        let opcodes = Object.values(OpCode);
        opcodes.forEach((o) => {
            let str = '' + o;
            if (str === opc) {
                this.opcode = o;
            }
        });
        // match args
        let argument = this.data.match(/\((.*?)\)/);
        let args = argument ? argument[1].match(/%[\w]*/g) : this.data.match(/%[\w]*/g);
        args?.forEach((a) => {
            this.args.push(
                new variable({
                    name: a,
                    data: this.data,
                    range: new monaco.Range(
                        line,
                        index + this.data.indexOf(a),
                        line,
                        index + this.data.indexOf(a) + a.length,
                    ),
                    prev: /* this.args.length > 0 ? this.args[this.args.length - 1] :  */ null,
                    next: null,
                    parents: null,
                    context: this,
                }),
            );
        });
        // add references to next variable
        /* for (let i = 0; i < this.args.length - 1; i++) {
            this.args[i].setNext(this.args[i + 1]);
        } */
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
