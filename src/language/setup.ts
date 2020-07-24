import * as monaco from 'monaco-editor';
import { languageExtensionPoint, languageID } from './config';
import { monarchLanguage, hoverProvider /* , highlightProvider, foldingProvider */ } from './uirLang';
import * as EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker'; // eslint-disable-line import/no-webpack-loader-syntax

export function setupLanguage() {
    (window as any).MonacoEnvironment = {
        getWorker: function (_moduleId: string, _label: string) {
            return new EditorWorker();
        },
    };
    monaco.languages.register(languageExtensionPoint);
    monaco.languages.onLanguage(languageID, () => {
        monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
        monaco.languages.registerHoverProvider(languageID, hoverProvider);
        //monaco.languages.registerDocumentHighlightProvider(languageID, highlightProvider);
        //monaco.languages.registerFoldingRangeProvider(languageID, foldingProvider);
    });
}
