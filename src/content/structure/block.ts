import * as monaco from 'monaco-editor';
import _node, { INodeProps, lookupJSON } from './_node';
import instruction from './instruction';
import variable from './variable';
import target from './target';
import label from './label';
import branch from '../tree/branch';

interface IBlockProps extends INodeProps {}

class block extends _node {
    protected label: label;
    protected targets: target[] = [];
    protected instructions: instruction[] = [];

    constructor(props: IBlockProps) {
        super(props);
        this.label = new label({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.buildInstructions(lookupJSON(this.json, 'instructions'));
        this.findRanges();
    }

    private buildInstructions(jsons: Object[]) {
        let line = this.line;
        jsons.forEach((json) => {
            line += 1;
            this.instructions.push(
                new instruction({
                    json,
                    line,
                    context: this,
                }),
            );
        });
        this.instructions.forEach((i) => this.targets.push(...i.getTargets()));
    }

    public findRanges() {
        this.name = this.context!.getName() + '//' + this.label.getAlias();
        this.label.setRange(new monaco.Range(this.line, 0, this.line, this.label.getAlias().length));
        this.range = new monaco.Range(this.line, 0, this.getLastLine() + 1, 0);
        //this.instructions[this.instructions.length - 1].toString().length + indentation,
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

    public getNodes() {
        let nodes: _node[] = [this, this.label];
        this.instructions.forEach((i) => nodes.push(...i.getNodes()));
        return nodes;
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
        let assignments: instruction[] = [];
        this.instructions.forEach((i) => {
            if (i.getAssigned()) assignments.push(i);
        });
        return assignments;
    }

    public getRelatedFunctions(fun: string) {
        let instructions: instruction[] = [];
        this.instructions.forEach((i) => {
            if (i.getFunctionName() === fun) instructions.push(i);
        });
        return instructions;
    }

    public getLabel() {
        return this.label;
    }

    public getTargets() {
        return this.targets;
    }

    public buildTargetTreeBranch() {
        let i = this.instructions[this.instructions.length - 1];
        return new branch({
            label: this.label,
            targets: i.getTargets(),
            opcode: i.getOpCode(),
            operands: i.getValues(),
        });
    }
}

export default block;

// Number of whitespaces at the start of each instruction
export const indentation = 2;
