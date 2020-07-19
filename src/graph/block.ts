import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';
import target from './target';

interface IBlockProps extends INodeProps {}

class block extends node {
    // Number of whitespaces at the start of each instruction
    static offset = 2;

    protected target: target | null;
    protected instructions: Object[];

    constructor(props: IBlockProps) {
        super(props);
        this.name = '' + Object.values(this.json)[0];
        this.target = new target({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.instructions = [{}];
        this.range = new monaco.Range(
            this.line,
            0,
            this.getLastLine(),
            this.instructions[this.instructions.length - 1].toString().length + block.offset,
        );
    }

    public getVariables() {
        return [];
    }

    public getLastLine() {
        return this.line + this.instructions.length;
    }

    private printInstructions() {
        let str = '';
        this.instructions.forEach((i) => {
            for (let i = 0; i < block.offset; i++) str += ' ';
            str += i.toString() + '\n';
        });
        return str.slice(0, -1);
    }

    public toString() {
        return this.target!.toString() + this.printInstructions();
    }
}

export default block;
