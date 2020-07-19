import * as monaco from 'monaco-editor';
import node, { INodeProps, lookupJSON } from './_node';
import _instruction from './_instruction';
import assignment from './assignment';
import operation from './operation';
import variable from './variable';
import target from './target';

// Number of whitespaces at the start of each instruction
export const offset = 2;

interface IBlockProps extends INodeProps {}

class block extends node {
    protected target: target | null;
    protected instructions: _instruction[];

    constructor(props: IBlockProps) {
        super(props);
        this.target = new target({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.instructions = [];
        this.buildInstructions(lookupJSON(this.json, 'instructions'));
        this.name = 'block$' + this.target.getName() + '@line:' + this.line;
        this.range = new monaco.Range(
            this.line,
            0,
            this.getLastLine(),
            this.instructions[this.instructions.length - 1].toString().length + offset,
        );
    }

    private buildInstructions(jsons: Object[]) {
        let line = this.line;
        jsons.forEach((json) => {
            line += 1;
            if (lookupJSON(json, 'dst'))
                this.instructions.push(
                    new assignment({
                        json,
                        line,
                        context: this,
                    }),
                );
            else
                this.instructions.push(
                    new operation({
                        json,
                        line,
                        context: this,
                    }),
                );
        });
    }

    public getVariables() {
        let vars: variable[] = [];
        this.instructions.forEach((i) => {
            vars.push(...i.getVariables());
        });
        return vars;
    }

    public getLastLine() {
        return this.line + this.instructions.length;
    }

    private printInstructions() {
        let str = '';
        this.instructions.forEach((i) => {
            for (let i = 0; i < offset; i++) str += ' ';
            str += i.toString() + '\n';
        });
        return str.slice(0, -1);
    }

    public toString() {
        return this.target!.toString() + this.printInstructions();
    }
}

export default block;
