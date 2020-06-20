import * as monaco from 'monaco-editor';

export const themeID = 'umbraIRtheme';

export const monarchTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'function', foreground: 'E09C6C' },
        { token: 'label', foreground: 'fEBF9C' },
        { token: 'type', foreground: '9CABFE' },
        { token: 'constant', foreground: 'CE788B' },
        { token: 'statement', foreground: 'E06CB0' },
        { token: 'constdeclaredefine', foreground: 'D66CE0' },
        { token: 'operator', foreground: 'E06C76' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'comment', foreground: '229977' },
    ],
    colors: {},
};
