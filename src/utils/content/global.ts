import * as monaco from 'monaco-editor';
import { Type } from './_node';
import component, { IComponentProps } from './_component';
import variable from './variable';

// keyword: const | /const.*/
interface IGlobalProps extends IComponentProps {}

class global extends component {
    protected type: Type;
    protected target: variable | null;

    constructor(props: IGlobalProps) {
        super(props);
        this.type = Type.GLOBAL;
        this.target = null;
    }

    public build() {
        let name = this.name.match(/%[\w]*/)![0];
        let line = this.range.startLineNumber;
        let index = this.range.startColumn;
        this.target = new variable({
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
        return [this.target!];
    }

    public findNodeAt(position: monaco.Position): component | null {
        if (this.target!.getRange().containsPosition(position)) return this.target!.findNodeAt(position);
        return this;
    }
}

export default global;
