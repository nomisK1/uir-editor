import * as monaco from 'monaco-editor';
import { Type, matchType, lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface IConstantProps extends IValueProps {
    showType?: true;
}

class constant extends _value {
    protected type: Type | null;

    constructor(props: IConstantProps) {
        super(props);
        this.showType = props.showType;
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.name = '' + lookupJSON(this.json, 'const');
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public getVariables() {
        return [];
    }

    public toString() {
        return (this.showType && this.type ? this.type + ' ' : '') + this.name;
    }
}

export default constant;
