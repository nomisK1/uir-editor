import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import VariableInput from './components/VariableInput';
import Editor from './components/Editor';
import Graph from './graph/Graph';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import { getData } from './TPCH';
import './App.css';

enum Feature {
    NODEHIGHLIGHTING = 'Click: Highlight Node Occurrences',
    VARIABLEDECORATION = 'Hover: Decorate Variable',
    CHILDDECORATION = 'Select: Decorate Variable Children',
    PARENTDECORATION = 'Select: Decorate Variable Parents',
}

interface IAppProps {}

interface IAppState {
    index: number;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
    selection: string;
}

class App extends React.Component<IAppProps, IAppState> {
    private editor: Editor | null = null;
    private data: Graph[] = getData();
    private features: string[] = Object.values(Feature);
    private input: VariableInput | null = null;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            index: 0,
            activateNodeHighlighting: true,
            activateVariableDecoration: true,
            activateChildDecoration: true,
            activateParentDecoration: true,
            selection: '',
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckerChange = this.handleCheckerChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleSelectionKeydown = this.handleSelectionKeydown.bind(this);
        this.passSelection = this.passSelection.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let index = parseInt(event.target.value);
        this.setState({
            index,
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public handleCheckerChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.id === Feature.NODEHIGHLIGHTING)
            this.setState({
                activateNodeHighlighting: event.target.checked,
            });
        else if (event.target.id === Feature.VARIABLEDECORATION)
            this.setState({
                activateVariableDecoration: event.target.checked,
            });
        else if (event.target.id === Feature.CHILDDECORATION)
            this.setState({
                activateChildDecoration: event.target.checked,
            });
        else if (event.target.id === Feature.PARENTDECORATION)
            this.setState({
                activateParentDecoration: event.target.checked,
            });
        if (this.editor) this.editor.getInstance().focus();
    }

    public handleSelectionChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ selection: event.target.value });
    }

    public handleSelectionKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.editor) {
                this.editor.getInstance().focus();
                this.editor.handleKeypressNextOccurrence();
            }
        }
    }

    public passSelection(selection: string) {
        this.setState({ selection });
    }

    public focusInput() {
        if (this.input) this.input.getInstance().focus();
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
        let checker = (
            <FeatureChecker
                features={this.features}
                activateNodeHighlighting={this.state.activateNodeHighlighting}
                activateVariableDecoration={this.state.activateVariableDecoration}
                activateChildDecoration={this.state.activateChildDecoration}
                activateParentDecoration={this.state.activateParentDecoration}
                onCheckerChange={this.handleCheckerChange}
            />
        );
        let input = (
            <VariableInput
                selection={this.state.selection}
                onSelectionChange={this.handleSelectionChange}
                onSelectionKeydown={this.handleSelectionKeydown}
                ref={(ref) => (this.input = ref)}
            />
        );
        let editor = (
            <Editor
                language={languageID}
                graph={this.data[this.state.index]}
                activateNodeHighlighting={this.state.activateNodeHighlighting}
                activateVariableDecoration={this.state.activateVariableDecoration}
                activateChildDecoration={this.state.activateChildDecoration}
                activateParentDecoration={this.state.activateParentDecoration}
                selection={this.state.selection}
                passSelection={this.passSelection}
                focusInput={this.focusInput}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                <b>CTRL+K and CTRL+0 to FoldAll // CTRL+K and CTRL+J to UnfoldAll</b>
                <br />
                {dropdown}
                {checker}
                {input}
                {editor}
            </div>
        );
    }
}

export default App;
