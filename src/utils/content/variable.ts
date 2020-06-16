import node, { INodeProps } from './_node';
import range from '../editor/IRange';

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

    public getVariables() {
        return [this];
    }

    public getParents() {
        if (this.parents === null) return [];
        return this.parents;
    }

    public getRange(): range {
        return { line: this.line, start: this.index /*  + 1 */, end: this.index + this.name.length /*  + 1 */ };
    }

    public isCalled(name: string) {
        return this.name === name;
    }
}

export default variable;
