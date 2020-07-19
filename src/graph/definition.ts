import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import _function, { IFunctionProps } from './_function';
import block from './block';
import variable from './variable';

// Number of linebreaks between blocks
const offset = 2;

interface IDefinitionProps extends IFunctionProps {}

class definition extends _function {
    protected blocks: block[];

    constructor(props: IDefinitionProps) {
        super(props);
        this.blocks = [];
        this.name = '' + lookupJSON(this.json, 'name');
        this.buildArgs(lookupJSON(this.json, 'args'));
        this.buildBlocks(lookupJSON(this.json, 'blocks'));
        this.range = new monaco.Range(this.line, 0, this.getLastLine(), 1);
    }

    private buildBlocks(jsons: Object[]) {
        let line = this.line;
        jsons.forEach((json) => {
            line += offset;
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
        let vars: variable[] = [];
        this.blocks.forEach((b) => {
            vars.push(...b.getVariables());
        });
        return vars;
    }

    public getLastLine() {
        return this.blocks[this.blocks.length - 1].getLastLine() + 1;
    }

    private printBlocks() {
        let str = '';
        this.blocks.forEach((b) => {
            str += b.toString();
            for (let i = 0; i < offset; i++) str += '\n';
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
