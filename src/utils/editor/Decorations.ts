import './Decorations.css';
import * as monaco from 'monaco-editor';
import Editor from '../../components/Editor';
import { getMonacoRanges } from './IRange';

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
     * findDecorationsHover:
     *
     */
    public findDecorationsHover(/* target: monaco.Range */ word: string, line: number, column: number) {
        let graph = Decorations.editor.getGraph();
        if (Decorations.editor.getActivateHover()) {
            let targets = getMonacoRanges(graph.getVariableRanges(graph.findVariable(line, column)));
            //console.log(word);
            return targets;
        }
        return [];
    }

    /**
     * findDecorationsClick:
     *
     */
    public findDecorationsClick(/* target: monaco.Range */ word: string, line: number, column: number) {
        let graph = Decorations.editor.getGraph();
        if (Decorations.editor.getActivateClick()) {
            let targets = getMonacoRanges(graph.getVariableRanges(graph.getVariableBalancedTree(word)));
            //console.log(word);
            return targets;
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
