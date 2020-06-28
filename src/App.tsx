import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import VariableInput from './components/VariableInput';
import Editor from './components/Editor';
import Graph from './content/Graph';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import { tpch } from './queries/tpch';
import './App.css';

enum Feature {
    NODEHIGHLIGHTING = 'Click: Highlight Node Occurrences',
    VARIABLEDECORATION = 'Hover: Decorate Variable',
    CHILDDECORATION = 'Select: Decorate Variable Children',
    PARENTDECORATION = 'Select: Decorate Variable Parents',
}

interface IAppProps {}

interface IAppState {
    data: string[];
    query: string;
    graph: Graph;
    selection: string;
    backup: string;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
    private editor: Editor | null = null;
    private input: VariableInput | null = null;
    private features: string[] = Object.values(Feature);

    constructor(props: IAppProps) {
        super(props);
        let queries = [...tpch()];
        this.state = {
            data: queries,
            query: queries[0],
            graph: new Graph({ query: queries[0] }),
            selection: '',
            backup: '',
            activateNodeHighlighting: true,
            activateVariableDecoration: true,
            activateChildDecoration: false,
            activateParentDecoration: false,
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckerChange = this.handleCheckerChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleSelectionKeydown = this.handleSelectionKeydown.bind(this);
        this.passSelection = this.passSelection.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            query: event.target.value,
            graph: new Graph({ query: event.target.value }),
        });
        if (this.editor) this.editor.getInstance().focus();
    }

    public handleCheckerChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.id === Feature.NODEHIGHLIGHTING) {
            this.setState({
                activateNodeHighlighting: event.target.checked,
            });
        } else if (event.target.id === Feature.VARIABLEDECORATION) {
            this.setState({
                activateVariableDecoration: event.target.checked,
            });
        } else if (event.target.id === Feature.CHILDDECORATION) {
            this.setState({
                activateChildDecoration: event.target.checked,
            });
        } else if (event.target.id === Feature.PARENTDECORATION) {
            this.setState({
                activateParentDecoration: event.target.checked,
            });
        }
        if (this.editor) this.editor.getInstance().focus();
    }

    public handleSelectionChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ selection: event.target.value, backup: this.state.selection });
    }

    public handleSelectionKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        event.preventDefault();
        if (event.key === 'Enter') {
            if (this.editor) {
                this.editor.getInstance().focus();
                this.editor.handleKeypressEnter();
            }
        }
        if (event.key === 'z' && event.ctrlKey) {
            this.setState({ selection: this.state.backup });
        }
    }

    public passSelection(selection: string) {
        this.setState({ selection, backup: this.state.selection });
    }

    public focusInput() {
        if (this.input) this.input.getInstance().focus();
    }

    render() {
        setupLanguage();
        let dropdown = (
            <TcphDropdown
                data={this.state.data}
                query={this.state.query}
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
                value={this.state.query}
                graph={this.state.graph}
                selection={this.state.selection}
                passSelection={this.passSelection}
                focusInput={this.focusInput}
                activateNodeHighlighting={this.state.activateNodeHighlighting}
                activateVariableDecoration={this.state.activateVariableDecoration}
                activateChildDecoration={this.state.activateChildDecoration}
                activateParentDecoration={this.state.activateParentDecoration}
                ref={(ref) => (this.editor = ref)}
            />
        );
        return (
            <div>
                {dropdown}
                {checker}
                {input}
                {editor}
            </div>
        );
    }
}

export default App;
