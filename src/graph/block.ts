import * as monaco from 'monaco-editor';
import _node, { INodeProps, lookupJSON } from './_node';
import _instruction from './_instruction';
import assignment from './assignment';
import operation from './operation';
import variable from './variable';
import target from './target';

// Number of whitespaces at the start of each instruction
export const indentation = 2;

interface IBlockProps extends INodeProps {}

class block extends _node {
    protected target: target;
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
            this.instructions[this.instructions.length - 1].toString().length + indentation,
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

    private printInstructions() {
        let str = '';
        this.instructions.forEach((i) => {
            for (let i = 0; i < indentation; i++) str += ' ';
            str += i.toString() + '\n';
        });
        return str.slice(0, -1);
    }

    public toString() {
        return this.target!.toString() + '\n' + this.printInstructions();
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
}

export default block;
