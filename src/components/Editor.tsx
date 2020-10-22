import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph, { comment } from '../content/Graph'; // eslint-disable-line
import { treeData } from '../content/tree/TargetTree';
import './Editor.css';

interface IEditorProps {
    language: string;
    graph: Graph;
    nextSelectionQuery: () => void;
    prevSelectionQuery: () => void;
    focusStatusInput_Comment: (input: string) => void;
    focusStatusInput_Rename: (input: string) => void;
    focusStatusInput_Search: () => void;
    updateStatusInput: (input: string, position: { line: number; column: number }) => void;
    toggleButton: () => void;
    displayInfoModal: () => void;
    buildInfoModal: (data: string[]) => void;
    displayKeybindModal: () => void;
    displayTargetTreeModal: () => void;
    buildTargetTreeModal: (data: treeData | null) => void;
    closeModals: () => void;
}

interface IEditorState {
    activateNodeHighlighting: boolean;
    activateCursorDecorating: boolean;
    activateVariableDecorating: boolean;
    activateChildDecorating: boolean;
    activateParentDecorating: boolean;
    activateBookmarkDecorating: boolean;
    activateCommentDecorating: boolean;
    activateTargetTreeHover: boolean;
}

/**
 * Editor:
 * Interactive Editor for the Umbra-IR language
 */
class Editor extends React.Component<IEditorProps, IEditorState> {
    private container: HTMLDivElement | null = null;
    private editor: monaco.editor.IStandaloneCodeEditor | null = null;
    private ctxKey: monaco.editor.IContextKey<boolean> | null = null;
    private graph: Graph;
    private value: string;
    private lastPosition: monaco.Position = new monaco.Position(1, 1);
    private grid: number = 1;
    private maxAncestorDepth: number = 3;
    private decorations: string[] = [];
    private cursorDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private bookmarkDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private commentDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.state = {
            activateNodeHighlighting: true,
            activateCursorDecorating: true,
            activateVariableDecorating: true,
            activateChildDecorating: true,
            activateParentDecorating: true,
            activateBookmarkDecorating: true,
            activateCommentDecorating: true,
            activateTargetTreeHover: true,
        };
        this.graph = this.props.graph;
        this.value = this.graph.print();
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressJumpRight = this.handleKeypressJumpRight.bind(this);
        this.handleKeypressJumpLeft = this.handleKeypressJumpLeft.bind(this);
        this.handleKeypressJumpStart = this.handleKeypressJumpStart.bind(this);
        this.handleKeypressJumpEnd = this.handleKeypressJumpEnd.bind(this);
        this.handleKeypressJumpNextTarget = this.handleKeypressJumpNextTarget.bind(this);
        this.handleKeypressJumpPrevTarget = this.handleKeypressJumpPrevTarget.bind(this);
        this.handleKeypressJumpNextBlock = this.handleKeypressJumpNextBlock.bind(this);
        this.handleKeypressJumpPrevBlock = this.handleKeypressJumpPrevBlock.bind(this);
        this.handleKeypressJumpBack = this.handleKeypressJumpBack.bind(this);
        this.handleKeypressHoverChild = this.handleKeypressHoverChild.bind(this);
        this.handleKeypressChild = this.handleKeypressChild.bind(this);
        this.handleKeypressHoverParent = this.handleKeypressHoverParent.bind(this);
        this.handleKeypressParent = this.handleKeypressParent.bind(this);
        this.handleKeypressToInput_Comment = this.handleKeypressToInput_Comment.bind(this);
        this.handleKeypressToInput_Rename = this.handleKeypressToInput_Rename.bind(this);
        this.handleKeypressToInput_Search = this.handleKeypressToInput_Search.bind(this);
        this.handleKeypressSearch = this.handleKeypressSearch.bind(this);
        this.handleKeypressNextOccurrence = this.handleKeypressNextOccurrence.bind(this);
        this.handleKeypressPrevOccurrence = this.handleKeypressPrevOccurrence.bind(this);
        this.handleKeypressAddBookmark = this.handleKeypressAddBookmark.bind(this);
        this.handleKeypressRemoveBookmark = this.handleKeypressRemoveBookmark.bind(this);
        this.handleKeypressRevealBookmark = this.handleKeypressRevealBookmark.bind(this);
        this.handleKeypressComment = this.handleKeypressComment.bind(this);
        this.handleKeypressRemoveComment = this.handleKeypressRemoveComment.bind(this);
        this.handleKeypressResetComments = this.handleKeypressResetComments.bind(this);
        this.handleKeypressRevealNextComment = this.handleKeypressRevealNextComment.bind(this);
        this.handleKeypressRevealPrevComment = this.handleKeypressRevealPrevComment.bind(this);
        this.handleKeypressRename = this.handleKeypressRename.bind(this);
        this.handleKeypressUndoRename = this.handleKeypressUndoRename.bind(this);
        this.handleKeypressResetNames = this.handleKeypressResetNames.bind(this);
        this.handleKeypressToggleNodeHighlighting = this.handleKeypressToggleNodeHighlighting.bind(this);
        this.handleKeypressToggleCursorDecorating = this.handleKeypressToggleCursorDecorating.bind(this);
        this.handleKeypressToggleVariableDecorating = this.handleKeypressToggleVariableDecorating.bind(this);
        this.handleKeypressToggleChildDecorating = this.handleKeypressToggleChildDecorating.bind(this);
        this.handleKeypressToggleParentDecorating = this.handleKeypressToggleParentDecorating.bind(this);
        this.handleKeypressToggleBookmarkDecorating = this.handleKeypressToggleBookmarkDecorating.bind(this);
        this.handleKeypressToggleCommentDecorating = this.handleKeypressToggleCommentDecorating.bind(this);
        this.handleKeypressToggleTargetTreeHover = this.handleKeypressToggleTargetTreeHover.bind(this);
        this.handleKeypressFoldAll = this.handleKeypressFoldAll.bind(this);
        this.handleKeypressFoldAllBlocks = this.handleKeypressFoldAllBlocks.bind(this);
        this.handleKeypressUnfoldAll = this.handleKeypressUnfoldAll.bind(this);
        this.handleKeypressNextSelectionQuery = this.handleKeypressNextSelectionQuery.bind(this);
        this.handleKeypressPrevSelectionQuery = this.handleKeypressPrevSelectionQuery.bind(this);
        this.handleKeypressDisplayInfoModal = this.handleKeypressDisplayInfoModal.bind(this);
        this.handleKeypressDisplayKeybindModal = this.handleKeypressDisplayKeybindModal.bind(this);
        this.handleKeypressDisplayTargetTreeModal = this.handleKeypressDisplayTargetTreeModal.bind(this);
        this.handleKeypressRevealCursor = this.handleKeypressRevealCursor.bind(this);
        this.handleKeypressToggleKeybinds = this.handleKeypressToggleKeybinds.bind(this);
    }

    public getInstance() {
        return this.editor!;
    }

    render() {
        console.log('EDITOR RENDERING...');
        console.log(this.graph);
        return <div className="editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }} />;
    }

    //--------------------------------------------------
    //-----React Lifecycle-----
    //--------------------------------------------------

    public componentDidMount() {
        if (this.container) {
            this.editor = monaco.editor.create(this.container, {
                language: this.props.language,
                value: this.value,
                lineNumbers: 'on',
                automaticLayout: true,
                roundedSelection: false,
                scrollBeyondLastLine: true,
                minimap: { enabled: true, renderCharacters: false },
                autoIndent: 'none',
                readOnly: true,
                glyphMargin: true,
            });
            this.ctxKey = this.editor.createContextKey('condition', true);
            this.editor.onMouseDown(this.handleMouseclick);
            this.editor.addCommand(monaco.KeyCode.LeftArrow, this.handleKeypressLeft, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.LeftArrow,
                this.handleKeypressHoverChild,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_H, this.handleKeypressLeft, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_H,
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
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_J, this.handleKeypressChild, 'condition');
            this.editor.addCommand(monaco.KeyCode.UpArrow, this.handleKeypressUp, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.UpArrow,
                this.handleKeypressParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_K, this.handleKeypressUp, 'condition');
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_K, this.handleKeypressParent, 'condition');
            this.editor.addCommand(monaco.KeyCode.RightArrow, this.handleKeypressRight, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.RightArrow,
                this.handleKeypressHoverParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_L, this.handleKeypressRight, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_L,
                this.handleKeypressHoverParent,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_M, this.handleKeypressJumpRight, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_M,
                this.handleKeypressJumpLeft,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_V, this.handleKeypressJumpStart, 'condition');
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_V, this.handleKeypressJumpEnd, 'condition');
            this.editor.addCommand(monaco.KeyCode.KEY_T, this.handleKeypressJumpNextTarget, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_T,
                this.handleKeypressJumpPrevTarget,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_G, this.handleKeypressJumpNextBlock, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_G,
                this.handleKeypressJumpPrevBlock,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_U, this.handleKeypressJumpBack, 'condition');
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
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.KEY_Q, this.handleKeypressNextSelectionQuery, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_Q,
                this.handleKeypressPrevSelectionQuery,
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
                id: 'revealBookmark',
                label: 'Reveal Bookmark',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_B],
                contextMenuGroupId: '1_bookmark',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealBookmark,
            });
            this.editor.addAction({
                id: 'removeBookmark',
                label: 'Remove Bookmark',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_B],
                contextMenuGroupId: '1_bookmark',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveBookmark,
            });
            this.editor.addAction({
                id: 'addComment',
                label: 'Add Comment',
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
                id: 'revealNextComment',
                label: 'Reveal Next Comment',
                keybindings: [monaco.KeyCode.KEY_X],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealNextComment,
            });
            this.editor.addAction({
                id: 'revealPrevComment',
                label: 'Reveal Previous Comment',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_X],
                contextMenuGroupId: '2_comment',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealPrevComment,
            });
            this.editor.addAction({
                id: 'renameNode',
                label: 'Rename Node',
                keybindings: [monaco.KeyCode.KEY_R],
                contextMenuGroupId: '3_alias',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Rename,
            });
            this.editor.addAction({
                id: 'unnameNode',
                label: 'Unname Node',
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
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_F],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAll,
            });
            this.editor.addAction({
                id: 'foldBlocks',
                label: 'Fold Blocks',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_F],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAllBlocks,
            });
            this.editor.addAction({
                id: 'unfoldAll',
                label: 'Unfold All',
                keybindings: [monaco.KeyCode.KEY_F],
                contextMenuGroupId: '4_folding',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressUnfoldAll,
            });
            this.editor.addAction({
                id: 'toggleNodeHighlighting',
                label: 'Toggle Node Highlighting',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_1],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleNodeHighlighting,
            });
            this.editor.addAction({
                id: 'toggleCursorDecorating',
                label: 'Toggle Cursor Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_2],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleCursorDecorating,
            });
            this.editor.addAction({
                id: 'toggleVariableDecorating',
                label: 'Toggle Variable Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_3],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleVariableDecorating,
            });
            this.editor.addAction({
                id: 'toggleChildDecorating',
                label: 'Toggle Child Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_4],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleChildDecorating,
            });
            this.editor.addAction({
                id: 'toggleParentDecorating',
                label: 'Toggle Parent Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_5],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleParentDecorating,
            });
            this.editor.addAction({
                id: 'toggleBookmarkDisplay',
                label: 'Toggle Bookmark Display',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_6],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 6,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleBookmarkDecorating,
            });
            this.editor.addAction({
                id: 'toggleCommentDisplay',
                label: 'Toggle Comment Display',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_7],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 7,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleCommentDecorating,
            });
            this.editor.addAction({
                id: 'toggleTargetTreeHover',
                label: 'Toggle Target Tree Hover',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_8],
                contextMenuGroupId: '5_features',
                contextMenuOrder: 8,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleTargetTreeHover,
            });
            this.editor.addAction({
                id: 'revealCursor',
                label: 'Reveal Cursor',
                keybindings: [monaco.KeyCode.Space],
                //contextMenuGroupId: '6_other',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealCursor,
            });
            this.editor.addAction({
                id: 'displayTargetTreeModal',
                label: 'Show Target Tree',
                keybindings: [monaco.KeyCode.KEY_S],
                contextMenuGroupId: '6_other',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayTargetTreeModal,
            });
            this.editor.addAction({
                id: 'displayInfoModal',
                label: 'Show Current Node Info',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_S],
                contextMenuGroupId: '6_other',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayInfoModal,
            });
            this.editor.addAction({
                id: 'displayKeybindModal',
                label: 'Show Keyboard Shortcuts',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S],
                contextMenuGroupId: '6_other',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayKeybindModal,
            });
            this.editor.addAction({
                id: 'toggleKeybinds',
                label: 'Toggle All Keybinds',
                keybindings: [monaco.KeyCode.Tab],
                contextMenuGroupId: '6_other',
                contextMenuOrder: 5,
                run: this.handleKeypressToggleKeybinds,
            });
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
        this.updateValue();
        this.resetPosition();
        this.revealBookmark();
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            return true;
        }
        return false;
    }

    public componentDidUpdate() {
        this.updateValue();
        this.resetPosition();
        this.revealBookmark();
        console.log('EDITOR UPDATED');
    }

    public componentWillUnmount() {
        if (this.editor) this.editor.dispose();
    }

    //--------------------------------------------------
    //-----Basic Navigation-----
    //--------------------------------------------------

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        let position = event.target.position;
        if (position && this.ctxKey && this.ctxKey.get()) {
            this.setGrid(position);
            this.updatePosition(position);
        }
    }

    public handleKeypressRevealCursor() {
        this.resetPosition();
    }

    public handleKeypressLeft() {
        this.decreaseGrid();
        this.updatePosition(this.lastPosition.with(undefined, this.lastPosition.column - 1));
    }

    public handleKeypressDown() {
        this.updatePosition(this.lastPosition.with(this.lastPosition.lineNumber + 1, undefined));
    }

    public handleKeypressUp() {
        this.updatePosition(this.lastPosition.with(this.lastPosition.lineNumber - 1, undefined));
    }

    public handleKeypressRight() {
        this.increaseGrid();
        this.updatePosition(this.lastPosition.with(undefined, this.lastPosition.column + 1));
    }

    public handleKeypressJumpRight() {
        this.updatePosition(this.lastPosition.with(undefined, this.lastPosition.column + 15));
    }

    public handleKeypressJumpLeft() {
        this.updatePosition(this.lastPosition.with(undefined, this.lastPosition.column - 15));
    }

    public handleKeypressJumpStart() {
        this.updatePosition(this.graph.getStartPosition());
    }

    public handleKeypressJumpEnd() {
        this.updatePosition(this.graph.getEndPosition());
    }

    //--------------------------------------------------
    //-----Node Jumping-----
    //--------------------------------------------------

    public handleKeypressNextOccurrence() {
        this.graph.setCurrentNextOccurrence();
        this.updatePosition();
    }

    public handleKeypressPrevOccurrence() {
        this.graph.setCurrentPrevOccurrence();
        this.updatePosition();
    }

    public handleKeypressHoverChild() {
        let child = this.graph.getNextChild();
        if (child) this.decorateVariable(child.getRange().getStartPosition());
    }

    public handleKeypressChild() {
        this.graph.setCurrentChild();
        this.updatePosition();
    }

    public handleKeypressHoverParent() {
        let parent = this.graph.getNextParent();
        if (parent) this.decorateVariable(parent.getRange().getStartPosition());
    }

    public handleKeypressParent() {
        this.graph.setCurrentParent();
        this.updatePosition();
    }

    public handleKeypressJumpNextTarget() {
        let target = this.graph.getNextTargetAt(this.lastPosition);
        if (target) {
            this.graph.setCurrent(target);
            this.updatePosition();
        }
    }

    public handleKeypressJumpPrevTarget() {
        let target = this.graph.getPrevTargetAt(this.lastPosition);
        if (target) {
            this.graph.setCurrent(target);
            this.updatePosition();
        }
    }

    public handleKeypressJumpNextBlock() {
        let label = this.graph.getNextLabelAt(this.lastPosition);
        if (label) {
            this.graph.setCurrent(label);
            this.updatePosition();
        }
    }

    public handleKeypressJumpPrevBlock() {
        let label = this.graph.getPrevLabelAt(this.lastPosition);
        if (label) {
            this.graph.setCurrent(label);
            this.updatePosition();
        }
    }

    public handleKeypressJumpBack() {
        this.graph.setCurrentToPrevious();
        this.updatePosition();
    }

    //--------------------------------------------------
    //-----Input-----
    //--------------------------------------------------

    public handleKeypressSearch(input: string) {
        this.graph.searchCurrent(input);
        this.updatePosition();
    }

    public handleKeypressToInput_Search() {
        this.props.focusStatusInput_Search();
    }

    public handleKeypressToInput_Comment() {
        let node = this.graph.getNodeAt(this.lastPosition);
        let comment = this.graph.getOuterCommentAt(this.lastPosition);
        this.props.focusStatusInput_Comment(comment && comment.node === node ? comment.text : '');
    }

    public handleKeypressToInput_Rename() {
        let tarvar = this.graph.getTarVarAt(this.lastPosition);
        if (tarvar) this.props.focusStatusInput_Rename(tarvar && tarvar.hasAlias() ? tarvar.getAlias() : '');
        else console.log('ERROR: NODE CANNOT RENAME');
    }

    //--------------------------------------------------
    //-----Bookmark-----
    //--------------------------------------------------

    public handleKeypressAddBookmark() {
        this.graph.addBookmarkAt(this.lastPosition.lineNumber);
        this.decorateBookmarks();
    }

    public handleKeypressRemoveBookmark() {
        this.graph.removeBookmark();
        this.decorateBookmarks();
    }

    private revealBookmark() {
        let bookmark = this.graph.getBookmark();
        if (bookmark) this.updatePosition(new monaco.Position(bookmark, 0));
    }

    public handleKeypressRevealBookmark() {
        this.revealBookmark();
        this.resetPosition();
    }

    //--------------------------------------------------
    //-----Comments-----
    //--------------------------------------------------

    public handleKeypressComment(input: string) {
        this.graph.addCommentAt(input, this.lastPosition);
        this.decorateComments();
        this.resetPosition();
    }

    public handleKeypressRemoveComment() {
        this.graph.removeCommentAt(this.lastPosition);
        this.decorateComments();
        this.resetPosition();
    }

    public handleKeypressResetComments() {
        this.graph.resetComments();
        this.decorateComments();
        this.resetPosition();
    }

    public handleKeypressRevealNextComment() {
        let comment = this.graph.getNextCommentAt(this.lastPosition);
        if (comment) this.updatePosition(comment.range.getStartPosition());
        else this.resetPosition();
    }

    public handleKeypressRevealPrevComment() {
        let comment = this.graph.getPrevCommentAt(this.lastPosition);
        if (comment) this.updatePosition(comment.range.getStartPosition());
        else this.resetPosition();
    }

    //--------------------------------------------------
    //-----Renaming-----
    //--------------------------------------------------

    public handleKeypressRename(input: string) {
        if (input) {
            let tarvar = this.graph.getTarVarAt(this.lastPosition);
            if (tarvar && input !== tarvar.getName()) {
                if (input !== tarvar.getAlias()) {
                    this.graph.setAliasAt(input, this.lastPosition);
                    this.updateValue();
                }
                this.resetPosition();
                return;
            }
        }
        this.handleKeypressUndoRename();
    }

    public handleKeypressUndoRename() {
        let tarvar = this.graph.getTarVarAt(this.lastPosition);
        if (tarvar && this.graph.resetAliasAt(this.lastPosition)) {
            this.updateValue();
            this.resetPosition();
        }
    }

    public handleKeypressResetNames() {
        if (this.graph.getAliases().length) {
            this.graph.resetAliases();
            this.updateValue();
            this.resetPosition();
        }
    }

    //--------------------------------------------------
    //-----Feature Toggle-----
    //--------------------------------------------------

    public handleKeypressToggleKeybinds() {
        this.props.toggleButton();
        if (this.ctxKey) {
            this.ctxKey.set(!this.ctxKey.get());
            if (this.editor && this.ctxKey.get()) {
                this.editor.focus();
                let position = this.editor.getPosition();
                if (position) {
                    this.setGrid(position);
                    this.updatePosition(position);
                }
            }
        }
    }

    public handleKeypressToggleNodeHighlighting() {
        this.setState({
            activateNodeHighlighting: !this.state.activateNodeHighlighting,
        });
    }

    public handleKeypressToggleCursorDecorating() {
        this.setState({
            activateCursorDecorating: !this.state.activateCursorDecorating,
        });
        this.cursorDecorations = [];
        this.decorateCursor();
    }

    public handleKeypressToggleVariableDecorating() {
        this.setState({
            activateVariableDecorating: !this.state.activateVariableDecorating,
        });
        this.variableDecorations = [];
        this.updateDecorations();
    }

    public handleKeypressToggleChildDecorating() {
        this.setState({
            activateChildDecorating: !this.state.activateChildDecorating,
        });
        this.updatePosition();
    }

    public handleKeypressToggleParentDecorating() {
        this.setState({
            activateParentDecorating: !this.state.activateParentDecorating,
        });
        this.updatePosition();
    }

    public handleKeypressToggleBookmarkDecorating() {
        this.setState({
            activateBookmarkDecorating: !this.state.activateBookmarkDecorating,
        });
        this.decorateBookmarks();
    }

    public handleKeypressToggleCommentDecorating() {
        this.setState({
            activateCommentDecorating: !this.state.activateCommentDecorating,
        });
        this.decorateComments();
    }

    public handleKeypressToggleTargetTreeHover() {
        this.setState({
            activateTargetTreeHover: !this.state.activateTargetTreeHover,
        });
    }

    //--------------------------------------------------
    //-----Folding-----
    //--------------------------------------------------

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
    //-----Query Selection-----
    //--------------------------------------------------

    public handleKeypressNextSelectionQuery() {
        this.props.nextSelectionQuery();
    }

    public handleKeypressPrevSelectionQuery() {
        this.props.prevSelectionQuery();
    }

    //--------------------------------------------------
    //-----Modals-----
    //--------------------------------------------------

    public handleKeypressDisplayInfoModal() {
        let info = this.graph.getInfoAt(this.lastPosition);
        if (info) {
            this.props.buildInfoModal(info);
            this.props.displayInfoModal();
        }
    }

    public handleKeypressDisplayKeybindModal() {
        this.props.displayKeybindModal();
    }

    public handleKeypressDisplayTargetTreeModal() {
        let tree = this.graph.getTargetTreeDataAt(this.lastPosition);
        if (tree) {
            this.props.buildTargetTreeModal(tree);
            this.props.displayTargetTreeModal();
        }
    }

    //--------------------------------------------------
    //-----General-----
    //--------------------------------------------------

    /**
     * updateValue:
     * Handle Value change
     */
    private updateValue() {
        let query = this.graph.print();
        if (query !== this.value) this.value = query;
        if (this.editor) this.editor.setValue(this.value);
        this.decorateComments();
        this.decorateBookmarks();
    }

    /**
     * updatePosition:
     * Handle Position change
     */
    private updatePosition(position?: monaco.Position) {
        let current = this.graph.getCurrent();
        if (!position && current) {
            position = current.getRange().getStartPosition();
            this.setGrid(position);
        } else {
            if (!position) position = this.lastPosition;
            position = this.validate(position);
            current = this.graph.getNodeAt(position);
            this.graph.setCurrent(current);
        }
        this.lastPosition = position;
        this.props.updateStatusInput(
            (current ? current.getAlias() : '') + this.graph.getCommentStringAt(this.lastPosition),
            { line: position.lineNumber, column: position.column },
        );
        this.props.closeModals();
        this.editor!.setPosition(position);
        this.editor!.revealPositionInCenterIfOutsideViewport(position);
        this.decorateCursor();
        this.decorateTree(position);
        //console.log(this.lastPosition);
        //console.log(this.grid);
        console.log(current);
    }

    private resetPosition() {
        this.setGrid(this.lastPosition);
        this.updatePosition(this.lastPosition);
    }

    //--------------------------------------------------
    //-----Grid-----
    //--------------------------------------------------

    private setGrid(position: monaco.Position) {
        let max = this.getLineLength(position.lineNumber);
        this.grid = max > position.column ? position.column : max;
    }

    private decreaseGrid() {
        let max = this.getLineLength(this.lastPosition.lineNumber);
        this.grid = max > this.grid ? this.grid : max;
        this.grid = this.grid > 1 ? this.grid - 1 : 1;
    }

    private increaseGrid() {
        let max = this.getLineLength(this.lastPosition.lineNumber);
        this.grid = max > this.grid ? this.grid + 1 : max;
    }

    private validate(position: monaco.Position) {
        let maxL = this.graph.getEndPosition().lineNumber;
        let maxC = this.getLineLength(position.lineNumber);
        let lineNumber = maxL < position.lineNumber ? maxL : position.lineNumber > 0 ? position.lineNumber : 1;
        let column =
            maxC >= this.grid && this.grid > position.column
                ? this.grid
                : position.column > maxC || this.grid > maxC
                ? maxC
                : position.column > 0
                ? position.column
                : 1;
        return new monaco.Position(lineNumber, column);
    }

    private getLineLength(line: number) {
        if (line < 1) return 1;
        let lines = this.value.split('\n');
        return lines[line - 1] ? lines[line - 1].length + 1 : 1;
    }

    //--------------------------------------------------
    //-----Manage Decorations-----
    //--------------------------------------------------

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    private updateDecorations() {
        if (this.editor !== null)
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.cursorDecorations,
                ...this.variableDecorations,
                ...this.treeDecorations,
                ...this.bookmarkDecorations,
                ...this.commentDecorations,
            ]);
    }

    public decorateCursor() {
        this.cursorDecorations = [];
        if (this.state.activateCursorDecorating) {
            this.cursorDecorations = [
                {
                    range: new monaco.Range(this.lastPosition.lineNumber, 0, this.lastPosition.lineNumber, 0),
                    options: {
                        isWholeLine: true,
                        className: 'contentCursor',
                        glyphMarginClassName: 'glyphCursor',
                        minimap: {
                            color: { id: 'cursor' },
                            position: 2,
                        },
                        zIndex: 7,
                    },
                },
            ];
        }
        this.updateDecorations();
    }

    private getVariableDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = this.graph.getVariableSiblings(variable);
        let ranges = vars.map((v) => v.getRange());
        return ranges;
    }

    private setVariableDecoration(range: monaco.Range) {
        this.variableDecorations.push({
            range,
            options: {
                isWholeLine: false,
                className: 'contentVariable',
                glyphMarginClassName: 'glyphVariable',
                minimap: {
                    color: { id: 'variable' },
                    position: 2,
                },
                zIndex: 6,
            },
        });
    }

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

    private getChildDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = variable ? this.graph.getChildTree(variable) : [];
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => decorations.push({ range: v.variable.getRange(), depth: v.depth }));
        return decorations;
    }

    private getParentDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = variable ? this.graph.getParentTree(variable) : [];
        let decorations: { range: monaco.Range; depth: number }[] = [];
        vars.forEach((v) => decorations.push({ range: v.variable.getRange(), depth: v.depth }));
        return decorations;
    }

    private setTreeDecoration(leaf: { range: monaco.Range; depth: number }) {
        if (leaf.depth === 0) {
            this.treeDecorations.push({
                range: leaf.range,
                options: {
                    isWholeLine: false,
                    className: 'contentSelect',
                    glyphMarginClassName: 'glyphSelect',
                    minimap: {
                        color: { id: 'select' },
                        position: 1,
                    },
                    zIndex: 5,
                },
            });
        } else if (Math.abs(leaf.depth) <= this.maxAncestorDepth)
            if (leaf.depth < 0) {
                if (leaf.depth < -4) leaf.depth = -4;
                let className = 'contentChild' + leaf.depth;
                this.treeDecorations.push({
                    range: leaf.range,
                    options: {
                        isWholeLine: false,
                        className,
                        glyphMarginClassName: 'glyphChild' + leaf.depth,
                        minimap: {
                            color: { id: 'child' },
                            position: 1,
                        },
                        zIndex: 3,
                    },
                });
            } else {
                if (leaf.depth > 4) leaf.depth = 4;
                let className = 'contentParent' + leaf.depth;
                this.treeDecorations.push({
                    range: leaf.range,
                    options: {
                        isWholeLine: false,
                        className,
                        glyphMarginClassName: 'glyphParent' + leaf.depth,
                        minimap: {
                            color: { id: 'parent' },
                            position: 1,
                        },
                        zIndex: 4,
                    },
                });
            }
    }

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

    private setBookmarkDecoration(line: number) {
        this.bookmarkDecorations.push({
            range: new monaco.Range(line, 0, line, 0),
            options: {
                isWholeLine: true,
                className: 'contentBookmark',
                glyphMarginClassName: 'glyphBookmark',
                minimap: {
                    color: { id: 'bookmark' },
                    position: 2,
                },
                zIndex: 1,
            },
        });
    }

    private decorateBookmarks() {
        this.bookmarkDecorations = [];
        if (this.state.activateBookmarkDecorating && this.graph.getBookmark())
            this.setBookmarkDecoration(this.graph.getBookmark()!);
        this.updateDecorations();
    }

    private setCommentDecoration(comment: comment) {
        this.commentDecorations.push({
            range: comment.range,
            options: {
                isWholeLine: comment.isWholeLine,
                className: 'contentComment' + comment.node?.constructor.name,
                glyphMarginClassName: 'glyphComment',
                minimap: {
                    color: { id: 'comment' },
                    position: 1,
                },
                zIndex: 2,
            },
        });
    }

    private decorateComments() {
        this.commentDecorations = [];
        if (this.state.activateCommentDecorating) this.graph.getComments().forEach((c) => this.setCommentDecoration(c));
        this.updateDecorations();
    }

    //--------------------------------------------------
    //-----Manage Language Features-----
    //--------------------------------------------------

    private findNodeHighlights(position: monaco.Position) {
        let node = this.graph.getNodeAt(position);
        let nodes = this.graph.getRelatedNodes(node);
        let ranges = nodes.map((n) => n.getRange());
        return ranges;
    }

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
        let comment = this.graph.getOuterCommentAt(position);
        return comment
            ? {
                  range: comment.range,
                  contents: [{ value: comment.text }],
              }
            : null;
    }

    public getTargetTreeHover(position: monaco.Position) {
        if (!this.state.activateTargetTreeHover) return null;
        let node = this.graph.getNodeAt(position);
        let tree = this.graph.getTargetTreeString(node);
        return node && tree
            ? {
                  range: node.getRange(),
                  contents: [{ value: '```html\n' + tree + '\n```' }],
              }
            : null;
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
