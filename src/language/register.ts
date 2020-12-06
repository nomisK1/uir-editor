/**
 * register:
 * Define Monaco language data
 */

import * as monaco from 'monaco-editor';
import { monarchLanguage, hoverProvider, highlightProvider, foldingProvider } from './uirLang';
import * as EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker'; // eslint-disable-line import/no-webpack-loader-syntax

export const languageID = 'umbraIR';

/**
 * registerLanguage:
 * Connect Monaco language and features to the environment
 */
export function registerLanguage() {
    (window as any).MonacoEnvironment = {
        getWorker: function (_moduleId: string, _label: string) {
            return new EditorWorker();
        },
    };
    monaco.languages.register({ id: languageID });
    monaco.languages.onLanguage(languageID, () => {
        monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
        monaco.languages.registerHoverProvider(languageID, hoverProvider);
        monaco.languages.registerDocumentHighlightProvider(languageID, highlightProvider);
        monaco.languages.registerFoldingRangeProvider(languageID, foldingProvider);
    });
}
