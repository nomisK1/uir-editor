import * as monaco from 'monaco-editor';
import _function, { IFunctionProps } from './_function';

interface IDeclarationProps extends IFunctionProps {}

class declaration extends _function {
    protected fullName: string;

    constructor(props: IDeclarationProps) {
        super(props);
        this.fullName = '' + Object.values(this.json)[0];
        this.name = this.fullName.split('(')[0];
        this.buildArgs(Object.values(this.json)[2]);
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public getVariables() {
        return this.args;
    }

    public toString() {
        return 'declare ' + this.type + ' @' + this.fullName + ' (' + this.printArgs() + ')';
    }
}

export default declaration;
