import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './_node';
import _function, { IFunctionProps } from './_function';
import { findVariableRangeIn } from './variable';

interface IDeclarationProps extends IFunctionProps {}

class declaration extends _function {
    protected fullName: string;

    constructor(props: IDeclarationProps) {
        super(props);
        this.fullName = '' + lookupJSON(this.json, 'name');
        this.name = this.fullName.split('(')[0];
        this.buildArgs(lookupJSON(this.json, 'args'));
        this.findRanges();
    }

    public findRanges() {
        let compare = this.toString();
        this.args.forEach((a) => (compare = findVariableRangeIn(a, compare)));
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public toString() {
        return 'declare ' + this.type + ' @' + this.fullName + '(' + this.printArgs() + ')';
    }

    public getNodes() {
        return [this, ...this.args];
    }

    public getVariables() {
        return this.args;
    }

    public getNodeAt(position: monaco.Position): _node | null {
        for (let i = 0; i < this.args.length; i++)
            if (this.args[i].getRange().containsPosition(position)) return this.args[i].getNodeAt(position);
        return this;
    }
}

export default declaration;
