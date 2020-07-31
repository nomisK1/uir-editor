import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph from '../content/Graph';
import { Status } from './StatusInput';
import './Editor.css';

interface IEditorProps {
    language: string;
    graph: Graph;
    input: string;
    passInput: (input: string) => void;
    focusInput: (status: Status, prev?: string) => void;
}

interface IEditorState {
    activateNodeHighlighting: boolean;
    activateVariableDecorating: boolean;
    activateChildDecorating: boolean;
    activateParentDecorating: boolean;
    activateCommentDecorating: boolean;
}

class Editor extends React.Component<IEditorProps, IEditorState> {
    private container: HTMLDivElement | null = null;
    private editor: monaco.editor.IStandaloneCodeEditor | null = null;
    private graph: Graph;
    private value: string;
    private input: string;
    private decorations: string[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private commentDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.state = {
            activateNodeHighlighting: true,
            activateVariableDecorating: true,
            activateChildDecorating: true,
            activateParentDecorating: true,
            activateCommentDecorating: true,
        };
        this.graph = this.props.graph;
        this.value = this.graph.print();
        this.input = this.props.input;
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressJumpRight = this.handleKeypressJumpRight.bind(this);
        this.handleKeypressJumpLeft = this.handleKeypressJumpLeft.bind(this);
        this.handleKeypressHoverChild = this.handleKeypressHoverChild.bind(this);
        this.handleKeypressChild = this.handleKeypressChild.bind(this);
        this.handleKeypressHoverParent = this.handleKeypressHoverParent.bind(this);
        this.handleKeypressParent = this.handleKeypressParent.bind(this);
        this.handleKeypressGoBack = this.handleKeypressGoBack.bind(this);
        this.handleKeypressToInput_Comment = this.handleKeypressToInput_Comment.bind(this);
        this.handleKeypressToInput_Rename = this.handleKeypressToInput_Rename.bind(this);
        this.handleKeypressToInput_Search = this.handleKeypressToInput_Search.bind(this);
        this.handleKeypressNextOccurrence = this.handleKeypressNextOccurrence.bind(this);
        this.handleKeypressPrevOccurrence = this.handleKeypressPrevOccurrence.bind(this);
        this.handleKeypressAddComment = this.handleKeypressAddComment.bind(this);
        this.handleKeypressRemoveComment = this.handleKeypressRemoveComment.bind(this);
        this.handleKeypressResetComments = this.handleKeypressResetComments.bind(this);
        this.handleKeypressRename = this.handleKeypressRename.bind(this);
        this.handleKeypressUndoRename = this.handleKeypressUndoRename.bind(this);
        this.handleKeypressResetNames = this.handleKeypressResetNames.bind(this);
        this.handleToggleNodeHighlighting = this.handleToggleNodeHighlighting.bind(this);
        this.handleToggleVariableDecorating = this.handleToggleVariableDecorating.bind(this);
        this.handleToggleChildDecorating = this.handleToggleChildDecorating.bind(this);
        this.handleToggleParentDecorating = this.handleToggleParentDecorating.bind(this);
        this.handleToggleCommentDecorating = this.handleToggleCommentDecorating.bind(this);
        this.handleKeypressFoldAll = this.handleKeypressFoldAll.bind(this);
        this.handleKeypressFoldAllBlocks = this.handleKeypressFoldAllBlocks.bind(this);
        this.handleKeypressUnfoldAll = this.handleKeypressUnfoldAll.bind(this);
    }

    public getInstance() {
        return this.editor!;
    }

    //--------------------------------------------------
    //-----React lifecycle methods-----
    //--------------------------------------------------

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
                roundedSelection: false,
                scrollBeyondLastLine: true,
                minimap: { enabled: true },
                autoIndent: 'none',
                readOnly: true,
                glyphMargin: true,
            });
            this.editor.onMouseDown(this.handleMouseclick);
            this.editor.addCommand(monaco.KeyCode.LeftArrow, this.handleKeypressLeft);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.LeftArrow, this.handleKeypressHoverChild);
            this.editor.addCommand(monaco.KeyCode.KEY_H, this.handleKeypressLeft);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_H, this.handleKeypressHoverChild);
            this.editor.addCommand(monaco.KeyCode.DownArrow, this.handleKeypressDown);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.DownArrow, this.handleKeypressChild);
            this.editor.addCommand(monaco.KeyCode.KEY_J, this.handleKeypressDown);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_J, this.handleKeypressChild);
            this.editor.addCommand(monaco.KeyCode.UpArrow, this.handleKeypressUp);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.UpArrow, this.handleKeypressParent);
            this.editor.addCommand(monaco.KeyCode.KEY_K, this.handleKeypressUp);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_K, this.handleKeypressParent);
            this.editor.addCommand(monaco.KeyCode.RightArrow, this.handleKeypressRight);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.RightArrow, this.handleKeypressHoverParent);
            this.editor.addCommand(monaco.KeyCode.KEY_L, this.handleKeypressRight);
            this.editor.addCommand(/* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_L, this.handleKeypressHoverParent);
            this.editor.addCommand(monaco.KeyCode.Tab, this.handleKeypressJumpRight);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, this.handleKeypressJumpLeft);
            this.editor.addCommand(monaco.KeyCode.KEY_M, this.handleKeypressJumpRight);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_M, this.handleKeypressJumpLeft);
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressToInput_Search);
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressToInput_Search);
            this.editor.addCommand(monaco.KeyCode.Enter, this.handleKeypressNextOccurrence);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, this.handleKeypressPrevOccurrence);
            this.editor.addCommand(monaco.KeyCode.KEY_N, this.handleKeypressNextOccurrence);
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_N, this.handleKeypressPrevOccurrence);
            this.editor.addCommand(monaco.KeyCode.KEY_B, this.handleKeypressGoBack);
            this.editor.addAction({
                id: 'AddCommentHover',
                label: 'Add Comment (Hover)',
                keybindings: [monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 1,
                run: this.handleKeypressToInput_Comment,
            });
            this.editor.addAction({
                id: 'RemoveComment',
                label: 'Remove Comment',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 2,
                run: this.handleKeypressRemoveComment,
            });
            this.editor.addAction({
                id: 'ResetComments',
                label: 'Reset All Comments',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 3,
                run: this.handleKeypressResetComments,
            });
            this.editor.addAction({
                id: 'RenameVariable',
                label: 'Rename Variable',
                keybindings: [monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 1,
                run: this.handleKeypressToInput_Rename,
            });
            this.editor.addAction({
                id: 'UnnameVariable',
                label: 'Unname Variable',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 2,
                run: this.handleKeypressUndoRename,
            });
            this.editor.addAction({
                id: 'ResetNames',
                label: 'Reset All Names',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 3,
                run: this.handleKeypressResetNames,
            });
            this.editor.addAction({
                id: 'foldAll',
                label: 'Fold All',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_1],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 1,
                run: this.handleKeypressFoldAll,
            });
            this.editor.addAction({
                id: 'foldBlocks',
                label: 'Fold Blocks',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_2],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 2,
                run: this.handleKeypressFoldAllBlocks,
            });
            this.editor.addAction({
                id: 'unfoldAll',
                label: 'Unfold All',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_3],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 3,
                run: this.handleKeypressUnfoldAll,
            });
            this.editor.addAction({
                id: 'toggleNodeHighlighting',
                label: 'Toggle Node Highlighting',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_1],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 1,
                run: this.handleToggleNodeHighlighting,
            });
            this.editor.addAction({
                id: 'toggleVariableDecorating',
                label: 'Toggle Variable Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_2],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 2,
                run: this.handleToggleVariableDecorating,
            });
            this.editor.addAction({
                id: 'toggleChildDecorating',
                label: 'Toggle Child Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_3],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 3,
                run: this.handleToggleChildDecorating,
            });
            this.editor.addAction({
                id: 'toggleParentDecorating',
                label: 'Toggle Parent Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_4],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 4,
                run: this.handleToggleParentDecorating,
            });
            this.editor.addAction({
                id: 'toggleCommentDisplay',
                label: 'Toggle Comment Display',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_5],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 5,
                run: this.handleToggleCommentDecorating,
            });
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            this.resetPosition();
            this.updateValue();
            return true;
        }
        if (this.props.input !== nextProps.input) {
            this.input = nextProps.input;
            this.props.passInput(this.input);
        }
        return false;
    }

    public componentDidUpdate() {
        console.log('EDITOR UPDATED');
    }

    public componentWillUnmount() {
        if (this.editor) this.editor.dispose();
    }

    //--------------------------------------------------
    //-----Event handler methods-----
    //--------------------------------------------------

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position !== null) this.updateInputAt(event.target.position);
    }

    public handleKeypressLeft() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column - 1));
    }

    public handleKeypressDown() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(position.lineNumber + 1, undefined));
    }

    public handleKeypressUp() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(position.lineNumber - 1, undefined));
    }

    public handleKeypressRight() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column + 1));
    }

    public handleKeypressJumpRight() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column + 15));
    }

    public handleKeypressJumpLeft() {
        let position = this.editor!.getPosition()!;
        this.updatePosition(position.with(undefined, position.column - 15));
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

    public handleKeypressHoverParent() {
        let parent = this.graph.updateNextParent();
        if (parent) this.decorateVariable(parent.getRange().getStartPosition());
    }

    public handleKeypressParent() {
        let parent = this.graph.getCurrentParent();
        if (parent) this.graph.setCurrentVariable(parent);
        this.focusCurrentVariable();
    }

    public handleKeypressGoBack() {
        this.graph.setCurrentToPrevious();
        this.focusCurrentVariable();
    }

    public handleKeypressToInput_Comment() {
        let comment = this.graph.getCommentAt(this.editor!.getPosition()!);
        this.props.focusInput(Status.COMMENT, comment ? comment.text : undefined);
    }

    public handleKeypressToInput_Rename() {
        let variable = this.graph.getVariableAt(this.editor!.getPosition()!);
        this.props.focusInput(Status.RENAME, variable && variable.hasAlias() ? variable.getAlias() : undefined);
    }

    public handleKeypressToInput_Search() {
        this.props.focusInput(Status.SEARCH);
    }

    public handleKeypressNextOccurrence() {
        this.graph.setCurrentNextOccurrence(this.input);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        else this.resetPosition();
        this.focusCurrentVariable();
    }

    public handleKeypressPrevOccurrence() {
        this.graph.setCurrentPrevOccurrence(this.input);
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
        else this.resetPosition();
        this.focusCurrentVariable();
    }

    public handleKeypressAddComment() {
        this.graph.addCommentAt(this.input, this.editor!.getPosition()!);
        this.decorateComments();
        this.updateInput();
    }

    public handleKeypressRemoveComment() {
        this.graph.removeCommentAt(this.editor!.getPosition()!);
        this.decorateComments();
    }

    public handleKeypressResetComments() {
        this.graph.resetComments();
        this.decorateComments();
    }

    public handleKeypressRename() {
        let current = this.graph.getCurrentVariable();
        if (current) {
            if (!this.input) {
                this.input = current.getName();
                this.props.passInput(this.input);
            }
            if (this.input === current.getAlias()) return;
            if (this.graph.setCurrentVariableAlias(this.input)) {
                this.updateValue();
                this.focusCurrentVariable();
            }
        }
        this.updateInput();
    }

    public handleKeypressUndoRename() {
        let current = this.graph.getCurrentVariable();
        if (current) {
            this.input = current.getName();
            this.props.passInput(this.input);
            if (this.graph.resetCurrentVariableAlias()) {
                this.updateValue();
                this.focusCurrentVariable();
            }
        }
    }

    public handleKeypressResetNames() {
        this.graph.resetAliases();
        this.updateValue();
        this.focusCurrentVariable();
    }

    public handleToggleNodeHighlighting() {
        this.setState({
            activateNodeHighlighting: !this.state.activateNodeHighlighting,
        });
    }

    public handleToggleVariableDecorating() {
        this.setState({
            activateVariableDecorating: !this.state.activateVariableDecorating,
        });
        this.variableDecorations = [];
        this.updateDecorations();
    }

    public handleToggleChildDecorating() {
        this.setState({
            activateChildDecorating: !this.state.activateChildDecorating,
        });
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
    }

    public handleToggleParentDecorating() {
        this.setState({
            activateParentDecorating: !this.state.activateParentDecorating,
        });
        let variable = this.graph.getCurrentVariable();
        if (variable) this.decorateTree(variable.getRange().getStartPosition());
    }

    public handleToggleCommentDecorating() {
        this.setState({
            activateCommentDecorating: !this.state.activateCommentDecorating,
        });
        this.decorateComments();
    }

    public handleKeypressFoldAll() {
        if (this.editor) this.editor.trigger('fold', 'editor.foldAll', null);
    }

    public handleKeypressFoldAllBlocks() {
        if (this.editor) this.editor.trigger('foldBlockComments', 'editor.foldAllBlockComments', null);
    }

    public handleKeypressUnfoldAll() {
        if (this.editor) this.editor.trigger('unfold', 'editor.unfoldAll', null);
    }

    //--------------------------------------------------
    //-----Helper methods-----
    //--------------------------------------------------

    private updateValue() {
        let query = this.graph.print();
        if (query !== this.value) this.value = query;
        if (this.editor) this.editor.setValue(this.value);
        this.decorateComments();
    }

    /**
     * updateInput:
     * Updates the App Input field with the currently selected Variable
     */

    private updateInput() {
        let current = this.graph.getCurrentVariable();
        this.input = current ? current.getAlias() : '';
        this.props.passInput(this.input);
    }

    private updateInputAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        if (variable !== this.graph.getCurrentVariable()) {
            this.graph.setCurrentVariable(variable);
            this.updateInput();
        }
        this.decorateTree(position);
    }

    private updatePosition(position: monaco.Position) {
        this.editor!.setPosition(position);
        this.editor!.revealPositionInCenterIfOutsideViewport(position);
        this.updateInputAt(position);
    }

    private resetPosition() {
        this.updatePosition(new monaco.Position(0, 0));
    }

    private focusCurrentVariable() {
        let current = this.graph.getCurrentVariable();
        this.updatePosition(current ? current.getRange().getStartPosition() : this.editor!.getPosition()!);
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
        if (this.state.activateNodeHighlighting) {
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
        if (this.state.activateVariableDecorating) {
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
        vars.forEach((v) => decorations.push({ range: v.variable.getRange(), depth: v.depth }));
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
        vars.forEach((v) => decorations.push({ range: v.variable.getRange(), depth: v.depth }));
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
    private decorateTree(position: monaco.Position) {
        this.variableDecorations = [];
        this.treeDecorations = [];
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (!(this.state.activateChildDecorating || this.state.activateParentDecorating))
            this.getVariableDecorationsAt(position).forEach((d) => decorations.push({ range: d, depth: 0 }));
        else if (this.state.activateChildDecorating && !this.state.activateParentDecorating)
            decorations = this.getChildDecorationsAt(position);
        else if (!this.state.activateChildDecorating && this.state.activateParentDecorating)
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
        if (this.state.activateCommentDecorating) {
            let comments = this.graph.getComments();
            comments.forEach((c) => this.setCommentDecoration(c));
            this.updateDecorations();
            return comments;
        }
        this.updateDecorations();
        return [];
    }

    public getCommentHovers() {
        if (!this.state.activateCommentDecorating) return [];
        let hovers: monaco.languages.Hover[] = [];
        this.graph.getComments().forEach((c) =>
            hovers.push({
                range: c.range,
                contents: [
                    { value: c.text },
                    {
                        value: '![monaco-img-preview](https://analytics.db.in.tum.de/give_sql.svg)',
                        isTrusted: true,
                    },
                ],
            }),
        );
        return hovers;
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    private updateDecorations() {
        if (this.editor !== null)
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
                ...this.commentDecorations,
            ]);
    }

    public getFoldingRanges() {
        let ranges: monaco.languages.FoldingRange[] = [];
        this.graph.getFoldingRanges().forEach((r) =>
            ranges.push({
                start: r.range.startLineNumber,
                end: r.range.endLineNumber,
                kind: r.definition
                    ? monaco.languages.FoldingRangeKind.Region
                    : monaco.languages.FoldingRangeKind.Comment,
            }),
        );
        return ranges;
    }

    render() {
        console.log('RENDERING...');
        console.log(this.graph);
        return <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }} />;
    }
}

export default Editor;
