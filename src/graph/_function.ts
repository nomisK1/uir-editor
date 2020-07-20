import { matchType, lookupJSON } from './_node';
import _component, { IComponentProps } from './_component';
import variable, { findVariableRange } from './variable';

export interface IFunctionProps extends IComponentProps {}

abstract class _function extends _component {
    protected args: variable[];

    constructor(props: IFunctionProps) {
        super(props);
        this.args = [];
        this.type = matchType(lookupJSON(this.json, 'returnType'));
    }

    protected buildArgs(jsons: Object[]) {
        jsons.forEach((json) => {
            this.args.push(
                new variable({
                    json,
                    line: this.line,
                    context: this,
                    parents: null,
                    showType: true,
                }),
            );
            this.args.forEach((a) => findVariableRange(a));
        });
    }

    protected printArgs() {
        let str = '';
        this.args.forEach((a) => {
            str += a.toString() + ', ';
        });
        return str.slice(0, -2);
    }
}

export default _function;
