import * as monaco from 'monaco-editor';
import { Type } from './_node';
import component, { IComponentProps } from './_component';
import variable from './variable';

// keyword: declare | /declare.*/
interface IDeclarationProps extends IComponentProps {}

class declaration extends component {
    protected type: Type;
    protected args: variable[];

    constructor(props: IDeclarationProps) {
        super(props);
        this.type = Type.VOID;
        this.args = [];
    }

    public build() {
        let line = this.range.startLineNumber;
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
        let argument = this.data.match(/\((.*?)\)/)![1];
        let args = argument.match(/%[\w]*/g);
        args?.forEach((a) => {
            this.args.push(
                new variable({
                    name: a,
                    data: argument,
                    range: new monaco.Range(line, this.data.indexOf(a), line, this.data.indexOf(a) + a.length),
                    prev: /* this.args.length > 0 ? this.args[this.args.length - 1] :  */ null,
                    next: null,
                    parents: null,
                    context: this,
                }),
            );
        });
        // add references to next variable
        /* for (let i = 0; i < this.args.length - 1; i++) {
            this.args[i].setNext(this.args[i + 1]);
        } */
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
