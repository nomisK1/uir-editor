import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph from '../content/Graph';
import './Editor.css';

interface IEditorProps {
    language: string;
    graph: Graph;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
    activateCommentDecoration: boolean;
    selection: string;
    passSelection: (selection: string) => void;
    focusInput: () => void;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null = null;
    private editor: monaco.editor.IStandaloneCodeEditor | null = null;
    private graph: Graph;
    private value: string;
    private activateNodeHighlighting: boolean;
    private activateVariableDecoration: boolean;
    private activateChildDecoration: boolean;
    private activateParentDecoration: boolean;
    private activateCommentDecoration: boolean;
    private selection: string;
    private decorations: string[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private commentDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.graph = this.props.graph;
        this.value = this.graph.print();
        this.activateNodeHighlighting = this.props.activateNodeHighlighting;
        this.activateVariableDecoration = this.props.activateVariableDecoration;
        this.activateChildDecoration = this.props.activateChildDecoration;
        this.activateParentDecoration = this.props.activateParentDecoration;
        this.activateCommentDecoration = this.props.activateCommentDecoration;
        this.selection = this.props.selection;
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressToInput = this.handleKeypressToInput.bind(this);
        this.handleKeypressJumpRight = this.handleKeypressJumpRight.bind(this);
        this.handleKeypressNextOccurrence = this.handleKeypressNextOccurrence.bind(this);
        this.handleKeypressPrevOccurrence = this.handleKeypressPrevOccurrence.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressHoverChild = this.handleKeypressHoverChild.bind(this);
        this.handleKeypressChild = this.handleKeypressChild.bind(this);
        this.handleKeypressParent = this.handleKeypressParent.bind(this);
        this.handleKeypressHoverParent = this.handleKeypressHoverParent.bind(this);
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
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressToInput);
            this.editor.addCommand(monaco.KeyCode.Tab, this.handleKeypressJumpRight);
            this.editor.addCommand(monaco.KeyCode.Enter, this.handleKeypressNextOccurrence);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, this.handleKeypressPrevOccurrence);
            this.editor.addCommand(monaco.KeyCode.LeftArrow, this.handleKeypressLeft);
            this.editor.addCommand(monaco.KeyCode.DownArrow, this.handleKeypressDown);
            this.editor.addCommand(monaco.KeyCode.UpArrow, this.handleKeypressUp);
            this.editor.addCommand(monaco.KeyCode.RightArrow, this.handleKeypressRight);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.LeftArrow, this.handleKeypressHoverChild);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.DownArrow, this.handleKeypressChild);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.UpArrow, this.handleKeypressParent);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.RightArrow, this.handleKeypressHoverParent);
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressToInput);
            this.editor.addCommand(monaco.KeyCode.KEY_B, this.handleKeypressPrevious);
            this.editor.addCommand(monaco.KeyCode.KEY_M, this.handleKeypressJumpRight);
            this.editor.addCommand(monaco.KeyCode.KEY_N, this.handleKeypressNextOccurrence);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_N, this.handleKeypressPrevOccurrence);
            this.editor.addCommand(monaco.KeyCode.KEY_H, this.handleKeypressLeft);
            this.editor.addCommand(monaco.KeyCode.KEY_J, this.handleKeypressDown);
            this.editor.addCommand(monaco.KeyCode.KEY_K, this.handleKeypressUp);
            this.editor.addCommand(monaco.KeyCode.KEY_L, this.handleKeypressRight);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_H, this.handleKeypressHoverChild);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_J, this.handleKeypressChild);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_K, this.handleKeypressParent);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_L, this.handleKeypressHoverParent);
            this.editor.setPosition(new monaco.Position(0, 0));
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
        this.decorateComments();
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            let query = this.graph.print();
            if (query !== this.value) this.value = query;
            this.resetPosition();
            return true;
        }
        if (this.props.selection !== nextProps.selection) {
            this.selection = nextProps.selection;
            this.props.passSelection(this.selection);
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
        if (this.props.activateCommentDecoration !== nextProps.activateCommentDecoration) {
            this.activateCommentDecoration = nextProps.activateCommentDecoration;
            if (nextProps.activateCommentDecoration) this.decorateComments();
            else {
                this.commentDecorations = [];
                this.updateDecorations();
            }
        }
        return false;
    }

    public componentDidUpdate() {
        if (this.editor) this.editor.setValue(this.value);
        this.decorateComments();
    }

    public componentWillUnmount() {
        if (this.editor) this.editor.dispose();
    }

    public getInstance() {
        return this.editor!;
    }

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position !== null) {
            this.updateInputAt(event.target.position);
            this.decorateTree(event.target.position);
        }
    }

    public handleKeypressToInput() {
        this.props.focusInput();
    }

    public handleKeypressJumpRight() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column + 10));
    }

    public handleKeypressNextOccurrence() {
        this.graph.setCurrentNextOccurrence(this.selection);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        else this.resetPosition();
        this.focusCurrentVariable();
    }

    public handleKeypressPrevOccurrence() {
        this.graph.setCurrentPrevOccurrence(this.selection);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        else this.resetPosition();
        this.focusCurrentVariable();
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

    public handleKeypressHoverParent() {
        let parent = this.graph.updateNextParent();
        if (parent) this.decorateVariable(parent.getRange().getStartPosition());
    }

    public handleKeypressParent() {
        let parent = this.graph.getCurrentParent();
        if (parent) this.graph.setCurrentVariable(parent);
        this.focusCurrentVariable();
    }

    public handleKeypressHoverChild() {
        let child = this.graph.updateNextChild();
        if (child) this.decorateVariable(child.getRange().getStartPosition());
    }

    public handleKeypressChild() {
        let child = this.graph.getCurrentChild();
        if (child) this.graph.setCurrentVariable(child);
        this.focusCurrentVariable();
    }

    public handleKeypressPrevious() {
        this.graph.setCurrentToPrevious();
        this.focusCurrentVariable();
    }

    /**
     * updateInput:
     * Updates the App Input field with the currently selected Variable name
     */
    private updateInputAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        this.selection = variable ? variable.getName() : '';
        this.graph.setCurrentVariable(variable);
        this.props.passSelection(this.selection);
    }

    private updatePosition(position: monaco.Position) {
        this.editor!.setPosition(position);
        this.editor!.revealPositionInCenterIfOutsideViewport(position);
        this.updateInputAt(position);
        this.decorateTree(position);
    }

    public focusCurrentVariable() {
        let current = this.graph.getCurrentVariable();
        this.updatePosition(current ? current.getRange().getStartPosition() : this.editor!.getPosition()!);
    }

    public resetPosition() {
        this.updatePosition(new monaco.Position(0, 0));
    }

    /**
     * findNodeHighlights:
     *
     */
    private findNodeHighlights(position: monaco.Position) {
        let node = this.graph.getNodeAt(position);
        console.log(node);
        let nodes = this.graph.getRelatedNodes(node);
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
     * getVariableDecorationsAt:
     *
     */
    private getVariableDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = this.graph.getVariableSiblings(variable);
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
            let decorations = this.getVariableDecorationsAt(position);
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
    private getChildDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = variable ? this.graph.getChildTree(variable) : [];
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
    private getParentDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = variable ? this.graph.getParentTree(variable) : [];
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
                    glyphMarginClassName: 'glyphChild' + leaf.depth,
                },
            });
        } else {
            let className = 'contentParent' + leaf.depth;
            this.treeDecorations.push({
                range: leaf.range,
                options: {
                    isWholeLine: false,
                    className,
                    glyphMarginClassName: 'glyphParent' + leaf.depth,
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
        if (!(this.activateChildDecoration || this.activateParentDecoration))
            this.getVariableDecorationsAt(position).forEach((d) => decorations.push({ range: d, depth: 0 }));
        else if (this.activateChildDecoration && !this.activateParentDecoration)
            decorations = this.getChildDecorationsAt(position);
        else if (!this.activateChildDecoration && this.activateParentDecoration)
            decorations = this.getParentDecorationsAt(position);
        else decorations = [...this.getChildDecorationsAt(position), ...this.getParentDecorationsAt(position)];
        let ranges: monaco.Range[] = [];
        decorations.forEach((d) => {
            this.setTreeDecoration(d);
            ranges.push(d.range);
        });
        this.updateDecorations();
        return ranges;
    }

    /**
     * setCommentDecoration:
     *
     */
    private setCommentDecoration(comment: { text: string; range: monaco.Range; isWholeLine: boolean }) {
        this.commentDecorations.push({
            range: comment.range,
            options: {
                isWholeLine: comment.isWholeLine,
                className: 'contentComment',
                glyphMarginClassName: 'glyphComment',
            },
        });
    }

    /**
     * decorateComments:
     *
     */
    private decorateComments() {
        this.commentDecorations = [];
        if (this.activateCommentDecoration) {
            let comments = this.graph.getComments();
            comments.forEach((d) => this.setCommentDecoration(d));
            this.updateDecorations();
            return comments;
        }
        this.updateDecorations();
        return [];
    }

    public getComments() {
        return this.graph.getComments();
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null)
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
                ...this.commentDecorations,
            ]);
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

    render() {
        console.log(this.graph);
        return <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '73vh' }} />;
    }
}

export default Editor;
