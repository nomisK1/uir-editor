import { matchType, lookupJSON } from './_node';
import _component, { IComponentProps } from './_component';
import variable from './variable';

export interface IFunctionProps extends IComponentProps {}

abstract class _function extends _component {
    protected args: variable[] = [];

    constructor(props: IFunctionProps) {
        super(props);
        this.type = matchType(lookupJSON(this.json, 'returnType'));
    }

    protected buildArgs(jsons: Object[]) {
        jsons.forEach((json) => {
            this.args.push(
                new variable({
                    json,
                    line: this.line,
                    context: this,
                    showType: true,
                }),
            );
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
