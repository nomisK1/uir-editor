import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './_node';
import _function, { IFunctionProps } from './_function';
import block from './block';
import assignment from './assignment';
import { findVariableRangeIn } from './variable';
import target from './target';

// Number of linebreaks between blocks
const linebreaks = 2;

interface IDefinitionProps extends IFunctionProps {}

class definition extends _function {
    protected blocks: block[] = [];

    constructor(props: IDefinitionProps) {
        super(props);
        this.name = '' + lookupJSON(this.json, 'name');
        this.buildArgs(lookupJSON(this.json, 'args'));
        this.buildBlocks(lookupJSON(this.json, 'blocks'));
        this.findRanges();
    }

    private buildBlocks(jsons: Object[]) {
        let line = this.line;
        jsons.forEach((json) => {
            line += linebreaks;
            this.blocks.push(
                new block({
                    json,
                    line,
                    context: this,
                }),
            );
            line = this.blocks[this.blocks.length - 1].getLastLine();
        });
        let labels = this.blocks.map((b) => b.getLabel());
        let labelNames = labels.map((l) => l.getName());
        let targets: target[] = [];
        this.blocks.forEach((b) => targets.push(...b.getTargets()));
        targets.forEach((t) => t.setGoal(labels[labelNames.indexOf(t.getName())]));
    }

    public findRanges() {
        let compare = this.toString();
        this.args.forEach((a) => (compare = findVariableRangeIn(a, compare)));
        this.range = new monaco.Range(this.line, 0, this.getLastLine(), 1);
    }

    public getLastLine() {
        return this.blocks[this.blocks.length - 1].getLastLine() + 1;
    }

    private printBlocks() {
        let str = '';
        this.blocks.forEach((b) => {
            str += b.toString();
            for (let i = 0; i < linebreaks; i++) str += '\n';
        });
        return str.slice(0, -1);
    }

    public toString() {
        return (
            'define ' + this.type + ' @' + this.name + '(' + this.printArgs() + ') [\n] {\n' + this.printBlocks() + '}'
        );
    }

    public getVariables() {
        let vars = [...this.args];
        this.blocks.forEach((b) => vars.push(...b.getVariables()));
        return vars;
    }

    public getNodeAt(position: monaco.Position): _node | null {
        for (let i = 0; i < this.args.length; i++)
            if (this.args[i].getRange().containsPosition(position)) return this.args[i].getNodeAt(position);
        for (let i = 0; i < this.blocks.length; i++)
            if (this.blocks[i].getRange().containsPosition(position)) return this.blocks[i].getNodeAt(position);
        return this;
    }

    public getArgs() {
        return this.args;
    }

    public getAssignments() {
        let assignments: assignment[] = [];
        this.blocks.forEach((b) => assignments.push(...b.getAssignments()));
        return assignments;
    }

    public getRelatedFunctions(fun: string) {
        let nodes: _node[] = [];
        this.blocks.forEach((b) => nodes.push(...b.getRelatedFunctions(fun)));
        return nodes;
    }

    public getTargets() {
        let targets: target[] = [];
        this.blocks.forEach((b) => targets.push(b.getLabel(), ...b.getTargets()));
        return targets;
    }

    public getTargetTreeNode(target: target) {
        for (let i = 0; i < this.blocks.length; i++)
            if (this.blocks[i].getLabel().getName() === target.getName()) return this.blocks[i].getTargetTreeNode();
        return null!;
    }

    public getFoldingRanges() {
        let ranges: { range: monaco.Range; definition?: boolean }[] = [];
        ranges.push({ range: this.range!, definition: true });
        this.blocks.forEach((b) => ranges.push({ range: b.getRange() }));
        return ranges;
    }
}

export default definition;
