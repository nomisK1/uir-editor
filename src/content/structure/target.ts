import * as monaco from 'monaco-editor';
import _node, { INodeProps, indexOfStrict, lookupJSON } from './_node';
import label from './label';

export interface ITargetProps extends INodeProps {
    reference?: string;
}

class target extends _node {
    protected goal: label | null = null;

    constructor(props: ITargetProps) {
        super(props);
        this.name = props.reference ? lookupJSON(this.json, props.reference) : '' + lookupJSON(this.json, 'target');
    }

    // Should always be called in the context
    public findRanges() {}

    public toString() {
        return '%' + this.name;
    }

    public getVariables() {
        return [];
    }

    public getNodeAt(position: monaco.Position): _node | null {
        return this;
    }

    public getGoal() {
        return this.goal;
    }

    public setGoal(goal: label) {
        this.goal = goal;
    }
}

export default target;

export function findTargetRangeIn(target: target, text: string, offset?: number) {
    let name = '%' + target.getName();
    let line = target.getLastLine();
    let coloumn = indexOfStrict(name, text) + (offset ? offset : 0);
    target.setRange(new monaco.Range(line, coloumn, line, coloumn + name.length));
    return text.replace(name, '%'.repeat(name.length));
}
