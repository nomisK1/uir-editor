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
    nextTcphQuery: () => void;
    prevTcphQuery: () => void;
    passInput: (input: string) => void;
    focusInput: (status: Status, prev?: string) => void;
    displayKeybindModal: () => void;
}

interface IEditorState {
    activateNodeHighlighting: boolean;
    activateVariableDecorating: boolean;
    activateChildDecorating: boolean;
    activateParentDecorating: boolean;
    activateBookmarkDecorating: boolean;
    activateCommentDecorating: boolean;
    activateTargetTreeHover: boolean;
}

class Editor extends React.Component<IEditorProps, IEditorState> {
    private container: HTMLDivElement | null = null;
    private editor: monaco.editor.IStandaloneCodeEditor | null = null;
    private ctxKey: monaco.editor.IContextKey<boolean> | null = null;
    private graph: Graph;
    private value: string;
    private input: string;
    private decorations: string[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private bookmarkDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private commentDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.state = {
            activateNodeHighlighting: true,
            activateVariableDecorating: true,
            activateChildDecorating: true,
            activateParentDecorating: true,
            activateBookmarkDecorating: true,
            activateCommentDecorating: true,
            activateTargetTreeHover: true,
        };
        this.graph = this.props.graph;
        this.value = this.graph.print();
        this.input = this.props.input;
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressToggleKeybinds = this.handleKeypressToggleKeybinds.bind(this);
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
        this.handleKeypressAddBookmark = this.handleKeypressAddBookmark.bind(this);
        this.handleKeypressRemoveBookmark = this.handleKeypressRemoveBookmark.bind(this);
        this.handleKeypressRevealBookmark = this.handleKeypressRevealBookmark.bind(this);
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
        this.handleToggleBookmarkDecorating = this.handleToggleBookmarkDecorating.bind(this);
        this.handleToggleCommentDecorating = this.handleToggleCommentDecorating.bind(this);
        this.handleToggleTargetTreeHover = this.handleToggleTargetTreeHover.bind(this);
        this.handleKeypressFoldAll = this.handleKeypressFoldAll.bind(this);
        this.handleKeypressFoldAllBlocks = this.handleKeypressFoldAllBlocks.bind(this);
        this.handleKeypressUnfoldAll = this.handleKeypressUnfoldAll.bind(this);
        this.handleKeypressNextTcphQuery = this.handleKeypressNextTcphQuery.bind(this);
        this.handleKeypressPrevTcphQuery = this.handleKeypressPrevTcphQuery.bind(this);
        this.handleKeypressDisplayKeybindModal = this.handleKeypressDisplayKeybindModal.bind(this);
    }

    public getInstance() {
        return this.editor!;
    }

    render() {
        console.log('RENDERING...');
        console.log(this.graph);
        return <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }} />;
    }

    //--------------------------------------------------
    //-----React lifecycle-----
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
            this.ctxKey = this.editor.createContextKey('condition', true);
            this.editor.onMouseDown(this.handleMouseclick);
            this.editor.addCommand(monaco.KeyCode.Tab, this.handleKeypressToggleKeybinds);
            this.editor.addCommand(monaco.KeyCode.LeftArrow, this.handleKeypressLeft, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.LeftArrow,
                this.handleKeypressHoverChild,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_H, this.handleKeypressLeft, 'condition');
            this.editor.addCommand(
                /* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_H,
                this.handleKeypressHoverChild,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.DownArrow, this.handleKeypressDown, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.DownArrow,
                this.handleKeypressChild,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_J, this.handleKeypressDown, 'condition');
            this.editor.addCommand(
                /* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_J,
                this.handleKeypressChild,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.UpArrow, this.handleKeypressUp, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.UpArrow,
                this.handleKeypressParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_K, this.handleKeypressUp, 'condition');
            this.editor.addCommand(
                /* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_K,
                this.handleKeypressParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.RightArrow, this.handleKeypressRight, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.RightArrow,
                this.handleKeypressHoverParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_L, this.handleKeypressRight, 'condition');
            this.editor.addCommand(
                /* monaco.KeyMod.Shift |  */ monaco.KeyCode.KEY_L,
                this.handleKeypressHoverParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_M, this.handleKeypressJumpRight, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_M,
                this.handleKeypressJumpLeft,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.Enter, this.handleKeypressNextOccurrence, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.Enter,
                this.handleKeypressPrevOccurrence,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_N, this.handleKeypressNextOccurrence, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_N,
                this.handleKeypressPrevOccurrence,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_Z, this.handleKeypressGoBack, 'condition');
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_Z, this.handleKeypressGoBack, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Z,
                this.handleKeypressGoBack,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.KEY_Q, this.handleKeypressNextTcphQuery, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_Q,
                this.handleKeypressPrevTcphQuery,
                'condition',
            );
            this.editor.addAction({
                id: 'addBookmark',
                label: 'Add Bookmark',
                keybindings: [monaco.KeyCode.KEY_B],
                contextMenuGroupId: '1_bookmark',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressAddBookmark,
            });
            this.editor.addAction({
                id: 'removeBookmark',
                label: 'Remove Bookmark',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_B],
                contextMenuGroupId: '1_bookmark',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveBookmark,
            });
            this.editor.addAction({
                id: 'revealBookmark',
                label: 'Reveal Bookmark',
                keybindings: [monaco.KeyCode.KEY_S],
                contextMenuGroupId: '1_bookmark',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealBookmark,
            });
            this.editor.addAction({
                id: 'addCommentHover',
                label: 'Add Comment (Hover)',
                keybindings: [monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Comment,
            });
            this.editor.addAction({
                id: 'removeComment',
                label: 'Remove Comment',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveComment,
            });
            this.editor.addAction({
                id: 'resetComments',
                label: 'Reset All Comments',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressResetComments,
            });
            this.editor.addAction({
                id: 'renameVariable',
                label: 'Rename Variable',
                keybindings: [monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Rename,
            });
            this.editor.addAction({
                id: 'unnameVariable',
                label: 'Unname Variable',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressUndoRename,
            });
            this.editor.addAction({
                id: 'resetNames',
                label: 'Reset All Names',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressResetNames,
            });
            this.editor.addAction({
                id: 'foldAll',
                label: 'Fold All',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_1],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAll,
            });
            this.editor.addAction({
                id: 'foldBlocks',
                label: 'Fold Blocks',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_2],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAllBlocks,
            });
            this.editor.addAction({
                id: 'unfoldAll',
                label: 'Unfold All',
                keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_3],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressUnfoldAll,
            });
            this.editor.addAction({
                id: 'toggleNodeHighlighting',
                label: 'Toggle Node Highlighting',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_1],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleToggleNodeHighlighting,
            });
            this.editor.addAction({
                id: 'toggleVariableDecorating',
                label: 'Toggle Variable Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_2],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleToggleVariableDecorating,
            });
            this.editor.addAction({
                id: 'toggleChildDecorating',
                label: 'Toggle Child Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_3],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleToggleChildDecorating,
            });
            this.editor.addAction({
                id: 'toggleParentDecorating',
                label: 'Toggle Parent Decorating',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_4],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleToggleParentDecorating,
            });
            this.editor.addAction({
                id: 'toggleBookmarkDisplay',
                label: 'Toggle Bookmark Display',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_5],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleToggleBookmarkDecorating,
            });
            this.editor.addAction({
                id: 'toggleCommentDisplay',
                label: 'Toggle Comment Display',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_6],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 6,
                keybindingContext: 'condition',
                run: this.handleToggleCommentDecorating,
            });
            this.editor.addAction({
                id: 'toggleTargetTreeHover',
                label: 'Toggle Target Tree (Hover)',
                keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_7],
                //contextMenuGroupId: '5_features',
                contextMenuOrder: 7,
                keybindingContext: 'condition',
                run: this.handleToggleTargetTreeHover,
            });
            this.editor.addAction({
                id: 'displayModal',
                label: 'Show Keyboard Shortcuts',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_S],
                contextMenuGroupId: '9_modal',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayKeybindModal,
            });
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
        this.updateValue();
        this.revealBookmark();
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
        this.revealBookmark();
        console.log('EDITOR UPDATED');
    }

    public componentWillUnmount() {
        if (this.editor) this.editor.dispose();
    }

    //--------------------------------------------------
    //-----Event handler-----
    //--------------------------------------------------

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position !== null) this.updateInputAt(event.target.position);
    }

    public handleKeypressToggleKeybinds() {
        if (this.ctxKey) {
            this.ctxKey.set(!this.ctxKey.get());
            if (this.ctxKey.get() && this.editor) this.editor.focus();
        }
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

    public handleKeypressAddBookmark() {
        this.graph.addBookmarkAt(this.editor!.getPosition()!.lineNumber);
        this.decorateBookmarks();
    }

    public handleKeypressRemoveBookmark() {
        this.graph.removeBookmark();
        this.decorateBookmarks();
    }

    public handleKeypressRevealBookmark() {
        this.revealBookmark();
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
            this.graph.setCurrentVariableAlias(this.input);
            this.updateValue();
            this.focusCurrentVariable();
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
        if (this.graph.getAliases().length) {
            this.graph.resetAliases();
            this.updateValue();
            this.focusCurrentVariable();
        }
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

    public handleToggleBookmarkDecorating() {
        this.setState({
            activateBookmarkDecorating: !this.state.activateBookmarkDecorating,
        });
        this.decorateBookmarks();
    }

    public handleToggleCommentDecorating() {
        this.setState({
            activateCommentDecorating: !this.state.activateCommentDecorating,
        });
        this.decorateComments();
    }

    public handleToggleTargetTreeHover() {
        this.setState({
            activateTargetTreeHover: !this.state.activateTargetTreeHover,
        });
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

    public handleKeypressNextTcphQuery() {
        this.props.nextTcphQuery();
    }

    public handleKeypressPrevTcphQuery() {
        this.props.prevTcphQuery();
    }

    public handleKeypressDisplayKeybindModal() {
        this.props.displayKeybindModal();
    }

    //--------------------------------------------------
    //-----Helper-----
    //--------------------------------------------------

    private updateValue() {
        let query = this.graph.print();
        if (query !== this.value) this.value = query;
        if (this.editor) this.editor.setValue(this.value);
        this.decorateComments();
        this.decorateBookmarks();
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
        if (current) {
            let range = current.getRange();
            let position = range.getStartPosition();
            this.editor!.setPosition(position);
            this.editor!.revealRangeInCenterIfOutsideViewport(range);
            this.updateInputAt(position);
        } else this.updatePosition(this.editor!.getPosition()!);
    }

    private revealBookmark() {
        if (this.editor && this.graph.getBookmark())
            this.editor.revealPositionInCenterIfOutsideViewport(new monaco.Position(this.graph.getBookmark()!, 0));
    }

    //--------------------------------------------------
    //-----Decoration-----
    //--------------------------------------------------

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    private updateDecorations() {
        if (this.editor !== null)
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
                ...this.bookmarkDecorations,
                ...this.commentDecorations,
            ]);
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
     * setBookmarkDecoration:
     *
     */
    private setBookmarkDecoration(line: number) {
        this.bookmarkDecorations.push({
            range: new monaco.Range(line, 0, line, 0),
            options: {
                isWholeLine: true,
                className: 'contentBookmark',
                glyphMarginClassName: 'glyphBookmark',
            },
        });
    }

    /**
     * decorateBookmarks:
     *
     */
    private decorateBookmarks() {
        this.bookmarkDecorations = [];
        if (this.state.activateBookmarkDecorating && this.graph.getBookmark())
            this.setBookmarkDecoration(this.graph.getBookmark()!);
        this.updateDecorations();
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
        if (this.state.activateCommentDecorating) this.graph.getComments().forEach((c) => this.setCommentDecoration(c));
        this.updateDecorations();
    }

    //--------------------------------------------------
    //-----Language features-----
    //--------------------------------------------------

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

    public getCommentHover(position: monaco.Position) {
        if (!this.state.activateCommentDecorating) return null;
        let hover: monaco.languages.Hover | null = null;
        this.graph.getComments().forEach((c) => {
            if (c.range.containsPosition(position))
                hover = {
                    range: c.range,
                    contents: [{ value: c.text }, { value: '![monaco-img-preview](example.png)', isTrusted: true }],
                };
        });
        return hover;
    }

    public getTargetTreeHover(position: monaco.Position) {
        if (!this.state.activateTargetTreeHover) return null;
        let hover: monaco.languages.Hover | null = null;
        let node = this.graph.getNodeAt(position);
        let tree = this.graph.getTargetTree(node);
        if (node && tree)
            hover = {
                range: node.getRange(),
                contents: [
                    {
                        value:
                            '**' +
                            node.getOuterContext().getName().toUpperCase() +
                            ' // ' +
                            node.getName().toUpperCase() +
                            '**',
                    },
                    { value: '```html\n' + tree + '\n```' },
                ],
            };
        return hover;
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
}

export default Editor;
