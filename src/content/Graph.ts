import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './structure/_node';
import _component from './structure/_component';
import global from './structure/global';
import declaration from './structure/declaration';
import definition from './structure/definition';
import block from './structure/block';
import operation from './structure/operation';
import variable from './structure/variable';
import target from './structure/target';

interface IGraphProps {
    json: Object;
}

class Graph {
    private json: Object;
    private components: _component[] = [];
    private variables: variable[] = [];
    private targets: target[] = [];
    private current: variable | null = null;
    private next?: variable;
    private currentParents: variable[] = [];
    private currentChildren: variable[] = [];
    private ancestors: variable[] = [];
    private comments: { text: string; range: monaco.Range; isWholeLine: boolean; node?: _node }[] = [];
    private aliases: string[] = [];

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
            if (c instanceof definition) this.targets.push(...c.getTargets());
        });
        this.aliases = removeDuplicates(this.variables.map((v) => v.getName()));
        this.getDefinitions().forEach((d) =>
            d.getVariables().forEach((v) => {
                if (v.getParents().length === 0) {
                    let orig = this.getVariableOrigin(v);
                    v.setParents(orig ? orig.getParents() : null);
                }
            }),
        );
    }

    public print() {
        let str = '';
        this.components.forEach((c) => (str += c.toString() + '\n\n'));
        return str.slice(0, -1);
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

    private getVariablesByName(name: string) {
        let vars: variable[] = [];
        this.variables.forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    private getVariablesByAlias(alias: string) {
        let vars: variable[] = [];
        this.variables.forEach((v) => {
            if (v.getAlias() === alias) vars.push(v);
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

    public getRelatedNodes(node: _node | null) {
        let nodes: _node[] = [];
        if (node !== null) {
            nodes.push(node);
            if (node instanceof global) nodes.push(...this.getVariablesByName(node.getVariables()[0].getName()));
            else if (node instanceof declaration) nodes.push(...this.getRelatedFunctions(node.getName()));
            else if (node instanceof block) nodes.push(...this.getRelatedTargets(node.getLabel()));
            else if (node instanceof operation) nodes.push(...this.getRelatedFunctions(node.getFunctionName()));
            else if (node instanceof variable) nodes.push(...this.getVariablesByName(node.getName()));
            else if (node instanceof target) nodes.push(...this.getRelatedTargets(node));
        }
        return nodes;
    }

    private getRelatedFunctions(fun: string | null) {
        let nodes: _node[] = [];
        if (fun) {
            this.getDeclarations().forEach((d) => {
                if (d.getName() === fun) nodes.push(d);
            });
            this.getDefinitions().forEach((d) => nodes.push(...d.getRelatedFunctions(fun)));
        }
        return nodes;
    }

    private getRelatedTargets(target: target) {
        let targets: target[] = [];
        let context = target.getOuterContext() as definition;
        context.getTargets().forEach((t) => {
            if (t.getName() === target.getName()) targets.push(t);
        });
        return targets;
    }

    public getVariableSiblings(variable: variable | null) {
        let vars: variable[] = [];
        if (variable !== null && variable.getContext() !== null)
            if (variable.isGlobal()) vars.push(...this.getVariablesByName(variable.getName()));
            else vars.push(...variable.getOuterContext().getVariablesByName(variable.getName()));
        return vars;
    }

    private getVariableOrigin(variable: variable) {
        let context = variable.getOuterContext();
        if (context instanceof definition) {
            let args = context.getArgs().map((a) => a.getName());
            if (args.includes(variable.getName())) return context.getArgs()[args.indexOf(variable.getName())];
            let assignments = context.getAssignments().map((a) => a.getDestination().getName());
            if (assignments.includes(variable.getName()))
                return context.getAssignments()[assignments.indexOf(variable.getName())].getDestination();
        }
        return null;
    }

    private getVariableParents(variable: variable) {
        return variable.getParents();
    }

    private getVariableChildren(variable: variable) {
        let children: variable[] = [];
        let context = variable.getOuterContext();
        if (context instanceof definition)
            context.getAssignments().forEach((a) => {
                if (a.hasParent(variable.getName())) children.push(a.getDestination());
            });
        return children;
    }

    public getParentTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getVariableSiblings(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let parents = this.getVariableParents(variable);
        while (parents.length > 0) {
            let grandparents: variable[] = [];
            depth++;
            // eslint-disable-next-line
            parents.forEach((p) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(p) === false) {
                    let orig = this.getVariableOrigin(p);
                    if (orig) tree.push({ variable: orig, depth });
                    tree.push({ variable: p, depth });
                    grandparents.push(...this.getVariableParents(p));
                }
            });
            parents = grandparents;
        }
        return tree;
    }

    public getChildTree(variable: variable) {
        let tree: { variable: variable; depth: number }[] = [];
        let depth = 0;
        this.getVariableSiblings(variable).forEach((v) => {
            tree.push({ variable: v, depth });
        });
        let children = this.getVariableChildren(variable);
        while (children.length > 0) {
            let grandchildren: variable[] = [];
            depth--;
            // eslint-disable-next-line
            children.forEach((c) => {
                let vars = tree.map((t) => t.variable);
                if (vars.includes(c) === false) {
                    this.getVariableSiblings(c).forEach((v) => {
                        tree.push({ variable: v, depth });
                    });
                    grandchildren.push(...this.getVariableChildren(c));
                }
            });
            children = grandchildren;
        }
        return tree;
    }

    public setCurrentNextOccurrence(selection: string) {
        if (this.current && this.current.getAlias() === selection) {
            let vars = this.getVariablesByAlias(this.current.getAlias());
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
            let next = this.getVariablesByAlias(selection)[0];
            this.setCurrentVariable(next ? next : null);
        }
    }

    public setCurrentPrevOccurrence(selection: string) {
        if (this.current && this.current.getAlias() === selection) {
            let vars = this.getVariablesByAlias(this.current.getAlias());
            for (let i = vars.length - 1; i >= 0; i--) {
                if (vars[i].getRange().getStartPosition().isBefore(this.current.getRange().getStartPosition())) {
                    this.setCurrentVariable(vars[i]);
                    return;
                }
            }
            this.setCurrentVariable(vars[vars.length - 1]);
        } else {
            let next = this.getVariablesByAlias(selection)[0];
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
            this.currentParents = this.getVariableParents(this.current);
            this.currentChildren = this.getVariableChildren(this.current);
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
            this.currentParents = this.getVariableParents(this.current);
            this.currentChildren = this.getVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    public addCommentAt(text: string, position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node) {
            let range = node.getRange();
            if (range.startLineNumber !== range.endLineNumber)
                this.comments.push({
                    text,
                    range: range.setEndPosition(range.startLineNumber + 1, 0),
                    isWholeLine: false,
                });
            else
                this.comments.push({
                    text,
                    range,
                    isWholeLine: false,
                    node,
                });
        } else
            this.comments.push({
                text,
                range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, 0),
                isWholeLine: true,
            });
    }

    public removeCommentAt(position: monaco.Position) {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].range.containsPosition(position)) {
                this.comments.splice(i, 1);
                return;
            }
    }

    public getComments() {
        return this.comments;
    }

    public resetComments() {
        this.comments = [];
    }

    private updateComments() {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].node) this.comments[i].range = this.comments[i].node!.getRange();
    }

    public setCurrentVariableAlias(alias: string) {
        if (this.current)
            if (!alias || this.current.getName() === alias) return this.resetCurrentVariableAlias();
            else if (alias && !alias.includes(' ') && !alias.includes('%') && !this.aliases.includes(alias)) {
                this.aliases.push(alias);
                this.current.setAlias(alias);
                this.current.getContext()!.findRanges();
                this.getVariableSiblings(this.current).forEach((s) => {
                    s.setAlias(alias);
                    s.getContext()!.findRanges();
                });
                this.updateComments();
                return true;
            }
        return false;
    }

    public resetCurrentVariableAlias() {
        if (this.current && this.current.hasAlias()) {
            this.aliases.splice(this.aliases.indexOf(this.current.getAlias(), 1));
            this.current.resetAlias();
            this.current.getContext()!.findRanges();
            this.getVariableSiblings(this.current).forEach((s) => {
                s.resetAlias();
                s.getContext()!.findRanges();
            });
            this.updateComments();
            return true;
        }
        return false;
    }

    public resetAliases() {
        this.aliases = removeDuplicates(this.variables.map((v) => v.getName()));
        this.variables.forEach((v) => v.resetAlias());
        this.variables.forEach((v) => v.getContext()!.findRanges());
        this.updateComments();
    }

    public getFoldingRanges() {
        let ranges: { range: monaco.Range; definition?: boolean }[] = [];
        this.getDefinitions().forEach((d) => {
            ranges.push(...d.getFoldingRanges());
        });
        return ranges;
    }
}

export default Graph;

/**
 * removeDuplicates:
 *
 */
function removeDuplicates(array: any[]) {
    return array.filter((a, b) => array.indexOf(a) === b);
}
