import * as monaco from 'monaco-editor';
import Editor from './Editor';
import './Editor.css';

class Singleton {
    private static instance: Singleton;
    private static editor: Editor;
    private variableDecorations: monaco.editor.IModelDeltaDecoration[];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[];

    private constructor() {
        this.variableDecorations = [];
        this.treeDecorations = [];
    }

    /**
     * initializeSingleton:
     * Creates a static reference to the editor displaying the Singleton
     */
    public static initializeSingleton(editor: Editor) {
        Singleton.editor = editor;
    }

    /**
     * getInstance:
     * Returns the static Singleton instance
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    /**
     * shiftRange:
     * Shifts the Range by one column to the right
     */
    public static shiftRange(range: monaco.Range) {
        return range
            .setStartPosition(range.startLineNumber, range.startColumn + 1)
            .setEndPosition(range.endLineNumber, range.endColumn + 1);
    }

    public findSelectorVariables() {
        let graph = Singleton.editor.getGraph();
        let selection = Singleton.editor.getSelection();
        selection = selection.charAt(0) !== '%' ? '%' + selection : selection;
        let vars = graph.findVariables(selection);
        if (vars.length > 0) {
            return graph.getNodeRanges(vars);
        }
        return [new monaco.Range(0, 0, 0, 0)];
    }

    /**
     * findNodeHighlights:
     *
     */
    private findNodeHighlights(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findNodeAt(position);
        console.log(target);
        let nodes = target ? graph.findRelatedNodes(target) : [];
        let highlights = nodes.map((n) => n.getRange()).map((r) => Singleton.shiftRange(r));
        return highlights;
    }

    /**
     * highlightNodes:
     *
     */
    public highlightNodes(position: monaco.Position) {
        if (Singleton.editor.getActivateNodeHighlighting()) {
            return this.findNodeHighlights(position);
        }
        return [];
    }

    /**
     * findVariableDecorations:
     *
     */
    private findVariableDecorations(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = graph.findRelatedVariables(target);
        let decorations = vars.map((v) => v.getRange()).map((r) => Singleton.shiftRange(r));
        return decorations;
    }

    /**
     * setVariableDecoration:
     *
     */
    private setVariableDecoration(target: monaco.Range) {
        this.variableDecorations.push({
            range: target,
            options: {
                isWholeLine: false,
                className: 'contentVariable',
                glyphMarginClassName: 'glyphVariable',
            },
        });
    }

    /**
     * decorateVariable:
     *
     */
    public decorateVariable(position: monaco.Position) {
        this.variableDecorations = [];
        if (Singleton.editor.getActivateVariableDecoration()) {
            let decorations = this.findVariableDecorations(position);
            decorations.forEach((d) => this.setVariableDecoration(d));
            Singleton.editor.updateDecorations();
            return decorations;
        }
        return [];
    }

    /**
     * findChildDecorations:
     *
     */
    private findChildDecorations(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableChildTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Singleton.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * findParentDecorations:
     *
     */
    private findParentDecorations(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableParentTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Singleton.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * setTreeDecoration:
     *
     */
    private setTreeDecoration(target: { range: monaco.Range; depth: number }) {
        if (target.depth === 0) {
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className: 'contentTarget',
                    glyphMarginClassName: 'glyphTarget',
                },
            });
        } else if (target.depth < 0) {
            let className = 'contentChild' + target.depth;
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphChild',
                },
            });
        } else {
            let className = 'contentParent' + target.depth;
            this.treeDecorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphParent',
                },
            });
        }
    }

    /**
     * decorateTree:
     *
     */
    public decorateTree(position: monaco.Position) {
        this.removeDecorations();
        if (!(Singleton.editor.getActivateChildDecoration() || Singleton.editor.getActivateParentDecoration())) {
            return [];
        }
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (Singleton.editor.getActivateChildDecoration() && !Singleton.editor.getActivateParentDecoration()) {
            decorations = this.findChildDecorations(position);
        } else if (!Singleton.editor.getActivateChildDecoration() && Singleton.editor.getActivateParentDecoration()) {
            decorations = this.findParentDecorations(position);
        } else {
            decorations = [...this.findChildDecorations(position), ...this.findParentDecorations(position)];
        }
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setTreeDecoration(d);
            ranges.push(d.range);
        });
        Singleton.editor.updateDecorations();
        return ranges;
    }

    /**
     * getDecorations:
     *
     */
    public getDecorations() {
        return [...this.variableDecorations, ...this.treeDecorations];
    }

    /**
     * removeDecorations:
     *
     */
    public removeDecorations() {
        this.variableDecorations = [];
        this.treeDecorations = [];
        Singleton.editor.updateDecorations();
    }
}

export default Singleton;
