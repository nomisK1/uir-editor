import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';

interface ITargetProps extends INodeProps {}

class Target extends node {
    // eslint-disable-next-line
    constructor(props: ITargetProps) {
        super(props);
    }

    public build() {}

    public findNodeAt(position: monaco.Position): node | null {
        return this;
    }

    public getVariables() {
        return [];
    }
}

export default Target;
