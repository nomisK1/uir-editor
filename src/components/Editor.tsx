import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph from '../content/Graph';
import './Editor.css';

interface IEditorProps {
    language: string;
    value: string;
    graph: Graph;
    selection: string;
    passSelection: (selection: string) => void;
    focusInput: () => void;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null;
    private editor: monaco.editor.IStandaloneCodeEditor | null;
    private value: string;
    private graph: Graph;
    private selection: string;
    private decorations: string[];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[];
    private activateNodeHighlighting: boolean;
    private activateVariableDecoration: boolean;
    private activateChildDecoration: boolean;
    private activateParentDecoration: boolean;

    constructor(props: IEditorProps) {
        super(props);
        this.container = null;
        this.editor = null;
        this.value = this.props.value;
        this.graph = this.props.graph;
        this.selection = this.props.selection;
        this.decorations = [];
        this.variableDecorations = [];
        this.treeDecorations = [];
        this.activateNodeHighlighting = this.props.activateNodeHighlighting;
        this.activateVariableDecoration = this.props.activateVariableDecoration;
        this.activateChildDecoration = this.props.activateChildDecoration;
        this.activateParentDecoration = this.props.activateParentDecoration;
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressBack = this.handleKeypressBack.bind(this);
        this.handleKeypressTab = this.handleKeypressTab.bind(this);
        this.handleKeypressEnter = this.handleKeypressEnter.bind(this);
        this.handleKeypressShiftEnter = this.handleKeypressShiftEnter.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressShiftLeft = this.handleKeypressShiftLeft.bind(this);
        this.handleKeypressShiftUp = this.handleKeypressShiftUp.bind(this);
        this.handleKeypressShiftRight = this.handleKeypressShiftRight.bind(this);
        this.handleKeypressShiftDown = this.handleKeypressShiftDown.bind(this);
        this.handleKeypressPrevious = this.handleKeypressPrevious.bind(this);
    }

    public componentDidMount() {
        if (this.container) {
            this.editor = monaco.editor.create(this.container, {
                language: this.props.language,
                value: this.value,
                lineNumbers: 'on',
                fontFamily: 'monospace',
                fontSize: 15,
                fontWeight: '100',
                letterSpacing: 0,
                automaticLayout: true,
                roundedSelection: true,
                scrollBeyondLastLine: true,
                minimap: { enabled: true },
                autoIndent: 'none',
                readOnly: true,
                glyphMargin: true,
            });
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.onMouseDown(this.handleMouseclick);
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressBack);
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressBack);
            this.editor.addCommand(monaco.KeyCode.Tab, this.handleKeypressTab);
            this.editor.addCommand(monaco.KeyCode.KEY_M, this.handleKeypressTab);
            this.editor.addCommand(monaco.KeyCode.Enter, this.handleKeypressEnter);
            this.editor.addCommand(monaco.KeyCode.KEY_N, this.handleKeypressEnter);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, this.handleKeypressShiftEnter);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_N, this.handleKeypressShiftEnter);
            this.editor.addCommand(monaco.KeyCode.LeftArrow, this.handleKeypressLeft);
            this.editor.addCommand(monaco.KeyCode.KEY_H, this.handleKeypressLeft);
            this.editor.addCommand(monaco.KeyCode.UpArrow, this.handleKeypressUp);
            this.editor.addCommand(monaco.KeyCode.KEY_J, this.handleKeypressUp);
            this.editor.addCommand(monaco.KeyCode.RightArrow, this.handleKeypressRight);
            this.editor.addCommand(monaco.KeyCode.KEY_L, this.handleKeypressRight);
            this.editor.addCommand(monaco.KeyCode.DownArrow, this.handleKeypressDown);
            this.editor.addCommand(monaco.KeyCode.KEY_K, this.handleKeypressDown);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.LeftArrow, this.handleKeypressShiftLeft);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_H, this.handleKeypressShiftLeft);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.UpArrow, this.handleKeypressShiftUp);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_J, this.handleKeypressShiftUp);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.RightArrow, this.handleKeypressShiftRight);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_L, this.handleKeypressShiftRight);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.DownArrow, this.handleKeypressShiftDown);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_K, this.handleKeypressShiftDown);
            this.editor.addCommand(monaco.KeyCode.KEY_B, this.handleKeypressPrevious);
            this.editor.setPosition({ column: 0, lineNumber: 0 });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
    }

    public componentDidUpdate(_prevProps: IEditorProps) {
        let query = this.props.value;
        if (query !== this.value) this.value = query;
        if (this.editor !== null) this.editor.setValue(query);
    }

    public componentWillUnmount() {
        if (this.editor !== null) this.editor.dispose();
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            this.resetPosition();
            return true;
        }
        if (this.props.selection !== nextProps.selection) {
            this.selection = nextProps.selection;
            if (this.selection !== '' && this.selection.charAt(0) !== '%') {
                this.selection = '%' + this.selection;
                this.props.passSelection(this.selection);
            }
        }
        if (this.props.activateNodeHighlighting !== nextProps.activateNodeHighlighting) {
            this.activateNodeHighlighting = nextProps.activateNodeHighlighting;
        }
        if (this.props.activateVariableDecoration !== nextProps.activateVariableDecoration) {
            this.activateVariableDecoration = nextProps.activateVariableDecoration;
            this.variableDecorations = [];
            this.updateDecorations();
        }
        if (this.props.activateChildDecoration !== nextProps.activateChildDecoration) {
            this.activateChildDecoration = nextProps.activateChildDecoration;
            let variable = this.graph.getCurrentVariable();
            if (variable) this.decorateTree(variable.getRange().getStartPosition());
        }
        if (this.props.activateParentDecoration !== nextProps.activateParentDecoration) {
            this.activateParentDecoration = nextProps.activateParentDecoration;
            let variable = this.graph.getCurrentVariable();
            if (variable) this.decorateTree(variable.getRange().getStartPosition());
        }
        return false;
    }

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position !== null) {
            this.updateInput(event.target.position);
            this.decorateTree(event.target.position);
        }
    }

    public handleKeypressBack() {
        this.props.focusInput();
    }

    public handleKeypressTab() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column + 10));
    }

    public handleKeypressEnter() {
        this.graph.setCurrentNextOccurrence(this.selection);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        this.jumpToCurrentVariable();
    }

    public handleKeypressShiftEnter() {
        this.graph.setCurrentPrevOccurrence(this.selection);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        this.jumpToCurrentVariable();
    }

    public handleKeypressLeft() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column - 1));
    }

    public handleKeypressUp() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(position.lineNumber - 1, undefined));
    }

    public handleKeypressRight() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column + 1));
    }

    public handleKeypressDown() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(position.lineNumber + 1, undefined));
    }

    public handleKeypressShiftLeft() {
        let parent = this.graph.updateNextParent();
        if (parent) {
            this.decorateVariable(parent.getRange().getStartPosition());
        }
    }

    public handleKeypressShiftUp() {
        let parent = this.graph.getCurrentParent();
        if (parent) {
            this.graph.setCurrentVariable(parent);
        }
        this.jumpToCurrentVariable();
    }

    public handleKeypressShiftRight() {
        let child = this.graph.updateNextChild();
        if (child) {
            this.decorateVariable(child.getRange().getStartPosition());
        }
    }

    public handleKeypressShiftDown() {
        let child = this.graph.getCurrentChild();
        if (child) {
            this.graph.setCurrentVariable(child);
        }
        this.jumpToCurrentVariable();
    }

    public handleKeypressPrevious() {
        this.graph.setCurrentToPrevious();
        this.jumpToCurrentVariable();
    }

    private updatePosition(position: monaco.Position) {
        this.editor!.setPosition(position);
        this.editor!.revealPositionInCenterIfOutsideViewport(position);
        this.updateInput(position);
        this.decorateTree(position);
    }

    public resetPosition() {
        this.updatePosition(new monaco.Position(0, 0));
    }

    public jumpToCurrentVariable() {
        let current = this.graph.getCurrentVariable();
        this.updatePosition(current ? current.getRange().getStartPosition() : this.editor!.getPosition()!);
    }

    /**
     * updateInput:
     * Updates the App Input field with the currently selected Variable name
     */
    private updateInput(position: monaco.Position) {
        let variable = this.graph.findVariableAt(position);
        this.selection = variable ? variable.getName() : '';
        this.graph.setCurrentVariable(variable);
        this.props.passSelection(this.selection);
    }

    /**
     * findNodeHighlights:
     *
     */
    private findNodeHighlights(position: monaco.Position) {
        let node = this.graph.findNodeAt(position);
        console.log(node);
        let nodes = this.graph.findRelatedNodes(node);
        let ranges = nodes.map((n) => n.getRange());
        return ranges;
    }

    /**
     * highlightNodes:
     *
     */
    public highlightNodes(position: monaco.Position) {
        let highlights: monaco.languages.DocumentHighlight[] = [];
        if (this.activateNodeHighlighting) {
            let ranges = this.findNodeHighlights(position);
            ranges.forEach((r) => highlights.push({ range: r }));
        }
        return highlights;
    }

    /**
     * findVariableDecorations:
     *
     */
    private findVariableDecorations(position: monaco.Position) {
        let variable = this.graph.findVariableAt(position);
        //console.log(variable);
        let vars = this.graph.findRelatedVariables(variable);
        let ranges = vars.map((v) => v.getRange());
        return ranges;
    }

    /**
     * setVariableDecoration:
     *
     */
    private setVariableDecoration(range: monaco.Range) {
        this.variableDecorations.push({
            range,
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
        if (this.activateVariableDecoration) {
            let decorations = this.findVariableDecorations(position);
            decorations.forEach((d) => this.setVariableDecoration(d));
            this.updateDecorations();
            return decorations;
        }
        this.updateDecorations();
        return [];
    }

    /**
     * findChildDecorations:
     *
     */
    private findChildDecorations(position: monaco.Position) {
        let variable = this.graph.findVariableAt(position);
        //console.log(variable);
        let vars = variable ? this.graph.findVariableChildTree(variable) : [];
        //console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: v.variable.getRange(), depth: v.depth });
        });
        return decorations;
    }

    /**
     * findParentDecorations:
     *
     */
    private findParentDecorations(position: monaco.Position) {
        let variable = this.graph.findVariableAt(position);
        //console.log(variable);
        let vars = variable ? this.graph.findVariableParentTree(variable) : [];
        //console.log(vars);
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => {
            decorations.push({ range: v.variable.getRange(), depth: v.depth });
        });
        return decorations;
    }

    /**
     * setTreeDecoration:
     *
     */
    private setTreeDecoration(leaf: { range: monaco.Range; depth: number }) {
        if (leaf.depth === 0) {
            this.treeDecorations.push({
                range: leaf.range,
                options: {
                    isWholeLine: false,
                    className: 'contentSelect',
                    glyphMarginClassName: 'glyphSelect',
                },
            });
        } else if (leaf.depth < 0) {
            let className = 'contentChild' + leaf.depth;
            this.treeDecorations.push({
                range: leaf.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphChild',
                },
            });
        } else {
            let className = 'contentParent' + leaf.depth;
            this.treeDecorations.push({
                range: leaf.range,
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
        this.variableDecorations = [];
        this.treeDecorations = [];
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (!(this.activateChildDecoration || this.activateParentDecoration)) {
            this.findVariableDecorations(position).forEach((d) => decorations.push({ range: d, depth: 0 }));
        } else if (this.activateChildDecoration && !this.activateParentDecoration) {
            decorations = this.findChildDecorations(position);
        } else if (!this.activateChildDecoration && this.activateParentDecoration) {
            decorations = this.findParentDecorations(position);
        } else {
            decorations = [...this.findChildDecorations(position), ...this.findParentDecorations(position)];
        }
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setTreeDecoration(d);
            ranges.push(d.range);
        });
        this.updateDecorations();
        return ranges;
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null) {
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
            ]);
        }
    }

    public getFoldingRanges() {
        let ranges: monaco.languages.FoldingRange[] = [];
        this.graph.getDefinitionRanges().forEach((r) =>
            ranges.push({
                start: r.startLineNumber,
                end: r.endLineNumber,
                kind: monaco.languages.FoldingRangeKind.Region,
            }),
        );
        return ranges;
    }

    public getInstance() {
        return this.editor!;
    }

    render() {
        //this.graph.print();
        return <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '73vh' }} />;
    }
}

export default Editor;
