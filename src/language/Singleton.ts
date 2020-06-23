import Editor from '../components/Editor';

class Singleton {
    private static instance: Singleton;
    private editor: Editor | null;

    private constructor() {
        this.editor = null;
    }

    /**
     * getInstance:
     * Returns the static Singleton instance
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    /**
     * connect:
     * Creates a reference to the Editor
     */
    public connect(editor: Editor) {
        this.editor = editor;
    }

    /**
     * getEditor:
     * Returns the Editor reference
     */
    public getEditor() {
        return this.editor;
    }
}

export default Singleton;
