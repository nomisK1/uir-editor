import * as monaco from 'monaco-editor';
import { lookupJSON } from './_node';
import _component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import variable from './variable';

interface IGraphProps {
    json: Object;
}

class Graph {
    private json: Object;
    private components: _component[] = [];
    private variables: variable[] = [];
    private current: variable | null = null;
    private next?: variable;
    private currentParents: variable[] = [];
    private currentChildren: variable[] = [];
    private ancestors: variable[] = [];

    constructor(props: IGraphProps) {
        this.json = props.json;
        this.build();
    }

    private build() {
        let line = 1;
        let globals = lookupJSON(this.json, 'globals') as Object[];
        let functions = lookupJSON(this.json, 'functions') as Object[];
        globals.forEach((json) => {
            this.components.push(
                new global({
                    json,
                    line,
                    context: null,
                }),
            );
            line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        functions.forEach((json) => {
            if (lookupJSON(json, 'blocks'))
                this.components.push(
                    new definition({
                        json,
                        line,
                        context: null,
                    }),
                );
            else
                this.components.push(
                    new declaration({
                        json,
                        line,
                        context: null,
                    }),
                );
            line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        this.components.forEach((c) => {
            this.variables.push(...c.getVariables());
        });
    }

    public print() {
        let str = '';
        this.components.forEach((c) => {
            str += c.toString() + '\n\n';
        });
        return str.slice(0, -1);
    }

    private getVariablesCalled(name: string) {
        let vars: variable[] = [];
        this.variables.forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    private getComponentAt(position: monaco.Position) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].getRange()!.containsPosition(position)) return this.components[i];
        }
        return null;
    }

    public getNodeAt(position: monaco.Position) {
        let component = this.getComponentAt(position);
        if (component) return component.getNodeAt(position);
        return null;
    }

    public getVariableAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node instanceof variable) return node;
        return null;
    }

    public getSiblings(variable: variable | null) {
        let vars: variable[] = [];
        if (variable !== null && variable.getContext() !== null) {
            if (variable.isGlobal()) {
                vars.push(...this.getVariablesCalled(variable.getName()));
            } else {
                vars.push(...variable.getOuterContext().getVariablesCalled(variable.getName()));
            }
        }
        return vars;
    }

    private getParents(variable: variable) {
        return variable.getParents();
    }

    private getChildren(variable: variable) {
        let children: variable[] = [];
        let context = variable.getOuterContext();
        if (context.constructor === definition) {
            let def = context as definition;
            def.getAssignments().forEach((a) => {
                if (a.hasParent(variable.getName())) {
                    children.push(a.getDestination());
                }
            });
        }
        return children;
    }

    public getParentTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getSiblings(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let parents = this.getParents(variable);
        while (parents.length > 0) {
            let grandparents: variable[] = [];
            depth++;
            // eslint-disable-next-line
            parents.forEach((p) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(p) === false) {
                    /* let orig = this.findVariableOrigin(p);
                    if (orig) tree.push({ variable: orig, depth }); */
                    tree.push({ variable: p, depth });
                    grandparents.push(...this.getParents(p));
                }
            });
            parents = grandparents;
        }
        return tree;
    }

    public getChildTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getSiblings(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let children = this.getChildren(variable);
        while (children.length > 0) {
            let grandchildren: variable[] = [];
            depth--;
            // eslint-disable-next-line
            children.forEach((c) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(c) === false) {
                    this.getSiblings(c).forEach((v) => {
                        tree.push({ variable: v, depth });
                    });
                    grandchildren.push(...this.getChildren(c));
                }
            });
            children = grandchildren;
        }
        return tree;
    }
}

export default Graph;
