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
     * shiftRange:
     * Shifts the Range by one column to the right
     */
    public static shiftRange(range: monaco.Range) {
        return range
            .setStartPosition(range.startLineNumber, range.startColumn + 1)
            .setEndPosition(range.endLineNumber, range.endColumn + 1);
    }

    /**
     * findDecorationsVTrack:
     *
     */
    private findDecorationsVTrack(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        let target = graph.findNodeAt(position);
        console.log(target);
        let nodes = target ? graph.findRelatedNodes(target) : [];
        let decorations = nodes.map((n) => n.getRange()).map((r) => Decorations.shiftRange(r));
        return decorations;
    }

    /**
     * decorateVTrack:
     *
     */
    public decorateVTrack(position: monaco.Position) {
        if (Decorations.editor.getActivateVTrack()) {
            return this.findDecorationsVTrack(position);
        }
        return [];
    }

    /**
     * findDecorationsCHover:
     *
     */
    private findDecorationsCHover(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableChildrenTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Decorations.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * findDecorationsPHover:
     *
     */
    private findDecorationsPHover(position: monaco.Position) {
        let graph = Decorations.editor.getGraph();
        let target = graph.findVariableAt(position);
        console.log(target);
        let vars = target ? graph.findVariableParentsTree(target) : [];
        console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: Decorations.shiftRange(v.variable.getRange()), depth: v.depth });
        });
        return decorations;
    }

    /**
     * decorateHover:
     *
     */
    public decorateHover(position: monaco.Position) {
        if (
            (Decorations.editor.getActivateCHover() && Decorations.editor.getActivatePHover()) ||
            !(Decorations.editor.getActivateCHover() || Decorations.editor.getActivatePHover())
        ) {
            return [];
        }
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (Decorations.editor.getActivateCHover()) {
            decorations = this.findDecorationsCHover(position);
        } else {
            decorations = this.findDecorationsPHover(position);
        }
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setDecorationHover(d);
            ranges.push(d.range);
        });
        Decorations.editor.updateDecorations();
        return ranges;
    }

    /**
     * setDecorationHover:
     *
     */
    private setDecorationHover(target: { range: monaco.Range; depth: number }) {
        if (target.depth === 0) {
            this.array.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className: 'contentVariable',
                    glyphMarginClassName: 'glyphVariable',
                },
            });
        } else if (target.depth < 0) {
            let className = 'contentChild' + target.depth;
            this.array.push({
                range: target.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphChild',
                },
            });
        } else {
            let className = 'contentParent' + target.depth;
            this.array.push({
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
        return this.array;
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
