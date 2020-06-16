import range, { isEqual } from '../editor/IRange';
import component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import variable from './variable';

interface IGraphProps {
    query: string;
}

class Graph {
    private query: string;
    private components: component[];

    constructor(props: IGraphProps) {
        this.query = props.query;
        this.components = [];
        this.build();
    }

    private build() {
        let comps: component[] = [];
        // split query into globals, declarations, definitions
        const lines = this.query.split(/\n/);
        for (let i = 0; i < lines.length; i++) {
            const consts = lines[i].match(/const.*/g);
            if (consts) {
                const names = consts[0].match(/%[\w]*\[[\d]+\]/);
                comps.push(
                    new global({
                        name: names![0],
                        data: consts[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
            const declares = lines[i].match(/declare.*/g);
            if (declares) {
                const names = declares[0].match(/@[_\w]*/);
                comps.push(
                    new declaration({
                        name: names![0],
                        data: declares[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
            const defines = lines[i].match(/define.*/g);
            if (defines) {
                const names = defines[0].match(/@[_\w]*/);
                comps.push(
                    new definition({
                        name: names![0],
                        data: defines[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
        }
        // add body to definitions
        const defines = this.query.match(/define[\s\S]*?}/g);
        defines?.forEach((s) => {
            const name = s.match(/@[_\w]*/)![0];
            comps.forEach((c) => {
                if (c.getName() === name) {
                    c.setData(s);
                }
            });
        });
        // add references to next object
        for (let i = 0; i < comps.length - 1; i++) {
            comps[i].setNext(comps[i + 1]);
        }
        // build components
        comps.forEach((c) => {
            c.build();
        });
        this.components = comps;
    }

    public getGlobals() {
        let globals: global[] = [];
        this.components.forEach((c) => {
            if (c instanceof global) globals.push(c);
        });
        return globals;
    }

    public getDeclarations() {
        let declarations: declaration[] = [];
        this.components.forEach((c) => {
            if (c instanceof declaration) declarations.push(c);
        });
        return declarations;
    }

    public getDefinitions() {
        let definitions: definition[] = [];
        this.components.forEach((c) => {
            if (c instanceof definition) definitions.push(c);
        });
        return definitions;
    }

    public getComponents() {
        return this.components;
    }

    public getAllVariables() {
        let vars: variable[] = [];
        this.components.forEach((c) => {
            vars.push(...c.getVariables());
        });
        return vars;
    }

    public getVariable(name: string, range: range) {
        let vars = this.getAllVariables();
        for (let i = 0; i < vars.length; i++) {
            if (vars[i].getName() === name && isEqual(vars[i].getRange(), range)) {
                return true;
            }
        }
        return false;
    }

    public getVariableRanges(name: string) {
        let ranges: range[] = [];
        this.getAllVariables().forEach((v) => {
            if (v.getName() === name) {
                ranges.push(v.getRange());
            }
        });
        return ranges;
    }

    public getVariableTree(name: string) {
        let vars: variable[] = [];
    }

    public print() {
        console.log(this.getComponents());
        console.log(this.getVariable('%CompilationContext_cpp_214_', { line: 15, start: 54, end: 82 }));
    }

    /* private parseQuery() {
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

    public getAncestorRanges(word: string) {
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
    } */
}

export default Graph;
