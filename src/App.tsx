import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import Editor from './components/Editor';
import Graph from './utils/content/Graph';
import { setupLanguage } from './utils/language/setup';
import { languageID } from './utils/language/config';
import { get } from './utils/editor/tcph';

enum Feature {
    HOVER = 'Hover Highlighting',
    CLICK = 'Click Highlighting',
}

interface IAppProps {}

interface IAppState {
    data: string[];
    selected: string;
    graph: Graph;
    activateHover: boolean;
    activateClick: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
    private features: string[] = Object.values(Feature);

    constructor(props: IAppProps) {
        super(props);
        let queries = [...get()];
        this.state = {
            data: queries,
            selected: queries[0],
            graph: new Graph({ query: queries[0] }),
            activateHover: false,
            activateClick: false,
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckerChange = this.handleCheckerChange.bind(this);
    }

    public handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selected: event.target.value,
            graph: new Graph({ query: event.target.value }),
        });
    }

    public handleCheckerChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.id === Feature.HOVER) {
            this.setState({
                activateHover: event.target.checked,
            });
        } else if (event.target.id === Feature.CLICK) {
            this.setState({
                activateClick: event.target.checked,
            });
        }
    }

    render() {
        setupLanguage();
        let dropdown = (
            <TcphDropdown
                data={this.state.data}
                selected={this.state.selected}
                onDropdownChange={this.handleDropdownChange}
            ></TcphDropdown>
        );
        let checker = (
            <FeatureChecker features={this.features} onCheckerChange={this.handleCheckerChange}></FeatureChecker>
        );
        let editor = (
            <Editor
                language={languageID}
                value={this.state.selected}
                graph={this.state.graph}
                activateHover={this.state.activateHover}
                activateClick={this.state.activateClick}
            ></Editor>
        );
        return (
            <div>
                {dropdown}
                {checker}
                {editor}
            </div>
        );
    }
}

export default App;
