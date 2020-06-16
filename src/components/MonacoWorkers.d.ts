// Taken from here:
// https://github.com/s-panferov/awesome-typescript-loader/issues/183

declare module 'worker-loader!monaco-editor/esm/vs/editor/editor.worker' {
    const content: any;
    export = content;
}
