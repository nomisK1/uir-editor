import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph, { note } from '../content/Graph'; // eslint-disable-line
import { treeData } from '../content/tree/TargetTree';
import './Editor.css';

interface IEditorProps {
    language: string;
    graph: Graph;
    nextSelectionQuery: () => void;
    prevSelectionQuery: () => void;
    focusStatusInput_Comment: (input: string) => void;
    focusStatusInput_Note: (input: string) => void;
    focusStatusInput_Rename: (input: string) => void;
    focusStatusInput_Search: () => void;
    updateStatusInput: (input: string, line: number, column: number) => void;
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
    activateNoteDecorating: boolean;
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
    private graph: Graph = this.props.graph;
    private value: string = '';
    private lastPosition: monaco.Position = new monaco.Position(1, 1);
    private grid: number = 1;
    private maxAncestorDepth: number = 3;
    private decorations: string[] = [];
    private cursorDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private bookmarkDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private noteDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.state = {
            activateNodeHighlighting: true,
            activateCursorDecorating: true,
            activateVariableDecorating: true,
            activateChildDecorating: true,
            activateParentDecorating: true,
            activateBookmarkDecorating: true,
            activateNoteDecorating: true,
            activateTargetTreeHover: true,
        };
        S.getInstance().connect(this);
        this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressRevealCursor = this.handleKeypressRevealCursor.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressHoverChild = this.handleKeypressHoverChild.bind(this);
        this.handleKeypressChild = this.handleKeypressChild.bind(this);
        this.handleKeypressHoverParent = this.handleKeypressHoverParent.bind(this);
        this.handleKeypressParent = this.handleKeypressParent.bind(this);
        this.handleKeypressJumpLeft = this.handleKeypressJumpLeft.bind(this);
        this.handleKeypressJumpRight = this.handleKeypressJumpRight.bind(this);
        this.handleKeypressJumpStart = this.handleKeypressJumpStart.bind(this);
        this.handleKeypressJumpEnd = this.handleKeypressJumpEnd.bind(this);
        this.handleKeypressNextOccurrence = this.handleKeypressNextOccurrence.bind(this);
        this.handleKeypressPrevOccurrence = this.handleKeypressPrevOccurrence.bind(this);
        this.handleKeypressJumpNextTarget = this.handleKeypressJumpNextTarget.bind(this);
        this.handleKeypressJumpPrevTarget = this.handleKeypressJumpPrevTarget.bind(this);
        this.handleKeypressJumpNextBlock = this.handleKeypressJumpNextBlock.bind(this);
        this.handleKeypressJumpPrevBlock = this.handleKeypressJumpPrevBlock.bind(this);
        this.handleKeypressGoBack = this.handleKeypressGoBack.bind(this);
        this.handleKeypressToInput_Comment = this.handleKeypressToInput_Comment.bind(this);
        this.handleKeypressToInput_Note = this.handleKeypressToInput_Note.bind(this);
        this.handleKeypressToInput_Rename = this.handleKeypressToInput_Rename.bind(this);
        this.handleKeypressToInput_Search = this.handleKeypressToInput_Search.bind(this);
        this.handleKeypressSearch = this.handleKeypressSearch.bind(this);
        this.handleKeypressNextSelectionQuery = this.handleKeypressNextSelectionQuery.bind(this);
        this.handleKeypressPrevSelectionQuery = this.handleKeypressPrevSelectionQuery.bind(this);
        this.handleKeypressAddBookmark = this.handleKeypressAddBookmark.bind(this);
        this.handleKeypressRemoveBookmark = this.handleKeypressRemoveBookmark.bind(this);
        this.handleKeypressRevealBookmark = this.handleKeypressRevealBookmark.bind(this);
        this.handleKeypressComment = this.handleKeypressComment.bind(this);
        this.handleKeypressRemoveComment = this.handleKeypressRemoveComment.bind(this);
        this.handleKeypressResetComments = this.handleKeypressResetComments.bind(this);
        this.handleKeypressNote = this.handleKeypressNote.bind(this);
        this.handleKeypressRemoveNote = this.handleKeypressRemoveNote.bind(this);
        this.handleKeypressResetNotes = this.handleKeypressResetNotes.bind(this);
        this.handleKeypressRevealNextNote = this.handleKeypressRevealNextNote.bind(this);
        this.handleKeypressRevealPrevNote = this.handleKeypressRevealPrevNote.bind(this);
        this.handleKeypressRename = this.handleKeypressRename.bind(this);
        this.handleKeypressUndoRename = this.handleKeypressUndoRename.bind(this);
        this.handleKeypressResetNames = this.handleKeypressResetNames.bind(this);
        this.handleKeypressFoldAll = this.handleKeypressFoldAll.bind(this);
        this.handleKeypressFoldAllBlocks = this.handleKeypressFoldAllBlocks.bind(this);
        this.handleKeypressUnfoldAll = this.handleKeypressUnfoldAll.bind(this);
        this.handleKeypressDisplayInfoModal = this.handleKeypressDisplayInfoModal.bind(this);
        this.handleKeypressDisplayKeybindModal = this.handleKeypressDisplayKeybindModal.bind(this);
        this.handleKeypressDisplayTargetTreeModal = this.handleKeypressDisplayTargetTreeModal.bind(this);
        this.handleKeypressToggleNodeHighlighting = this.handleKeypressToggleNodeHighlighting.bind(this);
        this.handleKeypressToggleCursorDecorating = this.handleKeypressToggleCursorDecorating.bind(this);
        this.handleKeypressToggleVariableDecorating = this.handleKeypressToggleVariableDecorating.bind(this);
        this.handleKeypressToggleChildDecorating = this.handleKeypressToggleChildDecorating.bind(this);
        this.handleKeypressToggleParentDecorating = this.handleKeypressToggleParentDecorating.bind(this);
        this.handleKeypressToggleBookmarkDecorating = this.handleKeypressToggleBookmarkDecorating.bind(this);
        this.handleKeypressToggleNoteDecorating = this.handleKeypressToggleNoteDecorating.bind(this);
        this.handleKeypressToggleTargetTreeHover = this.handleKeypressToggleTargetTreeHover.bind(this);
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
            this.editor.addCommand(monaco.KeyCode.KEY_U, this.handleKeypressJumpLeft, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_U,
                this.handleKeypressJumpStart,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_I, this.handleKeypressJumpRight, 'condition');
            this.editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.KEY_I, this.handleKeypressJumpEnd, 'condition');
            this.editor.addCommand(monaco.KeyCode.Enter, this.handleKeypressNextOccurrence, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.Enter,
                this.handleKeypressPrevOccurrence,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_T, this.handleKeypressJumpNextTarget, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_T,
                this.handleKeypressJumpPrevTarget,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_R, this.handleKeypressJumpNextBlock, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_R,
                this.handleKeypressJumpPrevBlock,
                'condition',
            );
            this.editor.addCommand(monaco.KeyCode.KEY_G, this.handleKeypressGoBack, 'condition');
            this.editor.addCommand(monaco.KeyCode.Backspace, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.US_SLASH, this.handleKeypressToInput_Search, 'condition');
            this.editor.addCommand(monaco.KeyCode.KEY_Q, this.handleKeypressNextSelectionQuery, 'condition');
            this.editor.addCommand(
                monaco.KeyMod.Shift | monaco.KeyCode.KEY_Q,
                this.handleKeypressPrevSelectionQuery,
                'condition',
            );
            this.editor.addAction({
                id: 'addComment',
                label: 'Add Comment',
                keybindings: [monaco.KeyCode.KEY_C],
                contextMenuGroupId: '1_comment',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Comment,
            });
            this.editor.addAction({
                id: 'removeComment',
                label: 'Remove Comment',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '1_comment',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveComment,
            });
            this.editor.addAction({
                id: 'resetComments',
                label: 'Reset All Comments',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_C],
                contextMenuGroupId: '1_comment',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressResetComments,
            });
            this.editor.addAction({
                id: 'addNote',
                label: 'Add Note',
                keybindings: [monaco.KeyCode.KEY_N],
                contextMenuGroupId: '2_note',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Note,
            });
            this.editor.addAction({
                id: 'removeNote',
                label: 'Remove Note',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_N],
                contextMenuGroupId: '2_note',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveNote,
            });
            this.editor.addAction({
                id: 'resetNotes',
                label: 'Reset All Notes',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_N],
                contextMenuGroupId: '2_note',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressResetNotes,
            });
            this.editor.addAction({
                id: 'revealNextNote',
                label: 'Reveal Next Note',
                keybindings: [monaco.KeyCode.KEY_M],
                contextMenuGroupId: '2_note',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealNextNote,
            });
            this.editor.addAction({
                id: 'revealPrevNote',
                label: 'Reveal Previous Note',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_M],
                contextMenuGroupId: '2_note',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealPrevNote,
            });
            this.editor.addAction({
                id: 'addBookmark',
                label: 'Add Bookmark',
                keybindings: [monaco.KeyCode.KEY_B],
                contextMenuGroupId: '3_bookmark',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressAddBookmark,
            });
            this.editor.addAction({
                id: 'revealBookmark',
                label: 'Reveal Bookmark',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_B],
                contextMenuGroupId: '3_bookmark',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealBookmark,
            });
            this.editor.addAction({
                id: 'removeBookmark',
                label: 'Remove Bookmark',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_B],
                contextMenuGroupId: '3_bookmark',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressRemoveBookmark,
            });
            this.editor.addAction({
                id: 'renameNode',
                label: 'Rename Node',
                keybindings: [monaco.KeyCode.KEY_V],
                contextMenuGroupId: '4_alias',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToInput_Rename,
            });
            this.editor.addAction({
                id: 'unnameNode',
                label: 'Unname Node',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_V],
                contextMenuGroupId: '4_alias',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressUndoRename,
            });
            this.editor.addAction({
                id: 'resetNames',
                label: 'Reset All Names',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_V],
                contextMenuGroupId: '4_alias',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressResetNames,
            });
            this.editor.addAction({
                id: 'foldAll',
                label: 'Fold All',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_F],
                contextMenuGroupId: '5_folding',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAll,
            });
            this.editor.addAction({
                id: 'foldBlocks',
                label: 'Fold Blocks',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_F],
                contextMenuGroupId: '5_folding',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressFoldAllBlocks,
            });
            this.editor.addAction({
                id: 'unfoldAll',
                label: 'Unfold All',
                keybindings: [monaco.KeyCode.KEY_F],
                contextMenuGroupId: '5_folding',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressUnfoldAll,
            });
            this.editor.addAction({
                id: 'toggleNodeHighlighting',
                label: 'Toggle Node Highlighting',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_1],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleNodeHighlighting,
            });
            this.editor.addAction({
                id: 'toggleCursorDecorating',
                label: 'Toggle Cursor Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_2],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleCursorDecorating,
            });
            this.editor.addAction({
                id: 'toggleVariableDecorating',
                label: 'Toggle Variable Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_3],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleVariableDecorating,
            });
            this.editor.addAction({
                id: 'toggleChildDecorating',
                label: 'Toggle Child Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_4],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 4,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleChildDecorating,
            });
            this.editor.addAction({
                id: 'toggleParentDecorating',
                label: 'Toggle Parent Decorating',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_5],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleParentDecorating,
            });
            this.editor.addAction({
                id: 'toggleBookmarkDisplay',
                label: 'Toggle Bookmark Display',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_6],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 6,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleBookmarkDecorating,
            });
            this.editor.addAction({
                id: 'toggleNoteDisplay',
                label: 'Toggle Note Display',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_7],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 7,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleNoteDecorating,
            });
            this.editor.addAction({
                id: 'toggleTargetTreeHover',
                label: 'Toggle Target Tree Hover',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_8],
                contextMenuGroupId: '6_features',
                contextMenuOrder: 8,
                keybindingContext: 'condition',
                run: this.handleKeypressToggleTargetTreeHover,
            });
            this.editor.addAction({
                id: 'displayTargetTreeModal',
                label: 'Show Target Tree',
                keybindings: [monaco.KeyCode.KEY_S],
                contextMenuGroupId: '8_other',
                contextMenuOrder: 1,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayTargetTreeModal,
            });
            this.editor.addAction({
                id: 'displayInfoModal',
                label: 'Show Current Node Info',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.KEY_S],
                contextMenuGroupId: '8_other',
                contextMenuOrder: 2,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayInfoModal,
            });
            this.editor.addAction({
                id: 'displayKeybindModal',
                label: 'Show Keyboard Shortcuts',
                keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S],
                contextMenuGroupId: '8_other',
                contextMenuOrder: 3,
                keybindingContext: 'condition',
                run: this.handleKeypressDisplayKeybindModal,
            });
            this.editor.addAction({
                id: 'toggleKeybinds',
                label: 'Toggle All Keybinds',
                keybindings: [monaco.KeyCode.Tab],
                contextMenuGroupId: '8_other',
                contextMenuOrder: 4,
                run: this.handleKeypressToggleKeybinds,
            });
            this.editor.addAction({
                id: 'revealCursor',
                label: 'Reveal Cursor',
                keybindings: [monaco.KeyCode.Space],
                //contextMenuGroupId: '8_other',
                contextMenuOrder: 5,
                keybindingContext: 'condition',
                run: this.handleKeypressRevealCursor,
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

    //public componentWillUnmount() {if (this.editor) this.editor.dispose();}

    //--------------------------------------------------
    //-----Value-----
    //--------------------------------------------------

    /**
     * updateValue:
     * Handle Value change
     */
    private updateValue() {
        let value = this.graph.getDisplayValue();
        if (this.editor && value !== this.value) {
            this.value = value;
            this.editor.setValue(this.value);
        }
        this.decorateNotes();
        this.decorateBookmarks();
    }

    public handleKeypressNextSelectionQuery() {
        this.props.nextSelectionQuery();
    }

    public handleKeypressPrevSelectionQuery() {
        this.props.prevSelectionQuery();
    }

    //--------------------------------------------------
    //-----Basic Navigation-----
    //--------------------------------------------------

    public handleMouseclick(event: monaco.editor.IEditorMouseEvent) {
        if (event.target.position && this.ctxKey && this.ctxKey.get()) this.setPosition(event.target.position);
    }

    public handleKeypressRevealCursor() {
        if (this.editor) this.editor.revealPositionInCenter(this.lastPosition);
    }

    public handleKeypressLeft() {
        this.setPosition(this.lastPosition.with(undefined, this.lastPosition.column - 1));
    }

    public handleKeypressDown() {
        this.setPosition(this.lastPosition.with(this.lastPosition.lineNumber + 1, undefined), true);
    }

    public handleKeypressUp() {
        this.setPosition(this.lastPosition.with(this.lastPosition.lineNumber - 1, undefined), true);
    }

    public handleKeypressRight() {
        this.setPosition(this.lastPosition.with(undefined, this.lastPosition.column + 1));
    }

    public handleKeypressJumpRight() {
        this.setPosition(this.lastPosition.with(undefined, this.lastPosition.column + 15));
    }

    public handleKeypressJumpLeft() {
        this.setPosition(this.lastPosition.with(undefined, this.lastPosition.column - 15));
    }

    public handleKeypressJumpStart() {
        this.setPosition(this.graph.getStartPosition());
    }

    public handleKeypressJumpEnd() {
        this.setPosition(this.graph.getEndPosition());
    }

    //--------------------------------------------------
    //-----Node Jumping-----
    //--------------------------------------------------

    public handleKeypressNextOccurrence() {
        if (this.graph.setCurrentNextOccurrence()) this.updatePosition();
    }

    public handleKeypressPrevOccurrence() {
        if (this.graph.setCurrentPrevOccurrence()) this.updatePosition();
    }

    public handleKeypressHoverChild() {
        let child = this.graph.getNextChild();
        if (child) this.decorateVariableAt(child.getRange().getStartPosition());
    }

    public handleKeypressChild() {
        if (this.graph.setCurrentChild()) this.updatePosition();
    }

    public handleKeypressHoverParent() {
        let parent = this.graph.getNextParent();
        if (parent) this.decorateVariableAt(parent.getRange().getStartPosition());
    }

    public handleKeypressParent() {
        if (this.graph.setCurrentParent()) this.updatePosition();
    }

    public handleKeypressJumpNextTarget() {
        if (this.graph.setCurrentNextTarget()) this.updatePosition();
    }

    public handleKeypressJumpPrevTarget() {
        if (this.graph.setCurrentPrevTarget()) this.updatePosition();
    }

    public handleKeypressJumpNextBlock() {
        if (this.graph.setCurrentNextLabel()) this.updatePosition();
    }

    public handleKeypressJumpPrevBlock() {
        if (this.graph.setCurrentPrevLabel()) this.updatePosition();
    }

    public handleKeypressGoBack() {
        if (this.graph.setCurrentBack()) this.updatePosition();
    }

    //--------------------------------------------------
    //-----Input-----
    //--------------------------------------------------

    public handleKeypressToInput_Comment() {
        let comment = this.graph.getCommentAt(this.lastPosition.lineNumber);
        this.props.focusStatusInput_Comment(comment ? comment.text : '');
    }

    public handleKeypressToInput_Note() {
        let note = this.graph.getOuterNoteAt(this.lastPosition);
        this.props.focusStatusInput_Note(note && note.node === this.graph.getCurrent() ? note.text : '');
    }

    public handleKeypressToInput_Rename() {
        let current = this.graph.getCurrent();
        if (current && current.renamable())
            this.props.focusStatusInput_Rename(current && current.hasAlias() ? current.getAlias() : '');
        else console.log('ERROR: NODE NOT RENAMABLE');
    }

    public handleKeypressToInput_Search() {
        this.props.focusStatusInput_Search();
    }

    public handleKeypressSearch(input: string) {
        if (this.graph.searchCurrent(input)) this.updatePosition();
        else this.resetPosition();
    }

    //--------------------------------------------------
    //-----Bookmark-----
    //--------------------------------------------------

    public handleKeypressAddBookmark() {
        if (this.graph.addBookmarkAt(this.lastPosition.lineNumber)) this.decorateBookmarks();
    }

    public handleKeypressRemoveBookmark() {
        if (this.graph.removeBookmark()) this.decorateBookmarks();
    }

    public handleKeypressRevealBookmark() {
        this.revealBookmark();
    }

    private revealBookmark() {
        let bookmark = this.graph.getBookmark();
        if (bookmark) this.setPosition(new monaco.Position(bookmark, 0));
    }

    //--------------------------------------------------
    //-----Comments-----
    //--------------------------------------------------

    public handleKeypressComment(input: string) {
        if (this.graph.addCommentAt(input, this.lastPosition.lineNumber)) this.updateValue();
        this.resetPosition();
    }

    public handleKeypressRemoveComment() {
        if (this.graph.removeCommentAt(this.lastPosition.lineNumber)) {
            this.updateValue();
            this.resetPosition();
        }
    }

    public handleKeypressResetComments() {
        if (this.graph.getComments().length) {
            this.graph.resetComments();
            this.updateValue();
            this.resetPosition();
        }
    }

    //--------------------------------------------------
    //-----Notes-----
    //--------------------------------------------------

    public handleKeypressNote(input: string) {
        if (this.graph.addNoteAt(input, this.lastPosition)) this.decorateNotes();
        this.resetPosition();
    }

    public handleKeypressRemoveNote() {
        if (this.graph.removeNoteAt(this.lastPosition)) {
            this.decorateNotes();
            this.resetPosition();
        }
    }

    public handleKeypressResetNotes() {
        if (this.graph.getNotes().length) {
            this.graph.resetNotes();
            this.decorateNotes();
            this.resetPosition();
        }
    }

    public handleKeypressRevealNextNote() {
        let note = this.graph.getNextNoteAt(this.lastPosition);
        if (note) this.setPosition(note.range.getStartPosition());
    }

    public handleKeypressRevealPrevNote() {
        let note = this.graph.getPrevNoteAt(this.lastPosition);
        if (note) this.setPosition(note.range.getStartPosition());
    }

    //--------------------------------------------------
    //-----Renaming-----
    //--------------------------------------------------

    public handleKeypressRename(input: string) {
        if (this.graph.addAlias(input)) this.updateValue();
        this.resetPosition();
    }

    public handleKeypressUndoRename() {
        if (this.graph.removeAlias()) {
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
    //-----Modals-----
    //--------------------------------------------------

    public handleKeypressDisplayInfoModal() {
        let info = this.graph.getInfoData();
        if (info) {
            this.props.buildInfoModal(info);
            this.props.displayInfoModal();
        }
    }

    public handleKeypressDisplayKeybindModal() {
        this.props.displayKeybindModal();
    }

    public handleKeypressDisplayTargetTreeModal() {
        let tree = this.graph.getTargetTreeData();
        if (tree) {
            this.props.buildTargetTreeModal(tree);
            this.props.displayTargetTreeModal();
        }
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
    //-----Toggle-----
    //--------------------------------------------------

    public handleKeypressToggleKeybinds() {
        this.props.toggleButton();
        if (this.ctxKey) {
            this.ctxKey.set(!this.ctxKey.get());
            if (this.editor && this.ctxKey.get()) {
                this.editor.focus();
                let position = this.editor.getPosition();
                if (position) this.setPosition(position);
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
        this.decorateCursor();
    }

    public handleKeypressToggleVariableDecorating() {
        this.setState({
            activateVariableDecorating: !this.state.activateVariableDecorating,
        });
        this.decorateVariableAt(this.lastPosition);
    }

    public handleKeypressToggleChildDecorating() {
        this.setState({
            activateChildDecorating: !this.state.activateChildDecorating,
        });
        this.decorateTree();
    }

    public handleKeypressToggleParentDecorating() {
        this.setState({
            activateParentDecorating: !this.state.activateParentDecorating,
        });
        this.decorateTree();
    }

    public handleKeypressToggleBookmarkDecorating() {
        this.setState({
            activateBookmarkDecorating: !this.state.activateBookmarkDecorating,
        });
        this.decorateBookmarks();
    }

    public handleKeypressToggleNoteDecorating() {
        this.setState({
            activateNoteDecorating: !this.state.activateNoteDecorating,
        });
        this.decorateNotes();
    }

    public handleKeypressToggleTargetTreeHover() {
        this.setState({
            activateTargetTreeHover: !this.state.activateTargetTreeHover,
        });
    }

    //--------------------------------------------------
    //-----Position-----
    //--------------------------------------------------

    /**
     * setPosition:
     * Handle Position change
     */
    private setPosition(position: monaco.Position, grid?: true) {
        if (this.editor) {
            if (grid) position = this.applyGrid(position);
            else this.setGrid(position);
            this.lastPosition = this.validate(position);
            this.graph.updateCurrent(this.lastPosition);
            let current = this.graph.getCurrent();
            this.props.updateStatusInput(
                (current ? current.getAlias() : '') + this.graph.getNoteStringAt(this.lastPosition),
                this.lastPosition.lineNumber,
                this.lastPosition.column,
            );
            this.props.closeModals();
            this.editor.setPosition(this.lastPosition);
            this.editor.revealPositionInCenterIfOutsideViewport(this.lastPosition);
            this.decorateCursor();
            this.decorateTree();
            console.log(current);
        }
    }

    /**
     * updatePosition:
     * Update Position to match the current Node of the Graph
     */
    private updatePosition() {
        let current = this.graph.getCurrent();
        if (current) this.setPosition(current.getRange().getStartPosition());
    }

    /**
     * resetPosition:
     * Reset to last Position
     */
    private resetPosition() {
        this.setPosition(this.lastPosition);
    }

    private setGrid(position: monaco.Position) {
        this.grid = position.column;
    }

    private applyGrid(position: monaco.Position) {
        return position.with(undefined, this.grid > position.column ? this.grid : position.column);
    }

    /**
     * validate:
     * Return valid Position
     */
    private validate(position: monaco.Position) {
        let maxL = this.graph.getEndPosition().lineNumber;
        let maxC = this.getLineLength(position.lineNumber);
        let line = maxL < position.lineNumber ? maxL : position.lineNumber > 0 ? position.lineNumber : 1;
        let column = maxC < position.column ? maxC : position.column > 0 ? position.column : 1;
        return new monaco.Position(line, column);
    }

    private getLineLength(line: number) {
        if (line < 1) return 1;
        let lines = this.value.split('\n');
        return lines[line - 1] ? lines[line - 1].length + 1 : 1;
    }

    //--------------------------------------------------
    //-----Decorations-----
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
                ...this.noteDecorations,
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
        return this.graph.getVariableSiblingsAt(position).map((v) => v.getRange());
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

    public decorateVariableAt(position: monaco.Position) {
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

    private getSelectDecorations() {
        let decorations: { range: monaco.Range; depth: number }[] = [];
        this.graph.getCurrentSiblings().forEach((s) => decorations.push({ range: s.getRange(), depth: 0 }));
        return decorations;
    }

    private getChildDecorations() {
        let decorations: { range: monaco.Range; depth: number }[] = [];
        this.graph.getChildTree().forEach((t) => decorations.push({ range: t.variable.getRange(), depth: t.depth }));
        return decorations;
    }

    private getParentDecorations() {
        let decorations: { range: monaco.Range; depth: number }[] = [];
        this.graph.getParentTree().forEach((t) => decorations.push({ range: t.variable.getRange(), depth: t.depth }));
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

    private decorateTree() {
        this.variableDecorations = [];
        this.treeDecorations = [];
        let decorations: { range: monaco.Range; depth: number }[] = [];
        if (!(this.state.activateChildDecorating || this.state.activateParentDecorating))
            decorations = this.getSelectDecorations();
        else if (this.state.activateChildDecorating && !this.state.activateParentDecorating)
            decorations = this.getChildDecorations();
        else if (!this.state.activateChildDecorating && this.state.activateParentDecorating)
            decorations = this.getParentDecorations();
        else decorations = [...this.getChildDecorations(), ...this.getParentDecorations()];
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

    private setNoteDecoration(note: note) {
        this.noteDecorations.push({
            range: note.range,
            options: {
                isWholeLine: !note.node,
                className: 'contentNote' + note.node?.constructor.name,
                glyphMarginClassName: 'glyphNote',
                minimap: {
                    color: { id: 'note' },
                    position: 1,
                },
                zIndex: 2,
            },
        });
    }

    private decorateNotes() {
        this.noteDecorations = [];
        if (this.state.activateNoteDecorating) this.graph.getNotes().forEach((n) => this.setNoteDecoration(n));
        this.updateDecorations();
    }

    //--------------------------------------------------
    //-----Language Features-----
    //--------------------------------------------------

    public highlightNodes(position: monaco.Position) {
        let highlights: monaco.languages.DocumentHighlight[] = [];
        if (this.state.activateNodeHighlighting) {
            let ranges = this.graph.getRelatedNodesAt(position).map((n) => n.getRange());
            ranges.forEach((r) => highlights.push({ range: r }));
        }
        return highlights;
    }

    public getNoteHover(position: monaco.Position) {
        if (!this.state.activateNoteDecorating) return null;
        let hover = this.graph.getNoteHoverAt(position);
        return hover
            ? {
                  range: hover.range,
                  contents: [{ value: hover.text }],
              }
            : null;
    }

    public getTargetTreeHover(position: monaco.Position) {
        if (!this.state.activateTargetTreeHover) return null;
        let hover = this.graph.getTargetTreeHoverAt(position);
        return hover
            ? {
                  range: hover.range,
                  contents: [{ value: '```html\n' + hover.tree + '\n```' }],
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
