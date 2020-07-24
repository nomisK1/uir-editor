import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import _component, { IComponentProps } from './_component';
import variable, { findVariableRange } from './variable';

interface IGlobalProps extends IComponentProps {}

class global extends _component {
    protected size: number;
    protected data: string;
    protected variable: variable;

    constructor(props: IGlobalProps) {
        super(props);
        this.name = 'const:' + lookupJSON(this.json, 'name');
        this.size = lookupJSON(this.json, 'size');
        this.data = lookupJSON(this.json, 'data');
        this.variable = new variable({
            json: this.json,
            line: this.line,
            context: this,
            parents: null,
        });
        findVariableRange(this.variable);
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public toString() {
        return 'const %' + this.variable.getName() + '[' + this.size + '] = "' + this.data + '"';
    }

    public getVariables() {
        return [this.variable];
    }
}

export default global;
