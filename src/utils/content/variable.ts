import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';

// keyword: "%"
interface IVariableProps extends INodeProps {
    parents: variable[] | null;
}

class variable extends node {
    protected parents: variable[] | null;

    constructor(props: IVariableProps) {
        super(props);
        this.parents = props.parents;
        /* this.name = this.name.slice(1); */
    }

    public build() {}

    public findNode(position: monaco.Position): node | null {
        return this;
    }

    public getVariables() {
        return [this];
    }

    public getParents() {
        if (this.parents === null) return [];
        return this.parents;
    }

    public getRange() {
        return this.range;
    }

    public isCalled(name: string) {
        return this.name === name;
    }
}

export default variable;
