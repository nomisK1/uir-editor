import * as monaco from 'monaco-editor';
import _node, { INodeProps, lookupJSON } from './_node';
import _instruction from './_instruction';
import assignment from './assignment';
import operation from './operation';
import variable from './variable';
import target from './target';
import label from './label';
import branch from './branch';

// Number of whitespaces at the start of each instruction
export const indentation = 2;

interface IBlockProps extends INodeProps {}

class block extends _node {
    protected label: label;
    protected targets: target[] = [];
    protected instructions: _instruction[] = [];

    constructor(props: IBlockProps) {
        super(props);
        this.label = new label({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.name = 'block$' + this.label.getName() + '@line:' + this.line;
        this.buildInstructions(lookupJSON(this.json, 'instructions'));
        this.findRanges();
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
            else {
                this.instructions.push(
                    new operation({
                        json,
                        line,
                        context: this,
                    }),
                );
                this.targets.push(...(this.instructions[this.instructions.length - 1] as operation).getTargets());
            }
        });
    }

    public findRanges() {
        this.range = new monaco.Range(
            this.line,
            0,
            this.getLastLine(),
            this.instructions[this.instructions.length - 1].toString().length + indentation,
        );
    }

    public getLastLine() {
        return this.line + this.instructions.length;
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
        return this.label!.toString() + '\n' + this.printInstructions();
    }

    public getVariables() {
        let vars: variable[] = [];
        this.instructions.forEach((i) => vars.push(...i.getVariables()));
        return vars;
    }

    public getNodeAt(position: monaco.Position): _node | null {
        if (this.label.getRange().containsPosition(position)) return this.label.getNodeAt(position);
        for (let i = 0; i < this.instructions.length; i++)
            if (this.instructions[i].getRange().containsPosition(position))
                return this.instructions[i].getNodeAt(position);
        return this;
    }

    public getAssignments() {
        let assignments: assignment[] = [];
        this.instructions.forEach((i) => {
            if (i instanceof assignment) assignments.push(i);
        });
        return assignments;
    }

    public getOperations() {
        let operations: operation[] = [];
        this.instructions.forEach((i) =>
            operations.push(i instanceof assignment ? i.getOperation() : (i as operation)),
        );
        return operations;
    }

    public getRelatedFunctions(fun: string) {
        let nodes: _node[] = [];
        this.getOperations().forEach((o) => {
            if (o.getFunctionName() === fun) nodes.push(o);
        });
        return nodes;
    }

    public getLabel() {
        return this.label;
    }

    public getTargets() {
        return this.targets;
    }

    public buildTargetTreeBranch() {
        let operations = this.getOperations();
        let op = operations[operations.length - 1];
        return new branch({
            label: this.label,
            targets: op.getTargets(),
            opcode: op.getOpCode(),
            operands: op.getValues(),
        });
    }
}

export default block;
