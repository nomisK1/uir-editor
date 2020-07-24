import * as React from 'react';
import * as monaco from 'monaco-editor';
import { themeID, monarchTheme } from '../language/uirTheme';
import S from '../language/Singleton';
import Graph from '../graph/Graph';
import './Editor.css';

interface IEditorProps {
    language: string;
    graph: Graph;
    activateNodeHighlighting: boolean;
    activateVariableDecoration: boolean;
    activateChildDecoration: boolean;
    activateParentDecoration: boolean;
    selection: string;
    passSelection: (selection: string) => void;
    focusInput: () => void;
}

class Editor extends React.Component<IEditorProps> {
    private container: HTMLDivElement | null = null;
    private editor: monaco.editor.IStandaloneCodeEditor | null = null;
    private graph: Graph;
    private value: string;
    private activateNodeHighlighting: boolean;
    private activateVariableDecoration: boolean;
    private activateChildDecoration: boolean;
    private activateParentDecoration: boolean;
    private selection: string;
    private decorations: string[] = [];
    private variableDecorations: monaco.editor.IModelDeltaDecoration[] = [];
    private treeDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    constructor(props: IEditorProps) {
        super(props);
        this.graph = this.props.graph;
        this.value = this.graph.print();
        this.activateNodeHighlighting = this.props.activateNodeHighlighting;
        this.activateVariableDecoration = this.props.activateVariableDecoration;
        this.activateChildDecoration = this.props.activateChildDecoration;
        this.activateParentDecoration = this.props.activateParentDecoration;
        this.selection = this.props.selection;
        S.getInstance().connect(this);
        /* this.handleMouseclick = this.handleMouseclick.bind(this);
        this.handleKeypressBack = this.handleKeypressBack.bind(this);
        this.handleKeypressTab = this.handleKeypressTab.bind(this);
        this.handleKeypressEnter = this.handleKeypressEnter.bind(this);
        this.handleKeypressShiftEnter = this.handleKeypressShiftEnter.bind(this);
        this.handleKeypressLeft = this.handleKeypressLeft.bind(this);
        this.handleKeypressUp = this.handleKeypressUp.bind(this);
        this.handleKeypressRight = this.handleKeypressRight.bind(this);
        this.handleKeypressDown = this.handleKeypressDown.bind(this);
        this.handleKeypressShiftLeft = this.handleKeypressShiftLeft.bind(this);
        this.handleKeypressShiftUp = this.handleKeypressShiftUp.bind(this);
        this.handleKeypressShiftRight = this.handleKeypressShiftRight.bind(this);
        this.handleKeypressShiftDown = this.handleKeypressShiftDown.bind(this);
        this.handleKeypressPrevious = this.handleKeypressPrevious.bind(this); */
    }

    public componentDidMount() {
        if (this.container) {
            this.editor = monaco.editor.create(this.container, {
                language: this.props.language,
                value: this.value,
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
    }

    public shouldComponentUpdate(nextProps: IEditorProps) {
        if (this.props.graph !== nextProps.graph) {
            this.graph = nextProps.graph;
            let query = this.graph.print();
            if (query !== this.value) this.value = query;
            //this.resetPosition();
            return true;
        }
        return false;
    }

    public componentDidUpdate() {
        if (this.editor !== null) this.editor.setValue(this.value);
    }

    public componentWillUnmount() {
        if (this.editor !== null) this.editor.dispose();
    }

    public getInstance() {
        return this.editor!;
    }

    /**
     * getVariableDecorationsAt:
     *
     */
    private getVariableDecorationsAt(position: monaco.Position) {
        let variable = this.graph.getVariableAt(position);
        let vars = this.graph.getSiblings(variable);
        let ranges = vars.map((v) => v.getRangeShifted());
        return ranges;
    }

    /**
     * setVariableDecoration:
     *
     */
    private setVariableDecoration(range: monaco.Range) {
        this.variableDecorations.push({
            range,
            options: {
                isWholeLine: false,
                className: 'contentVariable',
                glyphMarginClassName: 'glyphVariable',
            },
        });
    }

    /**
     * decorateVariable:
     *
     */
    public decorateVariable(position: monaco.Position) {
        this.variableDecorations = [];
        if (this.activateVariableDecoration) {
            let ranges = this.getVariableDecorationsAt(position);
            ranges.forEach((r) => this.setVariableDecoration(r));
            this.updateDecorations();
            return ranges;
        }
        this.updateDecorations();
        return [];
    }

    /**
     * updateDecorations:
     * Adds the Decorations to the editor for display
     */
    public updateDecorations() {
        if (this.editor !== null) {
            this.decorations = this.editor.deltaDecorations(this.decorations, [
                ...this.variableDecorations,
                ...this.treeDecorations,
            ]);
        }
    }

    render() {
        console.log(this.graph);
        return <div className="Editor" ref={(ref) => (this.container = ref)} style={{ height: '73vh' }} />;
    }
}

export default Editor;
