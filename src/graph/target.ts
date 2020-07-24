import * as monaco from 'monaco-editor';
import _node, { INodeProps, indexOfStrict, lookupJSON } from './_node';

interface ITargetProps extends INodeProps {
    reference?: string;
}

class target extends _node {
    protected label: boolean = false;

    constructor(props: ITargetProps) {
        super(props);
        if (props.reference) this.name = lookupJSON(this.json, props.reference);
        else if (lookupJSON(this.json, 'label')) {
            this.label = true;
            this.name = '' + lookupJSON(this.json, 'label');
            this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
        } else this.name = '' + lookupJSON(this.json, 'target');
    }

    public toString() {
        if (this.label) return this.name + ':';
        return '%' + this.name;
    }

    public getVariables() {
        return [];
    }

    public getNodeAt(position: monaco.Position): _node | null {
        return this;
    }
}

export default target;

export function findTargetRange(target: target, offset?: number) {
    if (target.getRange()) return target.getRange();
    let name = target.getName();
    let line = target.getLastLine();
    let index = indexOfStrict('%' + name, target.getContext()!.toString()) + (offset ? offset : 0);
    target.setRange(new monaco.Range(line, index, line, index + name.length + 1));
}
