import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './structure/_node';
import _component from './structure/_component';
import global from './structure/global';
import declaration from './structure/declaration';
import definition from './structure/definition';
import block from './structure/block';
import instruction from './structure/instruction';
import variable from './structure/variable';
import target from './structure/target';
import label from './structure/label';
import TargetTree from './tree/TargetTree';

interface IGraphProps {
    gid: number;
    json: Object;
}

/**
 * Graph:
 * Manage nodes and provide functionality for the Editor
 */
class Graph {
    private gid: number;
    private json: Object;
    private line: number = 1;
    private nodes: _node[] = [];
    private components: _component[] = [];
    private variables: variable[] = [];
    private targets: target[] = [];
    private current: _node | null = null;
    private previous: _node[] = [];
    private next?: variable;
    private currentParents: variable[] = [];
    private currentChildren: variable[] = [];
    private bookmark: number | null = null;
    private comments: comment[] = [];
    private notes: note[] = [];
    private aliases: alias[] = [];

    constructor(props: IGraphProps) {
        this.gid = props.gid;
        this.json = props.json;
        this.build();
    }

    private build() {
        let globals = lookupJSON(this.json, 'globals') as Object[];
        let functions = lookupJSON(this.json, 'functions') as Object[];
        globals.forEach((json) => {
            this.components.push(
                new global({
                    json,
                    line: this.line,
                    context: null,
                }),
            );
            this.line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        functions.forEach((json) => {
            if (lookupJSON(json, 'blocks'))
                this.components.push(
                    new definition({
                        json,
                        line: this.line,
                        context: null,
                    }),
                );
            else
                this.components.push(
                    new declaration({
                        json,
                        line: this.line,
                        context: null,
                    }),
                );
            this.line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        this.components.forEach((c) => this.nodes.push(...c.getNodes()));
        this.nodes.forEach((n) => {
            if (n instanceof variable) this.variables.push(n);
            if (n instanceof target) this.targets.push(n);
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
        this.retrieveLocalStorageNotes();
        this.retrieveLocalStorageAliases();
    }

    public getStartPosition() {
        return new monaco.Position(1, 1);
    }

    public getEndPosition() {
        return new monaco.Position(this.line - 1, 1);
    }

    public print() {
        let str = '';
        this.components.forEach((c) => (str += c.toString() + '\n\n'));
        return str.slice(0, -1);
    }

    public getDisplayValue() {
        let lines = this.print().split('\n');
        for (let i = 0; i < this.comments.length; i++) lines[this.comments[i].line] += '   // ' + this.comments[i].text;
        return lines.join('\n');
    }

    //--------------------------------------------------
    //-----Find Components-----
    //--------------------------------------------------

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

    private getNodeByNID(nid: number) {
        let node = this.nodes.find((n) => n.getNID() === nid);
        return node ? node : null;
    }

    private getNodeByAlias(alias: string) {
        let nodes: _node[] = [];
        this.nodes.forEach((n) => {
            if (n.getAlias() === alias) nodes.push(n);
        });
        return nodes;
    }

    private getVariablesByName(name: string) {
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

    //--------------------------------------------------
    //-----Connect Nodes-----
    //--------------------------------------------------

    public getRelatedNodes(node: _node | null) {
        let nodes: _node[] = [];
        if (node !== null) {
            nodes.push(node);
            if (node instanceof global) nodes.push(...this.getVariablesByName(node.getVariables()[0].getName()));
            else if (node instanceof declaration) nodes.push(...this.getRelatedFunctions(node.getName()));
            else if (node instanceof block) nodes.push(...this.getRelatedTargets(node.getLabel()));
            else if (node instanceof instruction) nodes.push(...this.getRelatedFunctions(node.getFunctionName()));
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

    public getVariableSiblings(variable: variable) {
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
            let assignments = context.getAssignments().map((a) => a.getAssigned()!.getName());
            if (assignments.includes(variable.getName()))
                return context.getAssignments()[assignments.indexOf(variable.getName())].getAssigned()!;
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Children and Parents-----
    //--------------------------------------------------

    private getVariableParents(variable: variable) {
        return variable.getParents();
    }

    private getVariableChildren(variable: variable) {
        let children: variable[] = [];
        let context = variable.getOuterContext();
        if (context instanceof definition)
            context.getAssignments().forEach((a) => {
                if (
                    a
                        .getAssignees()
                        .map((v) => v.getName())
                        .includes(variable.getName())
                )
                    children.push(a.getAssigned()!);
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

    public getNextParent() {
        let temp = [...this.currentParents];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentParents = temp;
        return this.next;
    }

    public getNextChild() {
        let temp = [...this.currentChildren];
        this.next = temp.shift();
        if (this.next) temp.push(this.next);
        this.currentChildren = temp;
        return this.next;
    }

    public setCurrentParent() {
        let parent = this.currentParents[this.next ? this.currentParents.length - 1 : 0];
        if (parent) this.setCurrent(parent);
    }

    public setCurrentChild() {
        let child = this.currentChildren[this.next ? this.currentChildren.length - 1 : 0];
        if (child) this.setCurrent(child);
    }

    //--------------------------------------------------
    //-----Handle Current Node-----
    //--------------------------------------------------

    public getCurrent() {
        return this.current;
    }

    public updateCurrent(position: monaco.Position) {
        this.setCurrent(this.getNodeAt(position));
    }

    private setCurrent(node: _node | null, back?: true) {
        if (!back && this.current && this.current !== node && !(this.current instanceof block))
            this.previous.push(this.current);
        this.current = node;
        this.next = undefined;
        if (this.current instanceof variable) {
            this.currentParents = this.getVariableParents(this.current);
            this.currentChildren = this.getVariableChildren(this.current);
        } else {
            this.currentParents = [];
            this.currentChildren = [];
        }
    }

    public setCurrentNextOccurrence() {
        if (this.current) {
            let nodes = this.getNodeByAlias(this.current.getAlias());
            for (let i = 0; i < nodes.length; i++)
                if (
                    !nodes[i].getRange().getStartPosition().isBeforeOrEqual(this.current.getRange().getStartPosition())
                ) {
                    this.setCurrent(nodes[i]);
                    return;
                }
            this.setCurrent(nodes[0]);
        }
    }

    public setCurrentPrevOccurrence() {
        if (this.current) {
            let nodes = this.getNodeByAlias(this.current.getAlias());
            for (let i = nodes.length - 1; i >= 0; i--)
                if (nodes[i].getRange().getStartPosition().isBefore(this.current.getRange().getStartPosition())) {
                    this.setCurrent(nodes[i]);
                    return;
                }
            this.setCurrent(nodes[nodes.length - 1]);
        }
    }

    public searchCurrent(input: string) {
        if (this.current && this.current.getAlias() === input) this.setCurrentNextOccurrence();
        else {
            let current = this.getNodeByAlias(input)[0];
            this.setCurrent(current ? current : null);
        }
    }

    public setCurrentBack() {
        let last = this.previous.pop();
        if (last) {
            this.setCurrent(last, true);
            return true;
        }
        return false;
    }

    public setCurrentNextTarget(position: monaco.Position) {
        let target = this.getNextTargetAt(position);
        if (target) this.setCurrent(target);
    }

    private getNextTargetAt(position: monaco.Position): target | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let targets = context.getTargets();
                for (let i = 0; i < targets.length; i++)
                    if (!targets[i].getRange().getStartPosition().isBeforeOrEqual(position)) return targets[i];
                return this.getNextTargetAt(context.getRange().getStartPosition());
            }
        }
        return null;
    }

    public setCurrentPrevTarget(position: monaco.Position) {
        let target = this.getPrevTargetAt(position);
        if (target) this.setCurrent(target);
    }

    private getPrevTargetAt(position: monaco.Position): target | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let targets = context.getTargets();
                for (let i = targets.length - 1; i >= 0; i--)
                    if (targets[i].getRange().getStartPosition().isBefore(position)) return targets[i];
                return this.getPrevTargetAt(context.getRange().getEndPosition());
            }
        }
        return null;
    }

    public setCurrentNextLabel(position: monaco.Position) {
        let label = this.getNextLabelAt(position);
        if (label) this.setCurrent(label);
    }

    private getNextLabelAt(position: monaco.Position): label | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let labels = context.getLabels();
                if (node instanceof target && !(node instanceof label)) {
                    for (let i = 0; i < labels.length; i++)
                        if (labels[i].getAlias() === node.getAlias()) return labels[i];
                } else {
                    for (let i = 0; i < labels.length; i++)
                        if (!labels[i].getRange().getStartPosition().isBeforeOrEqual(position)) return labels[i];
                }
                return this.getNextLabelAt(context.getRange().getStartPosition());
            }
        }
        return null;
    }

    public setCurrentPrevLabel(position: monaco.Position) {
        let label = this.getPrevLabelAt(position);
        if (label) this.setCurrent(label);
    }

    private getPrevLabelAt(position: monaco.Position): label | null {
        let node = this.getNodeAt(position);
        if (node) {
            let context = node.getOuterContext();
            if (context instanceof definition) {
                let labels = context.getLabels();
                if (node instanceof target && !(node instanceof label)) {
                    for (let i = labels.length - 1; i >= 0; i--)
                        if (labels[i].getAlias() === node.getAlias()) return labels[i];
                } else {
                    for (let i = labels.length - 1; i >= 0; i--)
                        if (labels[i].getRange().getStartPosition().isBefore(position)) return labels[i];
                }
                return this.getPrevLabelAt(context.getRange().getEndPosition());
            }
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Bookmark-----
    //--------------------------------------------------

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

    public addBookmarkAt(lineNumber: number) {
        if (lineNumber !== this.bookmark) {
            this.removeBookmark();
            this.bookmark = lineNumber;
            this.setLocalStorageBookmark();
            return true;
        }
        return this.removeBookmark();
    }

    public removeBookmark() {
        if (this.bookmark) {
            this.bookmark = null;
            this.removeLocalStorageBookmark();
            return true;
        }
        return false;
    }

    public getBookmark() {
        return this.bookmark;
    }

    //--------------------------------------------------
    //-----Handle Comments-----
    //--------------------------------------------------

    private retrieveLocalStorageComments() {
        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.getItem('c:' + this.gid + ':' + i);
            if (data) {
                let json = JSON.parse(data);
                let text = lookupJSON(json, 'text');
                let line = lookupJSON(json, 'line');
                this.addComment(text, line);
            }
        }
    }

    private setLocalStorageComments() {
        for (let i = 0; i < this.comments.length; i++) {
            let text = this.comments[i].text;
            let line = this.comments[i].line;
            localStorage.setItem('c:' + this.gid + ':' + i, JSON.stringify({ text, line }));
        }
    }

    private removeLocalStorageComments() {
        for (let i = 0; i < localStorage.length; i++) localStorage.removeItem('c:' + this.gid + ':' + i);
    }

    private addComment(text: string, line: number) {
        if (text) {
            this.removeComment(line);
            this.comments.push({ text, line });
            this.setLocalStorageComments();
            return true;
        }
        return this.removeComment(line);
    }

    public addCommentAt(text: string, lineNumber: number) {
        if (text) return this.addComment(text, lineNumber - 1);
        return this.removeCommentAt(lineNumber);
    }

    private removeComment(line: number) {
        let index = this.comments.findIndex((c) => c.line === line);
        if (index >= 0) {
            this.comments.splice(index, 1);
            this.removeLocalStorageComments();
            this.setLocalStorageComments();
            return true;
        }
        return false;
    }

    public removeCommentAt(lineNumber: number) {
        return this.removeComment(lineNumber - 1);
    }

    public resetComments() {
        this.comments = [];
        this.removeLocalStorageComments();
    }

    public getCommentAt(lineNumber: number) {
        return this.comments.find((c) => c.line === lineNumber - 1);
    }

    public getComments() {
        return this.comments;
    }

    //--------------------------------------------------
    //-----Handle Notes-----
    //--------------------------------------------------

    private retrieveLocalStorageNotes() {
        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.getItem('n:' + this.gid + ':' + i);
            if (data) {
                let json = JSON.parse(data);
                let text = lookupJSON(json, 'text');
                let nid = lookupJSON(json, 'nid');
                let node = this.getNodeByNID(nid);
                let sl = lookupJSON(json, 'sl');
                let sc = lookupJSON(json, 'sc');
                let el = lookupJSON(json, 'el');
                let ec = lookupJSON(json, 'ec');
                this.addNote(text, node ? node : null, new monaco.Range(sl, sc, el, ec));
            }
        }
    }

    private setLocalStorageNotes() {
        for (let i = 0; i < this.notes.length; i++) {
            let range = this.notes[i].range;
            localStorage.setItem(
                'n:' + this.gid + ':' + i,
                JSON.stringify({
                    text: this.notes[i].text,
                    nid: this.notes[i].node ? this.notes[i].node!.getNID() : NaN,
                    sl: range.startLineNumber,
                    sc: range.startColumn,
                    el: range.endLineNumber,
                    ec: range.endColumn,
                }),
            );
        }
    }

    private removeLocalStorageNotes() {
        for (let i = 0; i < localStorage.length; i++) localStorage.removeItem('n:' + this.gid + ':' + i);
    }

    private addNote(text: string, node: _node | null, range: monaco.Range) {
        let note = this.notes.find(
            (n) => n.node === node || (!n.node && n.range.startLineNumber === range.startLineNumber),
        );
        if (text) {
            if (note) this.removeNote(note);
            this.notes.push({ text: text.slice(0, maxNote), node, range });
            this.notes = sortNotesByDepth(this.notes);
            this.setLocalStorageNotes();
            return true;
        }
        if (note) return this.removeNote(note);
        return false;
    }

    public addNoteAt(text: string, position: monaco.Position) {
        if (text) {
            let node = this.getNodeAt(position);
            return this.addNote(
                text,
                node ? node : null,
                node ? node.getRange() : new monaco.Range(position.lineNumber, 1, position.lineNumber, 1),
            );
        }
        return this.removeNoteAt(position);
    }

    private removeNote(note: note) {
        let index = this.notes.indexOf(note);
        if (index >= 0) {
            this.notes.splice(index, 1);
            this.removeLocalStorageNotes();
            this.setLocalStorageNotes();
            return true;
        }
        return false;
    }

    public removeNoteAt(position: monaco.Position) {
        return this.removeNote(this.getOuterNoteAt(position));
    }

    public resetNotes() {
        this.notes = [];
        this.removeLocalStorageNotes();
    }

    private updateNotes() {
        for (let i = 0; i < this.notes.length; i++)
            if (this.notes[i].node) this.notes[i].range = this.notes[i].node!.getRange();
    }

    public getNotes() {
        return this.notes;
    }

    private getNotesAt(position: monaco.Position) {
        let notes: note[] = [];
        this.notes.forEach((n) => {
            if (n.range.containsPosition(position)) notes.push(n);
        });
        return sortNotesByDepth(notes);
    }

    public getOuterNoteAt(position: monaco.Position) {
        return this.getNotesAt(position)[0];
    }

    private getRelatedNotesAt(position: monaco.Position) {
        let notes = this.getNotesAt(position);
        let node = this.getNodeAt(position);
        let nodes: _node[] = [];
        if (node instanceof variable) nodes = this.getVariableSiblings(node);
        if (node instanceof target) nodes = this.getRelatedTargets(node);
        let relatedNotes = this.notes.filter((n) => n.node && n.node !== node && nodes.includes(n.node));
        return notes.length ? [notes[0], ...relatedNotes, ...notes.slice(1)] : notes;
    }

    public getNoteStringAt(position: monaco.Position) {
        let notes = this.getRelatedNotesAt(position);
        return notes.length ? ' (' + notes.map((n) => '"' + n.text + '"').join(', ') + ')' : '';
    }

    private getNoteInfoAt(position: monaco.Position) {
        let notes = this.getRelatedNotesAt(position);
        return notes.length
            ? this.getRelatedNotesAt(position)
                  .map(
                      (n) =>
                          '@' +
                          (n.node ? n.node!.constructor.name : '') +
                          '[' +
                          n.range.getStartPosition().lineNumber +
                          '/' +
                          n.range.getStartPosition().column +
                          ']:\t"' +
                          n.text +
                          '"',
                  )
                  .join('\n')
            : '';
    }

    public getNextNoteAt(position: monaco.Position): note | null {
        this.notes = sortNotesByPosition(this.notes);
        if (this.notes.length) {
            for (let i = 0; i < this.notes.length; i++)
                if (!this.notes[i].range.getStartPosition().isBeforeOrEqual(position)) return this.notes[i];
            return this.getNextNoteAt(this.getStartPosition());
        }
        return null;
    }

    public getPrevNoteAt(position: monaco.Position): note | null {
        this.notes = sortNotesByPosition(this.notes);
        if (this.notes.length) {
            for (let i = this.notes.length - 1; i >= 0; i--)
                if (this.notes[i].range.getStartPosition().isBefore(position)) return this.notes[i];
            return this.getPrevNoteAt(this.getEndPosition());
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Renaming-----
    //--------------------------------------------------

    private retrieveLocalStorageAliases() {
        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.getItem('a:' + this.gid + ':' + i);
            if (data) {
                let json = JSON.parse(data);
                let alias = lookupJSON(json, 'alias');
                let nid = lookupJSON(json, 'nid');
                this.setAlias(alias, this.getNodeByNID(nid)!);
            }
        }
    }

    private setLocalStorageAliases() {
        for (let i = 0; i < this.aliases.length; i++) {
            let alias = this.aliases[i].alias;
            let nid = this.aliases[i].node.getNID();
            localStorage.setItem('a:' + this.gid + ':' + i, JSON.stringify({ alias, nid }));
        }
    }

    private removeLocalStorageAliases() {
        for (let i = 0; i < localStorage.length; i++) localStorage.removeItem('a:' + this.gid + ':' + i);
    }

    private setAlias(alias: string, node: _node) {
        if (
            (node instanceof variable || node instanceof target) &&
            alias &&
            isLegal(alias) &&
            !this.variables.map((v) => v.getName()).includes(alias) &&
            !this.targets.map((t) => t.getName()).includes(alias) &&
            !this.aliases.map((a) => a.alias).includes(alias)
        ) {
            this.resetAlias(node);
            this.aliases.push({ alias, node });
            node.setAlias(alias);
            node.getContext()!.findRanges();
            if (node instanceof variable)
                this.getVariableSiblings(node).forEach((s) => {
                    s.setAlias(alias);
                    s.getContext()!.findRanges();
                });
            if (node instanceof target)
                this.getRelatedTargets(node).forEach((t) => {
                    t.setAlias(alias);
                    t.getContext()!.findRanges();
                });
            this.updateNotes();
            this.setLocalStorageAliases();
            //console.log('RENAME');
            return true;
        } else {
            //console.log('ERROR: RENAME FAILED');
            return false;
        }
    }

    public setAliasAt(alias: string, position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node) {
            if (alias && alias !== node.getName()) {
                return this.setAlias(alias, node);
            }
            return this.resetAlias(node);
        }
        return false;
    }

    private resetAlias(node: _node) {
        if (node.hasAlias() && (node instanceof variable || node instanceof target)) {
            this.aliases.splice(this.aliases.map((a) => a.alias).indexOf(node.getAlias()), 1);
            node.resetAlias();
            node.getContext()!.findRanges();
            if (node instanceof variable)
                this.getVariableSiblings(node).forEach((s) => {
                    s.resetAlias();
                    s.getContext()!.findRanges();
                });
            if (node instanceof target)
                this.getRelatedTargets(node).forEach((t) => {
                    t.resetAlias();
                    t.getContext()!.findRanges();
                });
            this.updateNotes();
            this.removeLocalStorageAliases();
            this.setLocalStorageAliases();
            //console.log('UNNAME');
            return true;
        }
        //console.log('ERROR: UNNAME FAILED');
        return false;
    }

    public resetAliasAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node) return this.resetAlias(node);
        return false;
    }

    public resetAliases() {
        this.aliases = [];
        this.variables.forEach((v) => v.resetAlias());
        this.variables.forEach((v) => v.getContext()!.findRanges());
        this.targets.forEach((t) => t.resetAlias());
        this.targets.forEach((t) => t.getContext()!.findRanges());
        this.updateNotes();
        this.removeLocalStorageAliases();
    }

    public getAliases() {
        return this.aliases;
    }

    //--------------------------------------------------
    //-----Handle TargetTree-----
    //--------------------------------------------------

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

    //--------------------------------------------------
    //-----Handle Info-----
    //--------------------------------------------------

    public getInfoAt(position: monaco.Position) {
        let node = this.getNodeAt(position);
        if (node) {
            let info = node.getInfo();
            let notes = this.getNoteInfoAt(position);
            if (notes) info.push('\n\nNOTES:\n' + notes);
            return info;
        }
        return null;
    }

    //--------------------------------------------------
    //-----Handle Folding-----
    //--------------------------------------------------

    public getFoldingRanges() {
        let ranges: { range: monaco.Range; definition?: boolean }[] = [];
        this.getDefinitions().forEach((d) => {
            ranges.push(...d.getFoldingRanges());
        });
        return ranges;
    }
}

export default Graph;

type comment = {
    text: string;
    line: number;
};

export type note = {
    text: string;
    range: monaco.Range;
    node: _node | null;
};

type alias = {
    alias: string;
    node: _node;
};

//--------------------------------------------------
//-----Helpers-----
//--------------------------------------------------

function sortNotesByDepth(notes: note[]) {
    const compareNoteDepth = (a: note, b: note) => {
        return a.range.containsRange(b.range) ? 1 : b.range.containsRange(a.range) ? -1 : 0;
    };
    return notes.sort(compareNoteDepth);
}

function sortNotesByPosition(notes: note[]) {
    const compareNotePosition = (a: note, b: note) => {
        let aPos = a.range.getStartPosition();
        let bPos = b.range.getStartPosition();
        return aPos.isBefore(bPos) ? -1 : !aPos.isBeforeOrEqual(bPos) ? 1 : 0;
    };
    return notes.sort(compareNotePosition);
}

// Maximum amount of characters in a note
const maxNote = 60;

function isLegal(string: string) {
    for (let i = 0; i < string.length; i++) if (!legalStrings.includes(string[i])) return false;
    return true;
}

// Character that can be used in a name
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
