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

    private shiftRange(range: monaco.Range) {
        return range
            .setStartPosition(range.startLineNumber, range.startColumn + 1)
            .setEndPosition(range.endLineNumber, range.endColumn + 1);
    }

    /**
     * findDecorationsHover:
     *
     */
    public findDecorationsHover(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        if (Decorations.editor.getActivateHover()) {
            let target = graph.findNode(position);
            console.log(position, target);
            if (target) return [this.shiftRange(target!.getRange())];
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
            let target = graph.findNode(position);
            console.log(position, target);
            if (target) return [this.shiftRange(target!.getRange())];
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
                        glyphMarginClassName: '',
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
