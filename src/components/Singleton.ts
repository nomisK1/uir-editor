import * as monaco from 'monaco-editor';
import Editor from './Editor';
import './Editor.css';

class Singleton {
    private static instance: Singleton;
    private static editor: Editor;
    private decorations: monaco.editor.IModelDeltaDecoration[];

    private constructor() {
        this.decorations = [];
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
        selection = selection.charAt(0) !== "%" ? "%" + selection : selection;
        let vars = graph.findVariables(selection);
        if(vars.length > 0) {
            return graph.getNodeRanges(vars);
        }   
        return [new monaco.Range(0,0,0,0)];
    }

    /**
     * findHighlightsNTrack:
     *
     */
    private findHighlightsNTrack(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findNodeAt(position);
        console.log(target);
        let nodes = target ? graph.findRelatedNodes(target) : [];
        let highlights = nodes.map((n) => n.getRange()).map((r) => Singleton.shiftRange(r));
        return highlights;
    }

    /**
     * highlightNTrack:
     *
     */
    public highlightNTrack(position: monaco.Position) {
        if (Singleton.editor.getActivateNTrack()) {
            return this.findHighlightsNTrack(position);
        }
        return [];
    }

    /**
     * findDecorationsCHover:
     *
     */
    private findDecorationsCHover(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableChildrenTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Singleton.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * findDecorationsPHover:
     *
     */
    private findDecorationsPHover(position: monaco.Position) {
        let graph = Singleton.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableParentsTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Singleton.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * decorateHover:
     *
     */
    public decorateHover(position: monaco.Position) {
        if (!(Singleton.editor.getActivateCHover() || Singleton.editor.getActivatePHover())) {
            return [];
        }
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (Singleton.editor.getActivateCHover() && !Singleton.editor.getActivatePHover()) {
            decorations = this.findDecorationsCHover(position);
        } else if (!Singleton.editor.getActivateCHover() && Singleton.editor.getActivatePHover()) {
            decorations = this.findDecorationsPHover(position);
        } else {
            decorations = [...this.findDecorationsCHover(position), ...this.findDecorationsPHover(position)];
        }
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setDecorationHover(d);
            ranges.push(d.range);
        });
        Singleton.editor.updateDecorations();
        return ranges;
    }

    /**
     * setDecorationHover:
     *
     */
    private setDecorationHover(target: { range: monaco.Range; depth: number }) {
        if (target.depth === 0) {
            this.decorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className: 'contentVariable',
                    glyphMarginClassName: 'glyphVariable',
                },
            });
        } else if (target.depth < 0) {
            let className = 'contentChild' + target.depth;
            this.decorations.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphChild',
                },
            });
        } else {
            let className = 'contentParent' + target.depth;
            this.decorations.push({
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
     * getDecorations:
     *
     */
    public getDecorations() {
        return this.decorations;
    }

    /**
     * resetDecorations:
     *
     */
    public resetDecorations() {
        this.decorations = [];
        Singleton.editor.updateDecorations();
    }
}

export default Singleton;
