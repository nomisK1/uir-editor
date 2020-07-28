import * as monaco from 'monaco-editor';
import _node, { INodeProps, indexOfStrict, lookupJSON } from './_node';

interface ITargetProps extends INodeProps {
    reference?: string;
}

class target extends _node {
    protected isLabel?: boolean;

    constructor(props: ITargetProps) {
        super(props);
        if (props.reference) this.name = lookupJSON(this.json, props.reference);
        else if (lookupJSON(this.json, 'label')) {
            this.isLabel = true;
            this.name = '' + lookupJSON(this.json, 'label');
            this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
        } else this.name = '' + lookupJSON(this.json, 'target');
    }

    // Should always be called in the context
    public findRanges() {}

    public toString() {
        if (this.isLabel) return this.name + ':';
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

export function findTargetRangeIn(target: target, text: string, offset?: number) {
    let name = '%' + target.getName();
    let line = target.getLastLine();
    let coloumn = indexOfStrict(name, text) + (offset ? offset : 0);
    target.setRange(new monaco.Range(line, coloumn, line, coloumn + name.length));
    return text.replace(name, '%'.repeat(name.length));
}
