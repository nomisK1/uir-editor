import * as monaco from 'monaco-editor';
import component, { IComponentProps } from './_component';
import variable from './variable';

// keyword: const | /const.*/
interface IGlobalProps extends IComponentProps {}

class global extends component {
    protected target: variable | null;

    constructor(props: IGlobalProps) {
        super(props);
        this.target = null;
    }

    public build() {
        let name = this.name.match(/%[\w]*/)![0];
        let line = this.range.startLineNumber;
        let index = this.range.startColumn;
        this.target = new variable({
            name,
            data: this.data,
            range: new monaco.Range(line, index + 6, line, index + 6 + name.length),
            prev: this.prev,
            next: this.prev,
            parents: null,
        });
    }

    public getVariables() {
        return [this.target!];
    }

    public findNode(line: number, column: number) {}
}

export default global;
