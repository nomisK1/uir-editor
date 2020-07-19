import * as monaco from 'monaco-editor';
import _node, { INodeProps, Type, matchType, indexOfStrict, lookupJSON } from './_node';

export function findVariableRange(variable: variable) {
    if (variable.getRange()) return variable.getRange();
    let index = indexOfStrict('%' + variable.getName(), variable.getContext()!.toString());
    variable.setRange(
        new monaco.Range(variable.getLastLine(), index, variable.getLastLine(), index + variable.getName()!.length + 1),
    );
}

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
