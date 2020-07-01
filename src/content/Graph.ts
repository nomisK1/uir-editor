import * as monaco from 'monaco-editor';
import node from './_node';
import component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import block from './block';
import allocation from './allocation';
import operation from './operation';
import target from './target';
import variable from './variable';

interface IGraphProps {
    query: string;
}

class Graph {
    private query: string;
    private components: component[];
    private variables: variable[];
    private current: variable | null;
    private next: variable | undefined;
    private currentParents: variable[];
    private currentChildren: variable[];
    private ancestors: variable[];

    constructor(props: IGraphProps) {
        this.query = props.query;
        this.components = [];
        this.variables = [];
        this.current = null;
        this.next = undefined;
        this.currentParents = [];
        this.currentChildren = [];
        this.ancestors = [];
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
        let defines = this.query.match(/define[\s\S]*?\n}/g);
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
        // get all variables
        let vars: variable[] = [];
        this.components.forEach((c) => {
            vars.push(...c.getVariables());
        });
        // connect all variables
        for (let i = 0; i < vars.length - 1; i++) {
            vars[i].setNext(vars[i + 1]);
            vars[i + 1].setPrev(vars[i]);
        }
        this.variables = vars;
        // set variable parents
        this.getDefinitions().forEach((d) => {
            d.getVariables().forEach((v) => {
                if (v.getParents().length === 0) {
                    let orig = this.findVariableOrigin(v);
                    v.setParents(orig ? orig.getParents() : null);
                }
            });
        });
    }

    private findVariableOrigin(variable: variable) {
        let context = variable.getOuterContext();
        if (context.constructor === definition) {
            let def = context as definition;
            let args = def.getArgs().map((a) => a.getName());
            if (args.includes(variable.getName())) return def.getArgs()[args.indexOf(variable.getName())];
            let allocations = def.getAllocations().map((a) => a.getChild()!.getName());
            if (allocations.includes(variable.getName()))
                return def.getAllocations()[allocations.indexOf(variable.getName())].getChild();
        }
        return null;
    }

    private getGlobals() {
        let globals: global[] = [];
        this.components.forEach((c) => {
            if (c instanceof global) globals.push(c);
        });
        return globals;
    }

    public isGlobal(name: string) {
        let vars: variable[] = [];
        this.getGlobals().forEach((g) => {
            vars.push(...g.getVariables());
        });
        for (let i = 0; i < vars.length; i++) {
            if (vars[i].getName() === name) return true;
        }
        return false;
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

    public getDefinitionRanges() {
        return this.getDefinitions().map((d) => d.getRange());
    }

    public findVariables(name: string) {
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

    public findVariableAt(position: monaco.Position) {
        let node = this.findNodeAt(position);
        if (node instanceof variable) return node;
        return null;
    }

    public findRelatedNodes(node: node | null) {
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
                    nodes.push(...this.findRelatedVariables(node.getVariables()[0]));
                    break;
                case allocation:
                    break;
                case operation:
                    nodes.push(...this.findFunctionReferences(node.getFunctionName()));
                    break;
                case target:
                    nodes.push(...this.findRelatedTargets(node as target));
                    break;
                case variable:
                    nodes.push(...this.findRelatedVariables(node as variable));
                    break;
                default:
                    break;
            }
        }
        return nodes;
    }

    public findRelatedTargets(target: target | null) {
        let targets: target[] = [];
        if (target !== null) {
            let context = target.getOuterContext() as definition;
            context.getTargets().forEach((t) => {
                if (t.getName() === target.getName()) targets.push(t);
            });
        }
        return targets;
    }

    public findRelatedVariables(variable: variable | null) {
        let vars: variable[] = [];
        if (variable !== null && variable.getContext() !== null) {
            if (this.isGlobal(variable.getName())) {
                vars.push(...this.findVariables(variable.getName()));
            } else {
                vars.push(...variable.getOuterContext().findVariables(variable.getName()));
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
            this.getDefinitions().forEach((d) => {
                d.getOperations().forEach((o) => {
                    if (o.getFunctionName() === fname) nodes.push(o);
                });
            });
        }
        return nodes;
    }

    private findVariableParents(variable: variable) {
        /* let parents: variable[] = [];
        let context = variable.getOuterContext();
        if (context.constructor === definition) {
            let def = context as definition;
            def.getVariables().forEach((v) => {
                if (v.getName() === variable.getName()) {
                    if (v.getContext()!.constructor === allocation || v.getContext()!.constructor === definition)
                        parents.push(v);
                    parents.push(...v.getParents());
                }
            });
        }
        return parents; */
        return variable.getParents();
    }

    private findVariableChildren(variable: variable) {
        let children: variable[] = [];
        let context = variable.getOuterContext();
        if (context.constructor === definition) {
            let def = context as definition;
            def.getAllocations().forEach((a) => {
                if (a.hasParent(variable.getName())) {
                    children.push(a.getChild()!);
                }
            });
        }
        return children;
    }

    public findVariableParentTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.findRelatedVariables(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let parents = this.findVariableParents(variable);
        while (parents.length > 0) {
            let grandparents: variable[] = [];
            depth++;
            // eslint-disable-next-line
            parents.forEach((p) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(p) === false) {
                    let orig = this.findVariableOrigin(p);
                    if (orig) tree.push({ variable: orig, depth });
                    tree.push({ variable: p, depth });
                    grandparents.push(...this.findVariableParents(p));
                }
            });
            parents = grandparents;
        }
        return tree;
    }

    public findVariableChildTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.findRelatedVariables(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let children = this.findVariableChildren(variable);
        while (children.length > 0) {
            let grandchildren: variable[] = [];
            depth--;
            // eslint-disable-next-line
            children.forEach((c) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(c) === false) {
                    this.findRelatedVariables(c).forEach((v) => {
                        tree.push({ variable: v, depth });
                    });
                    grandchildren.push(...this.findVariableChildren(c));
                }
            });
            children = grandchildren;
        }
        return tree;
    }

    public setCurrentNextOccurrence(selection: string) {
        if (this.current && this.current.getName() === selection) {
            let vars = this.findVariables(this.current.getName());
            for (let i = 0; i < vars.length; i++) {
                if (
                    !vars[i].getRange().getStartPosition().isBeforeOrEqual(this.current.getRange().getStartPosition())
                ) {
                    this.setCurrentVariable(vars[i]);
                    return;
                }
            }
            this.setCurrentVariable(vars[0]);
        } else {
            let next = this.findVariables(selection)[0];
            this.setCurrentVariable(next ? next : null);
        }
    }

    public setCurrentPrevOccurrence(selection: string) {
        if (this.current && this.current.getName() === selection) {
            let vars = this.findVariables(this.current.getName());
            for (let i = vars.length - 1; i >= 0; i--) {
                if (vars[i].getRange().getStartPosition().isBefore(this.current.getRange().getStartPosition())) {
                    this.setCurrentVariable(vars[i]);
                    return;
                }
            }
            this.setCurrentVariable(vars[vars.length - 1]);
        } else {
            let next = this.findVariables(selection)[0];
            this.setCurrentVariable(next ? next : null);
        }
    }

    public getCurrentParent() {
        if (this.next === undefined) return this.currentParents[0];
        return this.currentParents[this.currentParents.length - 1];
    }

    public getCurrentChild() {
        if (this.next === undefined) return this.currentChildren[0];
        return this.currentChildren[this.currentChildren.length - 1];
    }

    public updateNextParent() {
        let temp = [...this.currentParents];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentParents = temp;
        return this.next;
    }

    public updateNextChild() {
        let temp = [...this.currentChildren];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentChildren = temp;
        return this.next;
    }

    public getCurrentVariable() {
        return this.current;
    }

    public setCurrentToPrevious() {
        let previous = this.ancestors.pop();
        this.current = previous ? previous : null;
        this.next = undefined;
        if (this.current) {
            this.currentParents = this.findVariableParents(this.current);
            this.currentChildren = this.findVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    public setCurrentVariable(variable: variable | null) {
        if (this.current && this.current !== variable && !this.ancestors.includes(this.current))
            this.ancestors.push(this.current);
        this.current = variable;
        this.next = undefined;
        if (this.current) {
            this.currentParents = this.findVariableParents(this.current);
            this.currentChildren = this.findVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    public print() {
        console.log(this);
    }
}

export default Graph;
