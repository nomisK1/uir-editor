import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../utils/language/uirTheme';
import Graph from '../utils/content/Graph';
import D from '../utils/editor/Decorations';

interface IEditorProps {
    language: string;
    value: string;
    graph: Graph;
    activateHover: boolean;
    activateClick: boolean;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null;
    private editor: monaco.editor.IStandaloneCodeEditor | null;
    private value: string | null;
    private graph: Graph;
    private decorations: string[];
    private activateHover: boolean;
    private activateClick: boolean;

    constructor(props: IEditorProps) {
        super(props);
        this.container = null;
        this.editor = null;
        this.value = null;
        this.graph = this.props.graph;
        this.decorations = [];
        D.initializeDecorations(this);
        this.activateHover = this.props.activateHover;
        this.activateClick = this.props.activateClick;
    }

    public componentDidMount() {
        if (this.container) {
            this.editor = monaco.editor.create(this.container, {
                language: this.props.language,
                value: this.props.value,
                lineNumbers: 'on',
                fontFamily: 'monospace',
                fontSize: 15,
                fontWeight: '100',
                letterSpacing: 0,
                automaticLayout: true,
                roundedSelection: true,
                scrollBeyondLastLine: true,
                minimap: { enabled: true },
                autoIndent: 'none',
                readOnly: true,
                glyphMargin: true,
            });
            this.editor.onDidChangeModelContent((_event) => {
                this.value = this.editor!.getValue();
            });
            this.editor.setPosition({ column: 0, lineNumber: 0 });
            this.editor.focus();
        }
        monaco.editor.defineTheme(themeID, monarchTheme);
        monaco.editor.setTheme(themeID);
        this.updateDecorations();
    }

    public componentDidUpdate(_prevProps: IEditorProps) {
        let selected = this.props.value;
        if (selected !== this.value) this.value = selected;
        if (this.editor !== null) this.editor.setValue(selected);
    }

    public componentWillUnmount() {
        if (this.editor !== null) this.editor.dispose();
    }

    public getGraph() {
        return this.graph;
    }

    public getActivateHover() {
        return this.activateHover;
    }

    public getActivateClick() {
        return this.activateClick;
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null) {
            let array = D.getInstance().getDecorations();
            this.decorations = this.editor.deltaDecorations(this.decorations, array);
        }
    }

    render() {
        this.graph = this.props.graph;
        this.activateHover = this.props.activateHover;
        this.activateClick = this.props.activateClick;

        this.graph.print();
        console.log(this.graph);
        console.log(this.activateHover);
        console.log(this.activateClick);

        return (
            <div>
                <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }}></div>
            </div>
        );
    }
}

export default Editor;
