import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';
import instruction from './_instruction';
import allocation from './allocation';
import operation from './operation';
import variable from './variable';

// keyword: label (name)
interface IBlockProps extends INodeProps {
    target: variable;
}

class block extends node {
    static offset = 2;

    protected instructions: instruction[];
    protected target: variable;

    constructor(props: IBlockProps) {
        super(props);
        this.instructions = [];
        this.target = props.target;
    }

    public build() {
        let line = this.range.startLineNumber;
        // split block into lines
        let lines = this.data.split(/\n/).slice(1);
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].trim();
        }
        // define instructions
        lines.forEach((l) => {
            line += 1;
            if (l.includes('=')) {
                this.instructions.push(
                    new allocation({
                        name: 'Allocation@l:' + line,
                        data: l,
                        range: new monaco.Range(line, block.offset, line, block.offset + l.length),
                        prev: this.instructions.length > 0 ? this.instructions[this.instructions.length - 1] : null,
                        next: null,
                    }),
                );
            } else {
                this.instructions.push(
                    new operation({
                        name: 'Operation@l:' + line,
                        data: l,
                        range: new monaco.Range(line, block.offset, line, block.offset + l.length),
                        prev: this.instructions.length > 0 ? this.instructions[this.instructions.length - 1] : null,
                        next: null,
                    }),
                );
            }
        });
        // add references to next instruction
        for (let i = 0; i < this.instructions.length - 1; i++) {
            this.instructions[i].setNext(this.instructions[i + 1]);
        }
        // build instructions
        this.instructions.forEach((i) => {
            i.build();
        });
        // set range
        this.range = new monaco.Range(
            this.range.startLineNumber,
            0,
            this.getLastLineNumber(),
            this.instructions[this.instructions.length - 1].getData().length + block.offset,
        );
    }

    public findNode(position: monaco.Position): node | null {
        if (this.target!.getRange().containsPosition(position)) return this.target.findNode(position);
        for (let i = 0; i < this.instructions.length; i++) {
            if (this.instructions[i].getRange().containsPosition(position))
                return this.instructions[i].findNode(position);
        }
        return this;
    }

    public getVariables() {
        let vars: variable[] = [];
        this.instructions.forEach((i) => {
            vars.push(...i.getVariables());
        });
        return vars;
    }

    public getAllocations() {
        let allocations: allocation[] = [];
        this.instructions.forEach((i) => {
            if (i instanceof allocation) allocations.push(i);
        });
        return allocations;
    }

    public getTarget() {
        return this.target;
    }

    private getLastLineNumber() {
        if (this.next === null) return this.range.endLineNumber;
        return this.next.getRange().startLineNumber - 2;
    }
}

export default block;
