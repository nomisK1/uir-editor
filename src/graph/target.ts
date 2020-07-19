import * as monaco from 'monaco-editor';
import node, { INodeProps } from './_node';

interface ITargetProps extends INodeProps {}

class Target extends node {
    constructor(props: ITargetProps) {
        super(props);
        this.name = '' + Object.values(this.json)[0];
        this.range = new monaco.Range(this.line, 0, this.line, this.name.length);
    }

    public getVariables() {
        return [];
    }

    public toString() {
        return this.name + ':\n';
    }
}

export default Target;
