import * as monaco from 'monaco-editor';
import { Type, matchType, indexOfStrict, lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface IVariableProps extends IValueProps {
    parents: variable[] | null;
}

class variable extends _value {
    protected parents: variable[] | null;

    constructor(props: IVariableProps) {
        super(props);
        this.parents = props.parents;
        if (lookupJSON(this.json, 'isConst')) {
            this.type = Type.GLOBAL;
            this.name = '' + lookupJSON(this.json, 'name');
        } else if (lookupJSON(this.json, 'global')) {
            this.type = Type.GLOBAL;
            this.showType = true;
            this.name = '' + lookupJSON(this.json, 'var');
        } else {
            this.type = matchType(lookupJSON(this.json, 'type'));
            let assigned = lookupJSON(this.json, 'dst');
            this.name = '' + (assigned ? assigned : lookupJSON(this.json, 'var'));
        }
    }

    public toString() {
        return (this.showType && this.type ? this.type + ' ' : '') + '%' + this.name;
    }

    public getVariables() {
        return [this];
    }
}

export default variable;

export function findVariableRange(variable: variable, offset?: number) {
    if (variable.getRange()) return variable.getRange();
    let name = variable.getName()!;
    let line = variable.getLastLine();
    let index = indexOfStrict('%' + name, variable.getContext()!.toString()) + (offset ? offset : 0);
    variable.setRange(new monaco.Range(line, index, line, index + name.length + 1));
}
