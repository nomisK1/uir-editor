import * as monaco from 'monaco-editor';
import _node, { INodeProps, indexOfStrict, lookupJSON } from './_node';

interface ITargetProps extends INodeProps {
    name?: string;
}

class target extends _node {
    protected label: boolean;

    constructor(props: ITargetProps) {
        super(props);
        this.label = false;
        if (props.name) this.name = lookupJSON(this.json, props.name);
        else if (lookupJSON(this.json, 'label')) {
            this.label = true;
            this.name = '' + lookupJSON(this.json, 'label');
            this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
        } else this.name = '' + lookupJSON(this.json, 'target');
    }

    public getVariables() {
        return [];
    }

    public toString() {
        if (this.label) return this.name + ':';
        return '%' + this.name;
    }
}

export default target;

export function findTargetRange(target: target, offset?: number) {
    if (target.getRange()) return target.getRange();
    let name = target.getName()!;
    let line = target.getLastLine();
    let index = indexOfStrict('%' + name, target.getContext()!.toString()) + (offset ? offset : 0);
    target.setRange(new monaco.Range(line, index, line, index + name.length + 1));
}
