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
import TargetTree from './tree/TargetTree';

interface IGraphProps {
    gid: number;
    json: Object;
}

class Graph {
    private gid: number;
    private json: Object;
    private components: _component[] = [];
    private variables: variable[] = [];
    private current: variable | null = null;
    private next?: variable;
    private currentParents: variable[] = [];
    private currentChildren: variable[] = [];
    private ancestors: variable[] = [];
    private bookmark?: number = 0;
    private comments: commentHover[] = [];
    private aliases: alias[] = [];

    constructor(props: IGraphProps) {
        this.gid = props.gid;
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
        this.getDefinitions().forEach((d) =>
            d.getVariables().forEach((v) => {
                if (v.getParents().length === 0) {
                    let orig = this.getVariableOrigin(v);
                    v.setParents(orig ? orig.getParents() : null);
                }
            }),
        );
        this.retrieveLocalStorageBookmark();
        this.retrieveLocalStorageComments();
        this.retrieveLocalStorageAliases();
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

    private getBlockAt(position: monaco.Position): block | null {
        let component = this.getComponentAt(position);
        if (component instanceof definition) return component.getBlockAt(position);
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

    public getVariableOfNode(node: _node | null) {
        return node instanceof variable ? node : null;
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
        this.getVariableSiblings(variable).forEach((v) => tree.push({ variable: v, depth }));
        let parents = this.getVariableParents(variable);
        while (parents.length > 0) {
            let grandparents: variable[] = [];
            depth++;
            // eslint-disable-next-line
            parents.forEach((p) => {
                if (!tree.map((t) => t.variable).includes(p)) {
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
        this.getVariableSiblings(variable).forEach((v) => tree.push({ variable: v, depth }));
        let children = this.getVariableChildren(variable);
        while (children.length > 0) {
            let grandchildren: variable[] = [];
            depth--;
            // eslint-disable-next-line
            children.forEach((c) => {
                if (!tree.map((t) => t.variable).includes(c)) {
                    this.getVariableSiblings(c).forEach((v) => tree.push({ variable: v, depth }));
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

    private retrieveLocalStorageBookmark() {
        let data = localStorage.getItem('b:' + this.gid);
        if (data) this.addBookmarkAt(parseInt(data));
    }

    private setLocalStorageBookmark() {
        localStorage.setItem('b:' + this.gid, '' + this.bookmark);
    }

    private removeLocalStorageBookmark() {
        localStorage.removeItem('b:' + this.gid);
    }

    public addBookmarkAt(line: number) {
        this.removeBookmark();
        this.bookmark = line;
        this.setLocalStorageBookmark();
    }

    public removeBookmark() {
        this.bookmark = undefined;
        this.removeLocalStorageBookmark();
    }

    public getBookmark() {
        return this.bookmark;
    }

    private retrieveLocalStorageComments() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'c:' + this.gid + ':' + i;
            let data = localStorage.getItem(key);
            if (data) {
                let json = JSON.parse(data);
                let text = lookupJSON(json, 'text');
                let position = lookupJSON(json, 'position');
                this.addCommentAt(text, position);
            }
        }
    }

    private setLocalStorageComments() {
        for (let i = 0; i < this.comments.length; i++) {
            let text = this.comments[i].text;
            let position = this.comments[i].range.getStartPosition();
            localStorage.setItem('c:' + this.gid + ':' + i, JSON.stringify({ text, position }));
        }
    }

    private removeLocalStorageComments() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'c:' + this.gid + ':' + i;
            localStorage.removeItem(key);
        }
    }

    public addCommentAt(text: string, position: monaco.Position) {
        this.removeCommentAt(position);
        if (text) {
            let node = this.getNodeAt(position);
            let range = node ? node.getRange() : null;
            let isWholeLine = false;
            let pushNode = false;
            if (range) pushNode = true;
            else {
                range = new monaco.Range(position.lineNumber, position.column, position.lineNumber, 0);
                isWholeLine = true;
            }
            this.comments.push({ text, range, isWholeLine, node: pushNode ? node! : undefined });
            this.setLocalStorageComments();
        }
    }

    public removeCommentAt(position: monaco.Position) {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].range.containsPosition(position)) {
                let comment = this.comments.splice(i, 1);
                this.removeLocalStorageComments();
                this.setLocalStorageComments();
                return comment;
            }
        return null;
    }

    public resetComments() {
        this.comments = [];
        this.removeLocalStorageComments();
    }

    public getCommentAt(position: monaco.Position) {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].range.containsPosition(position)) return this.comments[i];
        return null;
    }

    public getComments() {
        return this.comments;
    }

    private updateComments() {
        for (let i = 0; i < this.comments.length; i++)
            if (this.comments[i].node) this.comments[i].range = this.comments[i].node!.getRange();
    }

    private retrieveLocalStorageAliases() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'a:' + this.gid + ':' + i;
            let data = localStorage.getItem(key);
            if (data) {
                let json = JSON.parse(data);
                let alias = lookupJSON(json, 'alias');
                let position = lookupJSON(json, 'position');
                this.setCurrentVariableAlias(alias, position);
            }
        }
    }

    private setLocalStorageAliases() {
        for (let i = 0; i < this.aliases.length; i++) {
            let alias = this.aliases[i].alias;
            let position = this.aliases[i].position;
            localStorage.setItem('a:' + this.gid + ':' + i, JSON.stringify({ alias, position }));
        }
    }

    private removeLocalStorageAliases() {
        let size = localStorage.length;
        for (let i = 0; i < size; i++) {
            let key = 'a:' + this.gid + ':' + i;
            localStorage.removeItem(key);
        }
    }

    public setCurrentVariableAlias(alias: string, position?: monaco.Position) {
        this.resetCurrentVariableAlias();
        let variable = position ? this.getVariableAt(position) : this.current;
        if (variable)
            if (
                alias &&
                isLegal(alias) &&
                !this.variables.map((v) => v.getName()).includes(alias) &&
                !this.aliases.map((a) => a.alias).includes(alias)
            ) {
                this.aliases.push({ alias, position: variable.getRange().getStartPosition() });
                variable.setAlias(alias);
                variable.getContext()!.findRanges();
                this.getVariableSiblings(variable).forEach((s) => {
                    s.setAlias(alias);
                    s.getContext()!.findRanges();
                });
                this.updateComments();
                this.setLocalStorageAliases();
            }
    }

    public resetCurrentVariableAlias(position?: monaco.Position) {
        let variable = position ? this.getVariableAt(position) : this.current;
        if (variable && variable.hasAlias()) {
            this.aliases.splice(this.aliases.map((a) => a.alias).indexOf(variable.getAlias()), 1);
            variable.resetAlias();
            variable.getContext()!.findRanges();
            this.getVariableSiblings(variable).forEach((s) => {
                s.resetAlias();
                s.getContext()!.findRanges();
            });
            this.updateComments();
            this.removeLocalStorageAliases();
            this.setLocalStorageAliases();
            return true;
        }
        return false;
    }

    public resetAliases() {
        this.aliases = [];
        this.variables.forEach((v) => v.resetAlias());
        this.variables.forEach((v) => v.getContext()!.findRanges());
        this.updateComments();
        this.removeLocalStorageAliases();
    }

    public getAliases() {
        return this.aliases;
    }

    public getTargetTreeString(node: _node | null) {
        if (node instanceof block) return new TargetTree({ root: node.getLabel() }).print();
        if (node instanceof target) return new TargetTree({ root: node }).print();
        return null;
    }

    public getTargetTreeDataAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (!node) return null;
        if (node instanceof target) return new TargetTree({ root: node }).toData();
        else {
            let block = this.getBlockAt(node.getRange().getStartPosition());
            if (block) return new TargetTree({ root: block.getLabel() }).toData();
        }
        return null;
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

type commentLine = { text: string; line: number };
type commentHover = { text: string; range: monaco.Range; isWholeLine: boolean; node?: _node };
type alias = { alias: string; position: monaco.Position };

const legalStrings: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '_',
];

function isLegal(string: string) {
    for (let i = 0; i < string.length; i++)
        if (!legalStrings.includes(string[i])) {
            alert('Variable names can only contain the following characters:\n' + legalStrings.toString());
            return false;
        }
    return true;
}

/**
 * removeDuplicates:
 *
 */
// eslint-disable-next-line
function removeDuplicates(array: any[]) {
    return array.filter((a, b) => array.indexOf(a) === b);
}
