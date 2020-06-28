import * as monaco from 'monaco-editor';
import node, { Type } from './_node';
import component, { IComponentProps } from './_component';
import variable from './variable';

interface IDeclarationProps extends IComponentProps {}

class declaration extends component {
    protected type: Type;
    protected args: variable[];

    constructor(props: IDeclarationProps) {
        super(props);
        this.type = Type.NULL;
        this.args = [];
    }

    public build() {
        // match type
        let type = this.data.match(/declare(.*?)@/)![1].trim();
        let types = Object.values(Type);
        types.forEach((t) => {
            let str = '' + t;
            if (str === type) {
                this.type = t;
            }
        });
        // match args
        let line = this.range.startLineNumber;
        let matches = this.data.match(/%[\w]*/g);
        matches?.forEach((m) => {
            this.args.push(
                new variable({
                    name: m,
                    data: 'Variable:' + m + '@l:' + line,
                    range: new monaco.Range(
                        line,
                        node.indexOfStrict(m, this.data),
                        line,
                        node.indexOfStrict(m, this.data) + m.length,
                    ),
                    prev: null,
                    next: null,
                    parents: null,
                    context: this,
                }),
            );
        });
    }

    public findNodeAt(position: monaco.Position): component | null {
        for (let i = 0; i < this.args.length; i++) {
            if (this.args[i].getRange().containsPosition(position)) return this.args[i].findNodeAt(position);
        }
        return this;
    }

    public getVariables() {
        let vars: variable[] = [];
        this.args.forEach((a) => {
            vars.push(...a.getVariables());
        });
        return vars;
    }
}

export default declaration;
