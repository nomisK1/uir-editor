import * as React from 'react';
import StatusInput, { Status } from './components/StatusInput';
import TcphDropdown from './components/TcphDropdown';
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeydown = this.handleInputKeydown.bind(this);
        this.passInput = this.passInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this);
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

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({
            index,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public handleModalClick() {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    render() {
        setupLanguage();
        let modal = <KeybindModal showModal={this.state.showModal} onModalClick={this.handleModalClick} />;
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
        let editor = (
            <Editor
                language={languageID}
                graph={this.data[this.state.index]}
                input={this.state.input}
                passInput={this.passInput}
                focusInput={this.focusInput}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                {modal}
                {dropdown}
                {input}
                {editor}
            </div>
        );
    }
}

export default App;
