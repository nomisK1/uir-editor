import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface ITargetProps extends IValueProps {}

class target extends _value {
    constructor(props: ITargetProps) {
        super(props);
        this.name = '' + lookupJSON(this.json, 'label');
        this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
    }

    public getVariables() {
        return [];
    }

    public toString() {
        return this.name + ':';
    }
}

export default target;
