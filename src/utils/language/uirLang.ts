import * as monaco from 'monaco-editor';
import D from '../editor/Decorations';

export const monarchLanguage: monaco.languages.IMonarchLanguage = {
    // defaultToken: "invalid",
    ignoreCase: true,
    tokenizer: {
        root: [
            [/%[\w]*/, 'variable'],
            [/_[\w]*|@[_\w]*/, 'function'],
            [/^[\w]+:/, 'label'],
            [/i(nt)?(8|32|64)|d(ata)?128|bool|global|ptr|void|object|[\w]+::[\w]+(::[\w]+)?/, 'type'],
            [/true|false|0x[\w]+|\d+/, 'constant'],
            [/return|returnvoid|br|condbr|unreachable/, 'statement'],
            [/const|declare|define/, 'constdeclaredefine'],
            [
                /ashr|add|and|atomiccmpxchg|atomicload|atomicrmwadd|atomicrmwumax|atomicrmwxchg|atomicstore|bswap|builddata128|call|callbuiltin|checkedsadd|checkedsmul|checkedssub|cmpeq|cmpne|cmpsle|cmpslt|cmpsuole|cmpsuolt|cmpule|cmpult|crc32|ctlz|extractdata128|fptosi|functionargument|functionvariable|gep|getelementptr|globalref|headerptrpair|inttoptr|isnotnull|isnull|lshr|load|mul|neg|not|or|overflowresult|phi|pow|ptrtoint|rotl|rotr|saddoverflow|sdiv|sext|sitofp|smuloverflow|srem|ssuboverflow|select|shl|store|sub|switch|trunc|uaddoverflow|udiv|umuloverflow|urem|usuboverflow|xor|zext/,
                'operator',
            ],
            [/".*"/, 'string'],
            [/(\/\/).*/, 'comment'],
        ],
    },
};

export const hoverProvider: monaco.languages.HoverProvider = {
    provideHover: function (model, position) {
        const d = D.getInstance();
        let iWord = model.getWordAtPosition(position);
        let dummy = {
            range: new monaco.Range(0, 0, 0, 0),
            contents: [{ value: '' }],
        };
        if (iWord) {
            d.resetDecorations();
            d.setDecorations(d.findDecorationsHover(position));
            return dummy;
        } else {
            d.resetDecorations();
            return dummy;
        }
    },
};

export const highlightProvider: monaco.languages.DocumentHighlightProvider = {
    provideDocumentHighlights: function (model, position, token) {
        //let iWord = model.getWordAtPosition(position);
        return new Promise(function (resolve, reject) {
            let ranges: monaco.Range[] = D.getInstance().findDecorationsClick(position);
            let targets: monaco.languages.DocumentHighlight[] = [];
            ranges.forEach((r) => {
                targets = [...targets, { range: r }];
            });
            resolve(targets);
        });
    },
};
