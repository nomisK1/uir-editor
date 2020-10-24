/**
 * uirTheme:
 * Define Monaco theme data
 */

import * as monaco from 'monaco-editor';

export const themeID = 'umbraIRtheme';

export const monarchTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'syntax', foreground: 'FFFFFF' },
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'function', foreground: '7FE06C' },
        { token: 'label', foreground: 'E09C6C' },
        { token: 'constdeclaredefine', foreground: 'E06CB0' },
        { token: 'statement', foreground: 'D66CE0' },
        { token: 'operator', foreground: '9C6CE0' },
        { token: 'type', foreground: '5F73E5' },
        { token: 'constant', foreground: 'FEBF9C' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'comment', foreground: '229977' },
    ],
    colors: {
        cursor: '#FFFF00',
        variable: '#264F78',
        select: '#784F26',
        parent: '#78264F',
        child: '#267878',
        bookmark: '#390978',
        note: '#787826',
    },
};
