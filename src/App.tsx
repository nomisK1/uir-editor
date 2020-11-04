import * as React from 'react';
import UmbraLoader from './components/UmbraLoader';
import QuerySelector from './components/interface/QuerySelector';
import StatusInput, { Status } from './components/interface/StatusInput';
import KeybindButton from './components/interface/KeybindButton';
import InfoModal from './components/interface/InfoModal';
import KeybindModal from './components/interface/KeybindModal';
import TargetTreeModal from './components/interface/TargetTreeModal';
import Editor from './components/Editor';
import { query, queryTotal, requestQuery } from './data/request';
import { treeData } from './content/tree/TargetTree';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import './App.css';

interface IAppProps {}

interface IAppState {
    showInfoModal: boolean;
    showKeybindModal: boolean;
    showTargetTreeModal: boolean;
    loading: boolean;
    query: query | null;
}

/**
 * App:
 * Main component
 */
class App extends React.Component<IAppProps, IAppState> {
    private editor: Editor | null = null;
    private selectionElement: QuerySelector | null = null;
    private inputElement: StatusInput | null = null;
    private buttonElement: KeybindButton | null = null;
    private ifModalElement: InfoModal | null = null;
    //private kbModalElement: KeybindModal | null = null;
    private ttModalElement: TargetTreeModal | null = null;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: false,
            loading: true,
            query: null,
        };
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.nextSelectionQuery = this.nextSelectionQuery.bind(this);
        this.prevSelectionQuery = this.prevSelectionQuery.bind(this);
        this.handleInputKeydown = this.handleInputKeydown.bind(this);
        this.focusStatusInput_Comment = this.focusStatusInput_Comment.bind(this);
        this.focusStatusInput_Note = this.focusStatusInput_Note.bind(this);
        this.focusStatusInput_Rename = this.focusStatusInput_Rename.bind(this);
        this.focusStatusInput_Search = this.focusStatusInput_Search.bind(this);
        this.updateStatusInput = this.updateStatusInput.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.displayInfoModal = this.displayInfoModal.bind(this);
        this.buildInfoModal = this.buildInfoModal.bind(this);
        this.displayKeybindModal = this.displayKeybindModal.bind(this);
        this.displayTargetTreeModal = this.displayTargetTreeModal.bind(this);
        this.buildTargetTreeModal = this.buildTargetTreeModal.bind(this);
        this.closeModals = this.closeModals.bind(this);
    }

    //--------------------------------------------------
    //-----Query Selector-----
    //--------------------------------------------------

    public async handleSelectionChange(index: number) {
        this.setState({ loading: true });
        let query = await requestQuery(index);
        this.setState({ loading: false, query });
        if (this.editor) this.editor.getInstance().focus();
    }

    public nextSelectionQuery() {
        if (this.selectionElement) this.selectionElement.nextItem();
    }

    public prevSelectionQuery() {
        if (this.selectionElement) this.selectionElement.prevItem();
    }

    //--------------------------------------------------
    //-----Status Input-----
    //--------------------------------------------------

    public handleInputKeydown(status: Status, input: string) {
        if (this.editor) {
            this.editor.getInstance().focus();
            if (status === Status.COMMENT) this.editor.handleKeypressComment(input);
            else if (status === Status.NOTE) this.editor.handleKeypressNote(input);
            else if (status === Status.RENAME) this.editor.handleKeypressRename(input);
            else if (status === Status.SEARCH) this.editor.handleKeypressSearch(input);
        }
    }

    public focusStatusInput_Comment(input: string) {
        if (this.inputElement) {
            this.inputElement.setStatusComment(input);
            this.inputElement.getInstance().focus();
        }
    }

    public focusStatusInput_Note(input: string) {
        if (this.inputElement) {
            this.inputElement.setStatusNote(input);
            this.inputElement.getInstance().focus();
        }
    }

    public focusStatusInput_Rename(input: string) {
        if (this.inputElement) {
            this.inputElement.setStatusRename(input);
            this.inputElement.getInstance().focus();
        }
    }

    public focusStatusInput_Search() {
        if (this.inputElement) {
            this.inputElement.setStatusSearch();
            this.inputElement.getInstance().focus();
        }
    }

    public updateStatusInput(input: string, line: number, column: number) {
        if (this.inputElement) this.inputElement.update(input, line, column);
    }

    //--------------------------------------------------
    //-----Keybind Button-----
    //--------------------------------------------------

    public handleButtonPress() {
        if (this.editor) {
            this.editor.getInstance().focus();
            this.editor.handleKeypressToggleKeybinds();
        }
    }

    public toggleButton() {
        if (this.buttonElement) this.buttonElement.toggle();
    }

    //--------------------------------------------------
    //-----Manage Modals-----
    //--------------------------------------------------

    public displayInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal,
            showKeybindModal: false,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public buildInfoModal(data: string[]) {
        if (this.ifModalElement) this.ifModalElement.setData(data);
    }

    public displayKeybindModal() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: !this.state.showKeybindModal,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public displayTargetTreeModal() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: !this.state.showTargetTreeModal,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public buildTargetTreeModal(data: treeData | null) {
        if (this.ttModalElement) this.ttModalElement.setData(data);
    }

    public closeModals() {
        this.setState({
            showInfoModal: false,
            showKeybindModal: false,
            showTargetTreeModal: false,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    //--------------------------------------------------
    //-----React Lifecycle-----
    //--------------------------------------------------

    public async componentDidMount() {
        let query = await requestQuery(0);
        this.setState({ query, loading: false });
    }

    render() {
        console.log('APP RENDERING...');
        if (this.state.loading || !this.state.query) return <UmbraLoader />;
        setupLanguage();
        let selector = (
            <QuerySelector
                index={this.state.query.index}
                size={queryTotal}
                onSelectionChange={this.handleSelectionChange}
                ref={(ref) => (this.selectionElement = ref)}
            />
        );
        let input = <StatusInput onInputKeydown={this.handleInputKeydown} ref={(ref) => (this.inputElement = ref)} />;
        let button = <KeybindButton onButtonPress={this.handleButtonPress} ref={(ref) => (this.buttonElement = ref)} />;
        let ifModal = (
            <InfoModal
                showModal={this.state.showInfoModal}
                onModalClick={this.displayInfoModal}
                ref={(ref) => (this.ifModalElement = ref)}
            />
        );
        let kbModal = (
            <KeybindModal
                showModal={this.state.showKeybindModal}
                onModalClick={this.displayKeybindModal}
                //ref={(ref) => (this.kbModalElement = ref)}
            />
        );
        let ttModal = (
            <TargetTreeModal
                showModal={this.state.showTargetTreeModal}
                onModalClick={this.displayTargetTreeModal}
                ref={(ref) => (this.ttModalElement = ref)}
            />
        );
        let editor = (
            <Editor
                language={languageID}
                graph={this.state.query.content}
                nextSelectionQuery={this.nextSelectionQuery}
                prevSelectionQuery={this.prevSelectionQuery}
                focusStatusInput_Comment={this.focusStatusInput_Comment}
                focusStatusInput_Note={this.focusStatusInput_Note}
                focusStatusInput_Rename={this.focusStatusInput_Rename}
                focusStatusInput_Search={this.focusStatusInput_Search}
                updateStatusInput={this.updateStatusInput}
                toggleButton={this.toggleButton}
                displayInfoModal={this.displayInfoModal}
                buildInfoModal={this.buildInfoModal}
                displayKeybindModal={this.displayKeybindModal}
                displayTargetTreeModal={this.displayTargetTreeModal}
                buildTargetTreeModal={this.buildTargetTreeModal}
                closeModals={this.closeModals}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                {ifModal}
                {kbModal}
                {ttModal}
                <div className="ui">
                    {selector}
                    {input}
                    {button}
                </div>
                {editor}
            </div>
        );
    }
}

export default App;
