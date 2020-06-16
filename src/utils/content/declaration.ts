import { Type } from './_node';
import functon, { IFunctonProps } from './_functon';
import variable from './variable';

// keyword: declare | /declare.*/
interface IDeclarationProps extends IFunctonProps {}

class declaration extends functon {
    // eslint-disable-next-line
    constructor(props: IDeclarationProps) {
        super(props);
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
        let argument = this.data.match(/\((.*?)\)/)![1];
        let args = argument.match(/%[\w]*/g);
        args?.forEach((a) => {
            this.args.push(
                new variable({
                    name: a,
                    data: argument,
                    line: this.line,
                    index: this.data.indexOf(a),
                    prev: this.args.length > 0 ? this.args[this.args.length - 1] : null,
                    next: null,
                    parents: null,
                }),
            );
        });
        // add references to next variable
        for (let i = 0; i < this.args.length - 1; i++) {
            this.args[i].setNext(this.args[i + 1]);
        }
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
