import * as monaco from 'monaco-editor';
import variable from './variable';

/**
 * Type:
 * Define node types
 */
export enum Type {
    VOID = 'void',
    BOOL = 'bool',
    CONST = 'const',
    I8 = 'i8',
    INT8 = 'int8',
    I16 = 'i16',
    INT16 = 'int16',
    I32 = 'i32',
    INT32 = 'int32',
    I64 = 'i64',
    INT64 = 'int64',
    D128 = 'd128',
    DATA128 = 'data128',
    DOUBLE = 'double',
    PTR = 'ptr',
    GLOBAL = 'global',
    OBJECT = 'object',
}

export interface INodeProps {
    json: Object;
    line: number;
    context: _node | null;
}

/**
 * _node:
 * Basic node for the Graph structure
 */
abstract class _node {
    protected json: Object;
    protected line: number;
    protected context: _node | null;
    protected name: string | null = null;
    protected range: monaco.Range | null = null;

    constructor(props: INodeProps) {
        this.json = props.json;
        this.line = props.line;
        this.context = props.context;
    }

    public abstract findRanges(): void;

    public abstract toString(): string;

    public abstract getNodes(): _node[];

    public abstract getVariables(): variable[];

    public abstract getNodeAt(position: monaco.Position): _node | null;

    public getHelp() {
        let start = this.getRange().getStartPosition();
        let end = this.getRange().getEndPosition();
        return (
            'CLASS: ' +
            this.constructor.name +
            '\nNAME: ' +
            this.getAlias() +
            '\nSTART: [' +
            start.lineNumber +
            '/' +
            start.column +
            ']\nEND: [' +
            end.lineNumber +
            '/' +
            end.column +
            ']'
        );
    }

    public getVariablesByName(name: string) {
        let vars: variable[] = [];
        this.getVariables().forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    public getLastLine() {
        return this.line;
    }

    public getContext() {
        return this.context;
    }

    public getOuterContext(): _node {
        if (this.context) {
            return this.context.getOuterContext();
        }
        return this;
    }

    public getName() {
        return this.name!;
    }

    public getAlias() {
        return this.name!;
    }

    private getRangeShifted() {
        return this.range
            ? this.range
                  .setStartPosition(this.range.startLineNumber, this.range.startColumn + 1)
                  .setEndPosition(this.range.endLineNumber, this.range.endColumn + 1)
            : null;
    }

    public getRange() {
        return this.getRangeShifted()!;
    }

    public setRange(range: monaco.Range) {
        this.range = range;
    }
}

export default _node;

//--------------------------------------------------
//-----Helpers-----
//--------------------------------------------------

export function compareType(type: Type | null, str: string | null) {
    if (!type || !str) return false;
    return str.toUpperCase().includes(type.toUpperCase());
}

export function matchType(str: string | null) {
    if (!str) return null;
    let types = Object.values(Type);
    for (let i = 0; i < types.length; i++) if (str.toUpperCase().includes(types[i].toUpperCase())) return str;
    return null;
}

/**
 * indexOfStrict:
 * Strict version of "string.indexOf"
 */
export function indexOfStrict(string: string, text: string) {
    let regexp = new RegExp('[\\s|\\(|\\[]' + string + '\\b');
    return text.search(regexp) + 1;
}

/**
 * lookupJSON:
 * Extract JSON data
 */
export function lookupJSON(json: Object, key: string) {
    let keys = Object.keys(json);
    let values = Object.values(json);
    let i = 0;
    while (i < keys.length) {
        if (keys[i] === key) return values[i];
        i++;
    }
    return null;
}
