/**
 * config:
 * Define Monaco language data
 */

import * as monaco from 'monaco-editor';

export const languageID = 'umbraIR';

export const languageExtensionPoint: monaco.languages.ILanguageExtensionPoint = {
    id: languageID,
};
