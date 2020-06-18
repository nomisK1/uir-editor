import * as monaco from 'monaco-editor';
import node from './_node';
import component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import block from './block';
//import instruction from './_instruction';
import allocation from './allocation';
import operation from './operation';
import variable from './variable';

interface IGraphProps {
    query: string;
}

class Graph {
    private query: string;
    private components: component[];
    private variables: variable[];

    constructor(props: IGraphProps) {
        this.query = props.query;
        this.components = [];
        this.variables = [];
        this.build();
    }

    private build() {
        let comps: component[] = [];
        // split query into globals, declarations, definitions
        let lines = this.query.split(/\n/);
        for (let i = 0; i < lines.length; i++) {
            let globals = lines[i].match(/const.*/g);
            if (globals) {
                let names = globals[0].match(/%[\w]*\[[\d]+\]/);
                comps.push(
                    new global({
                        name: names![0],
                        data: globals[0],
                        range: new monaco.Range(i + 1, 0, i + 1, globals[0].length),
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                        context: null,
                    }),
                );
            }
            let declares = lines[i].match(/declare.*/g);
            if (declares) {
                let names = declares[0].match(/@[_\w]*/);
                comps.push(
                    new declaration({
                        name: names![0],
                        data: declares[0],
                        range: new monaco.Range(i + 1, 0, i + 1, declares[0].length),
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                        context: null,
                    }),
                );
            }
            let defines = lines[i].match(/define.*/g);
            if (defines) {
                let names = defines[0].match(/@[_\w]*/);
                comps.push(
                    new definition({
                        name: names![0],
                        data: defines[0],
                        range: new monaco.Range(i + 1, 0, i + 1, 0),
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                        context: null,
                    }),
                );
            }
        }
        // add body to definitions
        let defines = this.query.match(/define[\s\S]*?}/g);
        defines?.forEach((d) => {
            let name = d.match(/@[_\w]*/)![0];
            comps.forEach((c) => {
                if (c.getName() === name) {
                    c.setData(d);
                }
            });
        });
        // add references to next component
        for (let i = 0; i < comps.length - 1; i++) {
            comps[i].setNext(comps[i + 1]);
        }
        // build components
        comps.forEach((c) => {
            c.build();
        });
        this.components = comps;
        //connect all variables
        let vars = this.getAllVariables();
        for (let i = 0; i < vars.length - 1; i++) {
            vars[i].setNext(vars[i + 1]);
            vars[i + 1].setPrev(vars[i]);
        }
        this.variables = vars;
    }

    private getGlobals() {
        let globals: global[] = [];
        this.components.forEach((c) => {
            if (c instanceof global) globals.push(c);
        });
        return globals;
    }

    private getDeclarations() {
        let declarations: declaration[] = [];
        this.components.forEach((c) => {
            if (c instanceof declaration) declarations.push(c);
        });
        return declarations;
    }

    private getDefinitions() {
        let definitions: definition[] = [];
        this.components.forEach((c) => {
            if (c instanceof definition) definitions.push(c);
        });
        return definitions;
    }

    private getAllocations() {
        let allocations: allocation[] = [];
        let defnitions = this.getDefinitions();
        defnitions.forEach((d) => {
            allocations.push(...d.getAllocations());
        });
        return allocations;
    }

    private getOperations() {
        let operations: operation[] = [];
        let defnitions = this.getDefinitions();
        defnitions.forEach((d) => {
            operations.push(...d.getOperations());
        });
        return operations;
    }

    private getAllVariables() {
        let vars: variable[] = [];
        this.components.forEach((c) => {
            vars.push(...c.getVariables());
        });
        return vars;
    }

    private findVariables(name: string) {
        let vars: variable[] = [];
        this.variables.forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    private findComponentAt(position: monaco.Position) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].getRange().containsPosition(position)) return this.components[i];
        }
        return null;
    }

    public findNodeAt(position: monaco.Position) {
        let component = this.findComponentAt(position);
        if (component) return component.findNodeAt(position);
        return null;
    }

    public findRealatedNodes(node: node | null) {
        let nodes: node[] = [];
        if (node !== null) {
            nodes.push(node);
            switch (node.constructor) {
                case global:
                    nodes.push(...this.findVariables(node.getVariables()[0].getName()));
                    break;
                case declaration:
                    nodes.push(...this.findFunctionReferences(node.getFunctionName()));
                    break;
                case definition:
                    break;
                case block:
                    nodes.push(...this.findRelatedVariables(node));
                    break;
                case allocation:
                    break;
                case operation:
                    nodes.push(...this.findFunctionReferences(node.getFunctionName()));
                    break;
                case variable:
                    nodes.push(...this.findRelatedVariables(node));
                    break;
                default:
                    break;
            }
        }
        //return nodes;
        return this.getNodeRanges(nodes);
    }

    private findRelatedVariables(nodevariable: node | null) {
        let vars: node[] = [];
        if (nodevariable !== null && nodevariable.getContext() !== null && nodevariable instanceof variable) {
            switch (nodevariable.getContext()!.constructor) {
                case global:
                    vars.push(...this.findVariables(nodevariable.getName()));
                    break;
                case declaration:
                    break;
                case definition:
                    vars.push(...nodevariable.getContext()!.findVariables(nodevariable.getName()));
                    break;
                case block:
                    vars.push(...nodevariable.getContext()!.getContext()!.findVariables(nodevariable.getName()));
                    break;
                case allocation:
                    vars.push(
                        ...nodevariable.getContext()!.getContext()!.getContext()!.findVariables(nodevariable.getName()),
                    );
                    break;
                case operation:
                    vars.push(
                        ...nodevariable.getContext()!.getContext()!.getContext()!.findVariables(nodevariable.getName()),
                    );
                    break;
                default:
                    break;
            }
        }
        return vars;
    }

    private findFunctionReferences(fname: string) {
        let nodes: node[] = [];
        if (fname) {
            this.getDeclarations().forEach((d) => {
                if (d.getFunctionName() === fname) nodes.push(d);
            });
            this.getOperations().forEach((o) => {
                if (o.getFunctionName() === fname) nodes.push(o);
            });
        }
        return nodes;
    }

    private getVariableChildren(name: string) {
        let allocations = this.getAllocations();
        let children: variable[] = [];
        for (let i = 0; i < allocations.length; i++) {
            if (allocations[i].hasParent(name)) children.push(allocations[i].getChild()!);
        }
        return children;
    }

    private getVariableParents(name: string) {
        let parents: variable[] = [];
        this.getAllVariables().forEach((v) => {
            if (v.isCalled(name)) {
                parents.push(...v.getParents());
            }
        });
        return parents;
    }

    // level: ...-2->grandparents, -1->parents, 0->[], 1-> children, 2->grandchildren...
    private getVariableRelatives(name: string, level: number) {
        if (level === 0) return [];
        let relatives = this.findVariables(name /* , this.getAllVariables() */);
        if (level < 0) {
            level = Math.abs(level);
            relatives.push(...this.getVariableParents(name));
            for (let i = 1; i < level; i++) {
                let temp: variable[] = [];
                relatives.forEach((r) => {
                    temp.push(...this.getVariableParents(r.getName()));
                });
                relatives = this.removeDuplicates(temp);
            }
            return relatives;
        } else {
            relatives.push(...this.getVariableChildren(name));
            for (let i = 1; i < level; i++) {
                let temp: variable[] = [];
                relatives.forEach((r) => {
                    temp.push(...this.getVariableChildren(r.getName()));
                });
                relatives = this.removeDuplicates(temp);
            }
            return relatives;
        }
    }

    public getVariableParentsTree(name: string) {
        let tree: variable[] = [];
        for (let i = 1; i < 10; i++) {
            tree.push(...this.getVariableRelatives(name, -i));
        }
        return tree;
    }

    public getVariableChildrenTree(name: string) {
        let tree: variable[] = [];
        for (let i = 1; i < 10; i++) {
            tree.push(...this.getVariableRelatives(name, i));
        }
        return tree;
    }

    public getVariableBalancedTree(name: string) {
        let tree: variable[] = [];
        for (let i = -10; i <= 10; i++) {
            tree.push(...this.getVariableRelatives(name, i));
        }
        return tree;
    }

    private getNodeRanges(nodes: node[]) {
        let ranges: monaco.Range[] = [];
        nodes.forEach((n) => {
            ranges.push(n.getRange());
        });
        return ranges;
    }

    private removeDuplicates(array: variable[]) {
        return array.filter((a, b) => array.indexOf(a) === b);
    }

    public print() {
        console.log(this.findNodeAt(new monaco.Position(10000, 34)));
    }
}

export default Graph;
