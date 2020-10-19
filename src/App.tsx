import * as React from 'react';
import LoadAnimation from './components/LoadAnimation';
import TpchDropdown from './components/TpchDropdown';
import StatusInput, { Status } from './components/StatusInput';
import KeybindButton from './components/KeybindButton';
import InfoModal from './components/InfoModal';
import KeybindModal from './components/KeybindModal';
import TargetTreeModal from './components/TargetTreeModal';
import Editor from './components/Editor';
import { query, queryTotal, requestQuery } from './content/TPCH';
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
    private dropdownElement: TpchDropdown | null = null;
    private inputElement: StatusInput | null = null;
    private buttonElement: KeybindButton | null = null;
    private ifModalElement: InfoModal | null = null;
    private kbModalElement: KeybindModal | null = null;
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
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.nextTpchQuery = this.nextTpchQuery.bind(this);
        this.prevTpchQuery = this.prevTpchQuery.bind(this);
        this.handleInputKeydown = this.handleInputKeydown.bind(this);
        this.focusStatusInput = this.focusStatusInput.bind(this);
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
    //-----TPC-H Dropdown-----
    //--------------------------------------------------

    public async handleDropdownChange(index: number) {
        this.setState({ loading: true });
        let query = await requestQuery(index);
        this.setState({ loading: false, query });
        if (this.editor) this.editor.getInstance().focus();
    }

    public nextTpchQuery() {
        if (this.dropdownElement) this.dropdownElement.nextItem();
    }

    public prevTpchQuery() {
        if (this.dropdownElement) this.dropdownElement.prevItem();
    }

    //--------------------------------------------------
    //-----Status Input-----
    //--------------------------------------------------

    public handleInputKeydown(status: Status, input: string) {
        if (this.editor) {
            this.editor.getInstance().focus();
            if (status === Status.COMMENT) this.editor.handleKeypressComment(input);
            else if (status === Status.RENAME) this.editor.handleKeypressRename(input);
            else if (status === Status.SEARCH) this.editor.handleKeypressSearch(input);
        }
    }

    public focusStatusInput(status: Status, input: string) {
        if (this.inputElement) {
            if (status === Status.COMMENT) this.inputElement.setStatusComment(input);
            else if (status === Status.RENAME) this.inputElement.setStatusRename(input);
            else if (status === Status.SEARCH) this.inputElement.setStatusSearch(input);
            this.inputElement.getInstance().focus();
        }
    }

    public updateStatusInput(input?: string, position?: { line: number; column: number }) {
        if (this.inputElement) this.inputElement.setStatusNode(input, position);
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
        console.log('APP...');
        if (this.state.loading || !this.state.query) return <LoadAnimation />;
        setupLanguage();
        let dropdown = (
            <TpchDropdown
                index={this.state.query.index}
                size={queryTotal}
                onDropdownChange={this.handleDropdownChange}
                ref={(ref) => (this.dropdownElement = ref)}
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
                ref={(ref) => (this.kbModalElement = ref)}
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
                nextTpchQuery={this.nextTpchQuery}
                prevTpchQuery={this.prevTpchQuery}
                focusStatusInput={this.focusStatusInput}
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
                <div className="ui">
                    {dropdown}
                    {input}
                    {button}
                </div>
                {ifModal}
                {kbModal}
                {ttModal}
                {editor}
            </div>
        );
    }
}

export default App;
