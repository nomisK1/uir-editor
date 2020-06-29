import * as monaco from 'monaco-editor';
import instruction, { IInstructionProps } from './_instruction';
import operation from './operation';
import variable from './variable';

interface IAllocationProps extends IInstructionProps {}

class allocation extends instruction {
    protected variable: variable | null;
    protected operation: operation | null;

    constructor(props: IAllocationProps) {
        super(props);
        this.variable = null;
        this.operation = null;
    }

    public build() {
        // split assignment on "="
        let sides = this.data.split(/=/);
        for (let i = 0; i < sides.length; i++) {
            sides[i] = sides[i].trim();
        }
        // define variable and operation
        let line = this.range.startLineNumber;
        this.operation = new operation({
            name: 'Operation@l:' + line,
            data: sides[1],
            range: new monaco.Range(line, sides[0].length + 5, line, sides[0].length + 5 + sides[1].length),
            prev: null,
            next: null,
            context: this,
        });
        this.operation.build();
        this.variable = new variable({
            name: sides[0],
            data: 'Variable:' + sides[0] + '@l:' + line,
            range: new monaco.Range(line, 2, line, 2 + sides[0].length),
            prev: null,
            next: null,
            parents: this.operation.getVariables(),
            context: this,
        });
    }

    public findNodeAt(position: monaco.Position): instruction | null {
        if (this.variable!.getRange().containsPosition(position)) return this.variable!.findNodeAt(position);
        if (this.operation!.getRange().containsPosition(position)) return this.operation!.findNodeAt(position);
        return this;
    }

    public getVariables() {
        let vars: variable[] = [];
        vars.push(this.variable!);
        vars.push(...this.operation!.getVariables());
        return vars;
    }

    public getChild() {
        return this.variable;
    }

    public hasParent(name: string) {
        if (this.operation) return this.operation.hasVariable(name);
    }
}

export default allocation;
