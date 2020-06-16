import * as monaco from 'monaco-editor';
import Node from './Node';

interface IGraphProps {
    query: string;
}

class Graph {
    private query: string;
    private nodes: Node[];

    constructor(props: IGraphProps) {
        this.query = props.query;
        this.nodes = [];
        this.parseQuery();
        this.findParents();
    }

    private parseQuery1() {
        let lines = this.query.split(/\n/);
        let nodes: Node[] = [];
        for (let i = 0; i < lines.length; i++) {
            let sides = lines[i].split(/=/);
            let nodesR: Node[] = [];
            let nodesL: Node[] = [];
            if (sides.length > 1) {
                let variablesR = sides[1].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                variablesR?.forEach((v) => {
                    if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                    let n = new Node({
                        name: v,
                        line: i + 1,
                        index: lines[i].indexOf(v),
                        isAssigned: false,
                        parents: [],
                    });
                    nodesR = [...nodesR, n];
                });
                let variablesL = sides[0].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                variablesL?.forEach((v) => {
                    if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                    let n = new Node({
                        name: v,
                        line: i + 1,
                        index: lines[i].indexOf(v),
                        isAssigned: true,
                        parents: nodesR,
                    });
                    nodesL = [...nodesL, n];
                });
            }
            nodes = [...nodes, ...nodesL];
        }
        this.nodes = nodes;
    }

    private parseQuery() {
        let lines = this.query.split(/\n/);
        let nodes: Node[] = [];
        for (let i = 0; i < lines.length; i++) {
            let sides = lines[i].split(/=/);
            let nodesR: Node[] = [];
            let nodesL: Node[] = [];
            if (sides.length > 1) {
                let variablesR = sides[1].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                variablesR?.forEach((v) => {
                    if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                    let n = new Node({
                        name: v,
                        line: i + 1,
                        index: lines[i].indexOf(v),
                        isAssigned: false,
                        parents: [],
                    });
                    nodesR = [...nodesR, n];
                });
                let variablesL = sides[0].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                variablesL?.forEach((v) => {
                    if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                    let n = new Node({
                        name: v,
                        line: i + 1,
                        index: lines[i].indexOf(v),
                        isAssigned: true,
                        parents: nodesR,
                    });
                    nodesL = [...nodesL, n];
                });
            } else {
                sides = lines[i].split(/\(/);
                if (sides.length > 1) {
                    let variablesR = sides[1].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                    variablesR?.forEach((v) => {
                        if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                        let n = new Node({
                            name: v,
                            line: i + 1,
                            index: lines[i].indexOf(v),
                            isAssigned: false,
                            parents: [],
                        });
                        nodesR = [...nodesR, n];
                    });
                    let variablesL = sides[0].match(/%[\w]*|_[\w]*|@[_\w]*|[\w]+::[\w]+(::[\w]+)?/g);
                    variablesL?.forEach((v) => {
                        if (v.substr(0, 1) === '%' || v.substr(0, 1) === '@') v = v.substr(1);
                        let n = new Node({
                            name: v,
                            line: i + 1,
                            index: lines[i].indexOf(v),
                            isAssigned: true,
                            parents: nodesR,
                        });
                        nodesL = [...nodesL, n];
                    });
                }
            }
            nodes = [...nodes, ...nodesL];
        }
        this.nodes = nodes;
    }

    private findParents() {
        let nodes: Node[] = [];
        this.nodes.forEach((n) => {
            let parents: Node[] = [];
            n.parents.forEach((p) => {
                const temp = this.findNode(p.name);
                if (temp) {
                    parents.push(temp);
                    n.parents = parents;
                }
            });
            nodes.push(n);
        });
        this.nodes = nodes;
    }

    private findNode(name: string) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].name === name) {
                return this.nodes[i];
            }
        }
        return null;
    }

    public getNodes() {
        return this.nodes;
    }

    public getAncestorRanges(/* target: monaco.Range */ word: string) {
        let ranges: monaco.Range[] = [];
        let nodes = this.nodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].name === word) {
                let targets = [nodes[i], ...nodes[i].getAncestors(0, 10)];
                targets.forEach((t) => {
                    ranges.push(t.getRange());
                });
            }
        }
        return ranges;
    }

    public print() {
        let strings: string[] = [];
        this.nodes.forEach((n) => {
            strings = [...strings, n.toString()];
        });
        return strings;
    }
}

export default Graph;
