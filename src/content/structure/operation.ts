import * as monaco from 'monaco-editor';
import _node, { Type, matchType, lookupJSON } from './_node';
import { indentation } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import assignment from './assignment';
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

interface IOperationProps extends IInstructionProps {}

class operation extends _instruction {
    protected opcode: OpCode | null;
    protected type: Type | null;
    protected operands: (_value | target)[] = [];

    constructor(props: IOperationProps) {
        super(props);
        this.opcode = matchOpCode(lookupJSON(this.json, 'opcode'))!;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.name = 'operation@line:' + this.line;
        this.build();
        this.findRanges();
    }

    private build() {
        if (
            //[opcode]
            this.opcode === OpCode.UNREACHABLE
        ) {
        } else if (
            //[opcode,value]
            this.opcode === OpCode.RETURN
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'value'));
        } else if (
            //[opcode,target]
            this.opcode === OpCode.BR
        ) {
            this.buildTarget(this.json);
        } else if (
            //[opcode,condition,targetTrue,targetFalse]
            this.opcode === OpCode.CONDBR
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildTarget(this.json, 'targetTrue');
            this.buildTarget(this.json, 'targetFalse');
        } else if (
            //[opcode,type,fun,args]
            this.opcode === OpCode.CALL
        ) {
            this.buildValues(lookupJSON(this.json, 'args'));
        } else if (
            //[opcode,type,value,pointer,offsets]
            this.opcode === OpCode.STORE ||
            //[dst,opcode,type,value,pointer,offsets]
            this.opcode === OpCode.ATOMICRMWXCHG
        ) {
            this.buildValues(lookupJSON(this.json, 'value'));
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
        } else if (
            //[dst,opcode,type,pointer,offsets]
            this.opcode === OpCode.ATOMICLOAD ||
            this.opcode === OpCode.GETELEMENTPTR ||
            this.opcode === OpCode.LOAD
        ) {
            this.buildValues(lookupJSON(this.json, 'pointer'));
            this.buildValues(lookupJSON(this.json, 'offsets'));
        } else if (
            //[dst,opcode,type,condition,src]
            this.opcode === OpCode.SELECT
        ) {
            this.buildValues(lookupJSON(this.json, 'condition'));
            this.buildValues(lookupJSON(this.json, 'src'));
        } else if (
            //[dst,opcode,type,src,targetSuccess,targetFailure]
            this.opcode === OpCode.CHECKEDSADD ||
            this.opcode === OpCode.CHECKEDSMUL ||
            this.opcode === OpCode.CHECKEDSSUB
        ) {
            this.buildValuesHideType(lookupJSON(this.json, 'src'));
            this.buildTarget(this.json, 'targetSuccess');
            this.buildTarget(this.json, 'targetFailure');
        } else if (
            //[dst,opcode,type,incoming]
            this.opcode === OpCode.PHI
        ) {
            this.buildPhi(lookupJSON(this.json, 'incoming'));
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
        } else {
            //TODO - unknown OpCodes!
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
        this.operands.forEach((o) => {
            if (o instanceof variable) findVariableRange(o, offset);
            else if (o instanceof constant) findConstantRange(o, offset);
            else if (o instanceof target) findTargetRange(o, offset);
        });
        this.range = new monaco.Range(this.line, offset, this.line, offset + this.toString().length);
    }

    private printOperands() {
        if (this.operands.length === 0) return '';
        let str = '';
        this.operands.forEach((o) => (str += o.toString() + (o instanceof target ? ' ' : ', ')));
        return this.operands[this.operands.length - 1] instanceof target ? str.slice(0, -1) : str.slice(0, -2);
    }

    public toString() {
        let str = this.opcode! + ' ' + (this.type ? this.type + ' ' : '');
        if (this.opcode === OpCode.CALL) str += lookupJSON(this.json, 'fun') + ' (' + this.printOperands() + ')';
        else if (this.opcode === OpCode.PHI) str += '[' + this.printOperands() + ']';
        else str += this.printOperands();
        return str /* + '//[' + Object.keys(this.json) + ']' */;
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

    public getTargets() {
        let targets: target[] = [];
        this.operands.forEach((o) => {
            if (o instanceof target) targets.push(o);
        });
        return targets;
    }

    public getFunctionName() {
        if (this.opcode === OpCode.CALL) return '' + lookupJSON(this.json, 'fun').split('(')[0];
        else return null;
    }
}

export default operation;

function matchOpCode(str: string | null) {
    if (!str) return null;
    let codes = Object.values(OpCode);
    for (let i = 0; i < codes.length; i++) if (str.toUpperCase() === codes[i].toUpperCase()) return codes[i];
    return null;
}
