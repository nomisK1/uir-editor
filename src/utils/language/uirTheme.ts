import * as monaco from 'monaco-editor';

export const themeID = 'umbraIRtheme';

export const monarchTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'variable', foreground: '667ACC' },
        { token: 'function', foreground: '57D900' },
        { token: 'label', foreground: 'D93A00' },
        { token: 'type', foreground: '0DD9D9' },
        { token: 'constant', foreground: 'B5CE86' },
        { token: 'statement', foreground: 'DEDE00' },
        { token: 'constdeclaredefine', foreground: 'F92672' },
        { token: 'operator', foreground: 'D900D9' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'comment', foreground: '229977' },
    ],
    colors: {},
};
