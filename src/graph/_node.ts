import * as monaco from 'monaco-editor';
import variable from './variable';

export enum Type {
    VOID = 'void',
    VOID_ = 'void*',
    BOOL = 'bool',
    BOOL_ = 'bool*',
    CONST = 'const',
    CONST_ = 'const*',
    I8 = 'i8',
    I8_ = 'i8*',
    INT8 = 'int8',
    INT8_ = 'int8*',
    I16 = 'i16',
    I16_ = 'i16*',
    INT16 = 'int16',
    INT16_ = 'int16*',
    I32 = 'i32',
    I32_ = 'i32*',
    INT32 = 'int32',
    INT32_ = 'int32*',
    I64 = 'i64',
    I64_ = 'i64*',
    INT64 = 'int64',
    INT64_ = 'int64*',
    D128 = 'd128',
    D128_ = 'd128*',
    DATA128 = 'data128',
    DATA128_ = 'data128*',
    DOUBLE = 'double',
    DOUBLE_ = 'double*',
    PTR = 'ptr',
    PTR_ = 'ptr*',
    POINTER = 'pointer',
    POINTER_ = 'pointer*',
    GLOBAL = 'global',
    GLOBAL_ = 'global*',
    OBJECT = 'object',
    OBJECT_ = 'object*',
}

export interface INodeProps {
    json: Object;
    line: number;
    context: _node | null;
}

abstract class _node {
    protected json: Object;
    protected line: number;
    protected context: _node | null;
    protected name: string | null;
    protected range: monaco.Range | null;

    constructor(props: INodeProps) {
        this.json = props.json;
        this.line = props.line;
        this.context = props.context;
        this.name = null;
        this.range = null;
    }

    public abstract toString(): string;

    public abstract getVariables(): variable[];

    public getLastLine() {
        return this.line;
    }

    public getContext() {
        return this.context;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getRange() {
        return this.range;
    }

    public setRange(range: monaco.Range) {
        this.range = range;
    }
}

export default _node;

export function matchType(str: string | null) {
    if (!str) return null;
    if (str.toUpperCase().startsWith(Type.OBJECT.toUpperCase()))
        if (str.endsWith('*')) return Type.OBJECT_;
        else return Type.OBJECT;
    let types = Object.values(Type);
    for (let i = 0; i < types.length; i++) {
        if (str.toUpperCase() === types[i].toUpperCase()) return types[i];
    }
    return null;
}

/**
 * indexOfStrict:
 * Strict version of "string.indexOf"
 */
export function indexOfStrict(string: string, text: string) {
    let regexp = new RegExp(string + '\\b');
    let index = text.search(regexp);
    return index;
}

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
