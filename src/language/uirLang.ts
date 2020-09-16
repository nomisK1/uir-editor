/**
 * uirLang:
 * Define Monaco language features
 */

import * as monaco from 'monaco-editor';
import S from './Singleton';

export const monarchLanguage: monaco.languages.IMonarchLanguage = {
    defaultToken: 'invalid',
    ignoreCase: true,
    tokenizer: {
        root: [
            [/=|,|\(|\)|\[|\]|{|}/, 'syntax'],
            [/%[\w]*/, 'variable'],
            [/@?umbra(::[\w]*)*(?=\()|@[\w_]*/, 'function'],
            [/^[\w]+:/, 'label'],
            [/const |declare |define /, 'constdeclaredefine'],
            [/return|returnvoid|br|condbr|unreachable/, 'statement'],
            [
                /ashr|add|and|atomiccmpxchg|atomicload|atomicrmwadd|atomicrmwumax|atomicrmwxchg|atomicstore|bswap|builddata128|call|callbuiltin|checkedsadd|checkedsmul|checkedssub|cmpeq|cmpne|cmpsle|cmpslt|cmpsuole|cmpsuolt|cmpule|cmpult|crc32|ctlz|extractdata128|fptosi|functionargument|functionvariable|gep|getelementptr|globalref|headerptrpair|inttoptr|isnotnull|isnull|lshr|load|mul|neg|not|or|overflowresult|phi|pow|ptrtoint|rotl|rotr|saddoverflow|sdiv|sext|sitofp|smuloverflow|srem|ssuboverflow|select|shl|store|sub|switch|trunc|uaddoverflow|udiv|umuloverflow|urem|usuboverflow|xor|zext/,
                'operator',
            ],
            [
                /(i(nt)?(8|32|64)?|d(ata)?128|bool|char|const|global|long|ptr|void|object|unsigned|umbra(::[\w|&]*)*)\*?/,
                'type',
            ],
            [/true|false|0x[\w]+|-?\d+/, 'constant'],
            [/".*"/, 'string'],
            [/(\/\/).*/, 'comment'],
        ],
    },
};

export const hoverProvider: monaco.languages.HoverProvider = {
    provideHover: function (_model, position) {
        return new Promise(function (resolve, _reject) {
            const editor = S.getInstance().getEditor();
            if (editor) {
                editor.decorateVariable(position);
                let cHover = editor.getCommentHover(position);
                let tHover = editor.getTargetTreeHover(position);
                resolve(cHover ? cHover : tHover);
            }
            resolve({
                range: new monaco.Range(0, 0, 0, 0),
                contents: [{ value: '' }],
            });
        });
    },
};

export const highlightProvider: monaco.languages.DocumentHighlightProvider = {
    provideDocumentHighlights: function (_model, position, _token) {
        return new Promise(function (resolve, reject) {
            const editor = S.getInstance().getEditor();
            if (editor) resolve(editor.highlightNodes(position));
            reject(null);
        });
    },
};

export const foldingProvider: monaco.languages.FoldingRangeProvider = {
    provideFoldingRanges: function (_model, _context, _token) {
        return new Promise(function (resolve, reject) {
            const editor = S.getInstance().getEditor();
            if (editor) resolve(editor.getFoldingRanges());
            reject(null);
        });
    },
};
