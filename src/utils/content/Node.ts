import * as monaco from 'monaco-editor';

interface INodeProps {
    name: string;
    line: number;
    index: number;
    isAssigned: boolean;
    parents: Node[];
}

class Node {
    public name: string;
    public line: number;
    public index: number;
    public isAssigned: boolean;
    public parents: Node[];

    constructor(props: INodeProps) {
        this.name = props.name;
        this.line = props.line;
        this.index = props.index;
        this.isAssigned = props.isAssigned;
        this.parents = props.parents;
    }

    public getAncestors(level: number, max: number) {
        let ancestors: Node[] = [];
        if (level > max) {
            return ancestors;
        }
        this.parents.forEach((n) => {
            ancestors = [...ancestors, n, ...n.getAncestors(++level, max)];
        });
        return ancestors;
    }

    public getRange() {
        return new monaco.Range(this.line, this.index + 1, this.line, this.index + this.name.length + 1);
    }

    public toString() {
        return this.line + ': ' + this.name;
    }
}

export default Node;
