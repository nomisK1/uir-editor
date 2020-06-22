import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import Graph from '../content/Graph';
import S from './Singleton';

interface IEditorProps {
    language: string;
    value: string;
    graph: Graph;
    selection: string;
    activateCHover: boolean;
    activatePHover: boolean;
    activateNTrack: boolean;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null;
    private editor: monaco.editor.IStandaloneCodeEditor | null;
    private value: string | null;
    private graph: Graph;
    private selection: string;
    private decorations: string[];
    private activateCHover: boolean;
    private activatePHover: boolean;
    private activateNTrack: boolean;

    constructor(props: IEditorProps) {
        super(props);
        this.container = null;
        this.editor = null;
        this.value = null;
        this.graph = this.props.graph;
        this.selection = this.props.selection;
        this.decorations = [];
        this.activateCHover = this.props.activateCHover;
        this.activatePHover = this.props.activatePHover;
        this.activateNTrack = this.props.activateNTrack;
        S.initializeSingleton(this);
        this.handleEditorKeypress = this.handleEditorKeypress.bind(this);
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
            this.editor.addCommand(monaco.KeyCode.F9, this.handleEditorKeypress);
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
        let query = this.props.value;
        if (query !== this.value) this.value = query;
        if (this.editor !== null) this.editor.setValue(query);
    }

    public componentWillUnmount() {
        if (this.editor !== null) this.editor.dispose();
    }

    public getGraph() {
        return this.graph;
    }

    public getSelection() {
        return this.selection;
    }

    public getActivateNTrack() {
        return this.activateNTrack;
    }

    public getActivateCHover() {
        return this.activateCHover;
    }

    public getActivatePHover() {
        return this.activatePHover;
    }

    public handleEditorKeypress() {
        if (this.editor !== null) {
            console.log("hi");
            this.editor.revealRangeInCenter(S.getInstance().findSelectorVariables()[0]);
        }
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null) {
            this.decorations = this.editor.deltaDecorations(this.decorations, S.getInstance().getDecorations());
        }
    }

    render() {
        this.graph = this.props.graph;
        this.selection = this.props.selection;
        this.activateCHover = this.props.activateCHover;
        this.activatePHover = this.props.activatePHover;
        this.activateNTrack = this.props.activateNTrack;

        console.log(this.graph);
        console.log(this.selection);
        console.log(S.getInstance().findSelectorVariables());
        console.log(this.activateCHover);
        console.log(this.activatePHover);
        console.log(this.activateNTrack);

        return (
            <div>
                <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '90vh' }}></div>
            </div>
        );
    }
}

export default Editor;
