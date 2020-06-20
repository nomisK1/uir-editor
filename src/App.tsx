import * as React from 'react';
import TcphDropdown from './components/TcphDropdown';
import FeatureChecker from './components/FeatureChecker';
import Editor from './components/Editor';
import Graph from './utils/content/Graph';
import { setupLanguage } from './utils/language/setup';
import { languageID } from './utils/language/config';
import { get } from './utils/editor/tcph';

enum Feature {
    CHOVER = 'Hover: Highlight Variable Children',
    PHOVER = 'Hover: Highlight Variable Parents',
    VTRACK = 'Click: Find Variable Occurrences',
}

interface IAppProps {}

interface IAppState {
    data: string[];
    selected: string;
    graph: Graph;
    activateCHover: boolean;
    activatePHover: boolean;
    activateVTrack: boolean;
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
            activateCHover: false,
            activatePHover: false,
            activateVTrack: false,
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
        if (event.target.id === Feature.CHOVER) {
            this.setState({
                activateCHover: event.target.checked,
            });
        } else if (event.target.id === Feature.PHOVER) {
            this.setState({
                activatePHover: event.target.checked,
            });
        } else if (event.target.id === Feature.VTRACK) {
            this.setState({
                activateVTrack: event.target.checked,
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
                activateCHover={this.state.activateCHover}
                activatePHover={this.state.activatePHover}
                activateVTrack={this.state.activateVTrack}
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
