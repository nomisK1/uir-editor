import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import VariableSelector from './components/VariableSelector';
import Editor from './components/Editor';
import Graph from './content/Graph';
import { setupLanguage } from './language/setup';
import { languageID } from './language/config';
import { tpch } from './queries/tpch';
import "./App.css"

enum Feature {
    CHOVER = 'Hover: Colorize Variable Children',
    PHOVER = 'Hover: Colorize Variable Parents',
    NTRACK = 'Click: Highlight Node Occurrences',
}

interface IAppProps { }

interface IAppState {
    data: string[];
    query: string;
    graph: Graph;
    selection: string;
    activateCHover: boolean;
    activatePHover: boolean;
    activateNTrack: boolean;
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
            selection: "",
            activateCHover: false,
            activatePHover: false,
            activateNTrack: false,
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
        if (event.target.id === Feature.CHOVER) {
            this.setState({
                activateCHover: event.target.checked,
            });
        } else if (event.target.id === Feature.PHOVER) {
            this.setState({
                activatePHover: event.target.checked,
            });
        } else if (event.target.id === Feature.NTRACK) {
            this.setState({
                activateNTrack: event.target.checked,
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
                selection: "CompilationContext_cpp_214_"
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
                activateCHover={this.state.activateCHover}
                activatePHover={this.state.activatePHover}
                activateNTrack={this.state.activateNTrack}
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
