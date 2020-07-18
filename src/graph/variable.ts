import * as monaco from 'monaco-editor';
import _node, { INodeProps, Type, matchType, indexOfStrict } from './_node';

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
        this.type = null;
        let keys = Object.keys(this.json);
        if (keys.includes('isConst') && Object.values(this.json)[1]) {
            this.type = Type.GLOBAL;
            this.name = '' + Object.values(this.json)[1];
        } else {
            if (keys.includes('type')) this.type = matchType(Object.values(this.json)[1]);
            this.name = '' + Object.values(this.json)[0];
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
