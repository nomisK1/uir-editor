import * as monaco from 'monaco-editor';
import component, { IComponentProps } from './_component';
import variable, { findVariableRange } from './variable';

interface IGlobalProps extends IComponentProps {}

class global extends component {
    protected size: number;
    protected data: string;
    protected variable: variable;

    constructor(props: IGlobalProps) {
        super(props);
        this.name = '' + Object.values(this.json)[1];
        this.size = Object.values(this.json)[2];
        this.data = Object.values(this.json)[3];
        this.variable = new variable({
            json: this.json,
            line: this.line,
            context: this,
            parents: null,
        });
        findVariableRange(this.variable);
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public getVariables() {
        return [this.variable];
    }

    public toString() {
        return 'const %' + this.name + '[' + this.size + '] = "' + this.data + '"';
    }
}

export default global;
