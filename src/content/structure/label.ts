import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import target, { ITargetProps } from './target';

interface ILabelProps extends ITargetProps {}

class label extends target {
    constructor(props: ILabelProps) {
        super(props);
        this.name = '' + lookupJSON(this.json, 'label');
        this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
    }

    public toString() {
        return this.name + ':';
    }
}

export default label;
