import './Decorations.css';
import * as monaco from 'monaco-editor';
import Editor from '../../components/Editor';

// Singleton
class Decorations {
    private static instance: Decorations;
    private static editor: Editor;
    private array: monaco.editor.IModelDeltaDecoration[];

    private constructor() {
        this.array = [];
    }

    /**
     * initializeDecorations:
     * Creates a static reference to the editor displaying the Decorations
     */
    public static initializeDecorations(editor: Editor) {
        Decorations.editor = editor;
    }

    /**
     * getInstance:
     * Returns the static Decorations instance
     */
    public static getInstance(): Decorations {
        if (!Decorations.instance) Decorations.instance = new Decorations();
        return Decorations.instance;
    }

    /**
     * shiftRanges:
     * Shifts the Ranges by one column to the right
     */
    public static shiftRanges(ranges: monaco.Range[]) {
        let shifted: monaco.Range[] = [];
        ranges.forEach((r) => {
            shifted.push(
                r
                    .setStartPosition(r.startLineNumber, r.startColumn + 1)
                    .setEndPosition(r.endLineNumber, r.endColumn + 1),
            );
        });
        return shifted;
    }

    /**
     * findDecorationsHover:
     *
     */
    public findDecorationsHover(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        if (Decorations.editor.getActivateHover()) {
            let target = graph.findNodeAt(position);
            console.log(target);
            return Decorations.shiftRanges(graph.getNodeRanges(graph.findRealatedNodes(target)));
        }
        return [];
    }

    /**
     * findDecorationsClick:
     *
     */
    public findDecorationsClick(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        if (Decorations.editor.getActivateClick()) {
            let target = graph.findNodeAt(position);
            console.log(target);
            return Decorations.shiftRanges(graph.getNodeRanges(graph.findRealatedNodes(target)));
        }
        return [];
    }

    /**
     * getDecorations:
     *
     */
    public getDecorations() {
        return this.array;
    }

    /**
     * setDecorations:
     *
     */
    public setDecorations(ranges: monaco.Range[]) {
        ranges.forEach((r) => {
            this.array = [
                ...this.array,
                {
                    range: r,
                    options: {
                        isWholeLine: false,
                        className: 'myContentClass',
                        glyphMarginClassName: 'myGlyphMarginClass',
                    },
                },
            ];
        });
        Decorations.editor.updateDecorations();
    }

    /**
     * resetDecorations:
     *
     */
    public resetDecorations() {
        this.array = [];
        Decorations.editor.updateDecorations();
    }
}

export default Decorations;
