import * as monaco from 'monaco-editor';
import { matchType, indexOfStrict, lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface IConstantProps extends IValueProps {}

class constant extends _value {
    constructor(props: IConstantProps) {
        super(props);
        this.type = matchType(lookupJSON(this.json, 'type'));
        this.name = '' + lookupJSON(this.json, 'const');
    }

    public getVariables() {
        return [];
    }

    public toString() {
        return (this.showType && this.type ? this.type + ' ' : '') + this.name;
    }
}

export default constant;

export function findConstantRange(constant: constant, offset?: number) {
    if (constant.getRange()) return constant.getRange();
    let name = constant.getName()!;
    let line = constant.getLastLine();
    let index = indexOfStrict(name, constant.getContext()!.toString()) + (offset ? offset : 0);
    constant.setRange(new monaco.Range(line, index, line, index + name.length));
}
