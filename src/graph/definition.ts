import * as monaco from 'monaco-editor';
import _function, { IFunctionProps } from './_function';

interface IDefinitionProps extends IFunctionProps {}

class definition extends _function {
    protected blocks: Object;

    constructor(props: IDefinitionProps) {
        super(props);
        this.name = '' + Object.values(this.json)[0];
        this.buildArgs(Object.values(this.json)[2]);
        this.blocks = Object.values(this.json)[4];
        this.buildBlocks();
        this.range = new monaco.Range(this.line, 0, this.getLastLine(), 1);
    }

    private buildBlocks() {
        //TODO
    }

    public getVariables() {
        return this.args;
    }

    public getLastLine() {
        return this.line;
    }

    public toString() {
        return 'define ' + this.type + ' @' + this.name + '(' + this.printArgs() + ') [\n] {\n' + this.blocks + '}';
    }
}

export default definition;
