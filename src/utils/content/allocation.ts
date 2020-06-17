import * as monaco from 'monaco-editor';
import instruction, { IInstructionProps } from './_instruction';
import variable from './variable';
import operation from './operation';

// keyword: "="
interface IAllocationProps extends IInstructionProps {}

class allocation extends instruction {
    protected target: variable | null;
    protected operation: operation | null;

    constructor(props: IAllocationProps) {
        super(props);
        this.target = null;
        this.operation = null;
    }

    public build() {
        let line = this.range.startLineNumber;
        // split assignment on "="
        let sides = this.data.split(/=/);
        for (let i = 0; i < sides.length; i++) {
            sides[i] = sides[i].trim();
        }
        // define target and operation
        this.operation = new operation({
            name: 'Operation@l:' + line,
            data: sides[1],
            range: new monaco.Range(line, sides[0].length + 5, line, sides[0].length + 5 + sides[1].length),
            prev: null,
            next: null,
        });
        this.operation.build();
        this.target = new variable({
            name: sides[0],
            data: this.data,
            range: new monaco.Range(line, 2, line, 2 + sides[0].length),
            prev: null,
            next: this.operation,
            parents: this.operation.getVariables(),
        });
        // add reference to target
        this.operation.setNext(this.target);
    }

    public getVariables() {
        let vars: variable[] = [];
        vars.push(this.target!);
        vars.push(...this.operation!.getVariables());
        return vars;
    }

    public getChild() {
        return this.target;
    }

    public hasParent(name: string) {
        if (this.operation) return this.operation.hasVariable(name);
    }
}

export default allocation;
