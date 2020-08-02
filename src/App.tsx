import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import StatusInput, { Status } from './components/StatusInput';
import KeybindModal from './components/KeybindModal';
import Editor from './components/Editor';
import Graph from './content/Graph';
import { getData } from './content/TPCH';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import './App.css';

interface IAppProps {}

interface IAppState {
    index: number;
    input: string;
    showModal: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
    private editor: Editor | null = null;
    private data: Graph[] = getData();
    private inputElement: StatusInput | null = null;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            index: 0,
            input: '',
            showModal: false,
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.nextTcphQuery = this.nextTcphQuery.bind(this);
        this.prevTcphQuery = this.prevTcphQuery.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeydown = this.handleInputKeydown.bind(this);
        this.passInput = this.passInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.displayKeybindModal = this.displayKeybindModal.bind(this);
    }

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({
            index,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public nextTcphQuery() {
        let index = this.state.index < this.data.length - 1 ? this.state.index + 1 : 0;
        this.setState({ index });
    }

    public prevTcphQuery() {
        let index = this.state.index > 0 ? this.state.index - 1 : this.data.length - 1;
        this.setState({ index });
    }

    public handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ input: event.target.value });
    }

    public handleInputKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.editor && this.inputElement) {
                this.editor.getInstance().focus();
                if (this.inputElement.getStatus() === Status.COMMENT) this.editor.handleKeypressAddComment();
                else if (this.inputElement.getStatus() === Status.RENAME) this.editor.handleKeypressRename();
                else if (this.inputElement.getStatus() === Status.SEARCH) this.editor.handleKeypressNextOccurrence();
            }
        }
    }

    public passInput(input: string) {
        this.setState({ input });
    }

    public focusInput(status: Status, prev?: string) {
        if (this.inputElement) {
            this.inputElement.setStatus(status);
            this.inputElement.getInstance().focus();
            if (status === Status.SEARCH) this.setState({ input: '' });
            if (status === Status.COMMENT) this.setState({ input: prev ? prev : '' });
            if (status === Status.RENAME) this.setState({ input: prev ? prev : '' });
        }
    }

    public displayKeybindModal() {
        this.setState({
            showModal: !this.state.showModal,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    render() {
        setupLanguage();
        let dropdown = (
            <TcphDropdown
                size={this.data.length}
                index={this.state.index}
                onDropdownChange={this.handleDropdownChange}
            />
        );
        let input = (
            <StatusInput
                input={this.state.input}
                onInputChange={this.handleInputChange}
                onInputKeydown={this.handleInputKeydown}
                ref={(ref) => (this.inputElement = ref)}
            />
        );
        let modal = <KeybindModal showModal={this.state.showModal} onModalClick={this.displayKeybindModal} />;
        let editor = (
            <Editor
                language={languageID}
                graph={this.data[this.state.index]}
                input={this.state.input}
                nextTcphQuery={this.nextTcphQuery}
                prevTcphQuery={this.prevTcphQuery}
                passInput={this.passInput}
                focusInput={this.focusInput}
                displayKeybindModal={this.displayKeybindModal}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                {dropdown}
                {input}
                {modal}
                {editor}
            </div>
        );
    }
}

export default App;
