import * as monaco from 'monaco-editor';
import _node, { INodeProps, Type, matchType, indexOfStrict, lookupJSON } from './_node';

interface IVariableProps extends INodeProps {
    parents: variable[] | null;
}

class variable extends _node {
    protected parents: variable[] | null;
    protected type: Type | null;

    constructor(props: IVariableProps) {
        super(props);
        this.parents = props.parents;
        if (lookupJSON(this.json, 'isConst')) {
            this.type = Type.GLOBAL;
            this.name = '' + lookupJSON(this.json, 'name');
        } else if (lookupJSON(this.json, 'dst')) {
            this.type = null;
            this.name = '' + lookupJSON(this.json, 'dst');
        } else {
            this.type = matchType(lookupJSON(this.json, 'type'));
            this.name = '' + lookupJSON(this.json, 'var');
        }
    }

    public getVariables() {
        return [this];
    }

    public toString() {
        return (this.type ? this.type + ' ' : '') + '%' + this.name;
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
