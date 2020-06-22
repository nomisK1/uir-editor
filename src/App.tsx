import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import VariableSelector from './components/VariableSelector';
import Editor from './components/Editor';
import Graph from './content/Graph';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import { tpch } from './queries/tpch';
import './App.css';

enum Feature {
    NODEHIGHLIGHTING = 'Click: Highlight Node Occurrences',
    VARIABLEDECORATION = 'Hover: Decorate Variable',
    CHILDDECORATION = 'Click: Decorate Variable Children',
    PARENTDECORATION = 'Click: Decorate Variable Parents',
}

interface IAppProps {}

interface IAppState {
    data: string[];
    query: string;
    graph: Graph;
    selection: string;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
    private features: string[] = Object.values(Feature);

    constructor(props: IAppProps) {
        super(props);
        let queries = [...tpch()];
        this.state = {
            data: queries,
            query: queries[0],
            graph: new Graph({ query: queries[0] }),
            selection: '',
            activateNodeHighlighting: true,
            activateVariableDecoration: true,
            activateChildDecoration: true,
            activateParentDecoration: true,
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckerChange = this.handleCheckerChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleSelectionKeypress = this.handleSelectionKeypress.bind(this);
    }

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            query: event.target.value,
            graph: new Graph({ query: event.target.value }),
        });
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
    }

    public handleSelectionChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ selection: event.target.value });
    }

    public handleSelectionKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.setState({
                selection: 'TableScanTranslator_cpp_354_',
            });
        }
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
        let display = (
            <VariableSelector
                selection={this.state.selection}
                onSelectionChange={this.handleSelectionChange}
                onSelectionKeypress={this.handleSelectionKeypress}
            />
        );
        let editor = (
            <Editor
                language={languageID}
                value={this.state.query}
                graph={this.state.graph}
                selection={this.state.selection}
                activateNodeHighlighting={this.state.activateNodeHighlighting}
                activateVariableDecoration={this.state.activateVariableDecoration}
                activateChildDecoration={this.state.activateChildDecoration}
                activateParentDecoration={this.state.activateParentDecoration}
            />
        );
        return (
            <div>
                {dropdown}
                {checker}
                {display}
                {editor}
            </div>
        );
    }
}

export default App;
