import * as monaco from 'monaco-editor';
import _function, { IFunctionProps } from './_function';
import block from './block';

interface IDefinitionProps extends IFunctionProps {}

class definition extends _function {
    // Number of linebreaks between blocks
    static offset = 2;

    protected blocks: block[];

    constructor(props: IDefinitionProps) {
        super(props);
        this.blocks = [];
        this.name = '' + Object.values(this.json)[0];
        this.buildArgs(Object.values(this.json)[2]);
        this.buildBlocks(Object.values(this.json)[4]);
        this.range = new monaco.Range(this.line, 0, this.getLastLine(), 1);
    }

    private buildBlocks(jsons: Object[]) {
        let line = this.line;
        jsons.forEach((json) => {
            line += definition.offset;
            this.blocks.push(
                new block({
                    json,
                    line,
                    context: this,
                }),
            );
            line = this.blocks[this.blocks.length - 1].getLastLine();
        });
    }

    public getVariables() {
        return this.args;
    }

    public getLastLine() {
        return this.blocks[this.blocks.length - 1].getLastLine() + 1;
    }

    private printBlocks() {
        let str = '';
        this.blocks.forEach((b) => {
            str += b.toString();
            for (let i = 0; i < block.offset; i++) str += '\n';
        });
        return str.slice(0, -1);
    }

    public toString() {
        return (
            'define ' + this.type + ' @' + this.name + '(' + this.printArgs() + ') [\n] {\n' + this.printBlocks() + '}'
        );
    }
}

export default definition;
