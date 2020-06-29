import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';

interface IVariableProps extends INodeProps {
    parents: variable[] | null;
}

class variable extends node {
    protected parents: variable[] | null;

    constructor(props: IVariableProps) {
        super(props);
        this.parents = props.parents;
    }

    public build() {}

    public findNodeAt(position: monaco.Position): node | null {
        return this;
    }

    public getVariables() {
        return [this];
    }

    public getParents() {
        if (this.parents === null) return [];
        return this.parents;
    }

    public setParents(parents: variable[] | null) {
        this.parents = parents;
    }
}

export default variable;
