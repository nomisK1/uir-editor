import * as monaco from 'monaco-editor';
import { Type } from './_node';
import component, { IComponentProps } from './_component';
import variable from './variable';

interface IGlobalProps extends IComponentProps {}

class global extends component {
    protected type: Type;
    protected variable: variable | null;

    constructor(props: IGlobalProps) {
        super(props);
        this.type = Type.GLOBAL;
        this.variable = null;
    }

    public build() {
        let name = this.name.match(/%[\w]*/)![0];
        let line = this.range.startLineNumber;
        let index = this.range.startColumn;
        this.variable = new variable({
            name,
            data: 'Variable:' + name + '@l:' + line,
            range: new monaco.Range(line, index + 6, line, index + 6 + name.length),
            prev: null,
            next: null,
            parents: null,
            context: this,
        });
    }

    public getVariables() {
        return [this.variable!];
    }

    public findNodeAt(position: monaco.Position): component | null {
        if (this.variable!.getRange().containsPosition(position)) return this.variable!.findNodeAt(position);
        return this;
    }
}

export default global;
