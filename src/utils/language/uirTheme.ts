import * as monaco from 'monaco-editor';

export const themeID = 'umbraIRtheme';

export const monarchTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'function', foreground: '7FE06C' },
        { token: 'label', foreground: 'E09C6C' },
        { token: 'type', foreground: '5F73E5' },
        { token: 'constant', foreground: 'FEBF9C' },
        { token: 'statement', foreground: 'D66CE0' },
        { token: 'constdeclaredefine', foreground: 'E06CB0' },
        { token: 'operator', foreground: '9C6CE0' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'comment', foreground: '229977' },
    ],
    colors: {},
};
