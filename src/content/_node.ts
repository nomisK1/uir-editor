import * as monaco from 'monaco-editor';
import variable from './variable';

export enum Type {
    NULL = 'null',
    VOID = 'void',
    BOOL = 'bool',
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
    POINTER = 'pointer',
    GLOBAL = 'global',
    OBJECT = 'object',
}

export interface INodeProps {
    name: string;
    data: string;
    range: monaco.Range;
    prev: node | null;
    next: node | null;
    context: node | null;
}

abstract class node {
    protected name: string;
    protected data: string;
    protected range: monaco.Range;
    protected prev: node | null;
    protected next: node | null;
    protected context: node | null;

    constructor(props: INodeProps) {
        this.name = props.name;
        this.data = props.data;
        this.range = props.range;
        this.prev = props.prev;
        this.next = props.next;
        this.context = props.context;
    }

    public abstract build(): void;

    public abstract findNodeAt(position: monaco.Position): node | null;

    public abstract getVariables(): variable[];

    public findVariables(name: string) {
        let vars: variable[] = [];
        this.getVariables().forEach((v) => {
            if (v.getName() === name) vars.push(v);
        });
        return vars;
    }

    public getFunctionName() {
        let matches = this.data.match(/_[\w]*/);
        return matches ? matches[0] : '';
    }

    public getNode() {
        return this;
    }

    public getName() {
        return this.name;
    }

    public getData() {
        return this.data;
    }

    public setData(data: string) {
        this.data = data;
    }

    public getRange() {
        return node.shiftRange(this.range);
    }

    public getPrev() {
        return this.prev;
    }

    public setPrev(prev: node | null) {
        this.prev = prev;
    }

    public getNext() {
        return this.next;
    }

    public setNext(next: node | null) {
        this.next = next;
    }

    public getContext() {
        return this.context;
    }

    public getOuterContext(): node {
        if (this.context) {
            return this.context.getOuterContext();
        }
        return this;
    }

    /**
     * shiftRange:
     * Shifts the Range by one column to the right
     */
    public static shiftRange(range: monaco.Range) {
        return range
            .setStartPosition(range.startLineNumber, range.startColumn + 1)
            .setEndPosition(range.endLineNumber, range.endColumn + 1);
    }

    /**
     * indexOfStrict:
     * Strict version of "string.indexOf"
     */
    public static indexOfStrict(string: string, text: string) {
        let regexp = new RegExp(string + '\\b');
        let index = text.search(regexp);
        return index;
    }

    /**
     * getNodeRanges:
     *
     */
    public static getNodeRanges(nodes: node[]) {
        return nodes.map((n) => n.getRange());
    }

    /**
     * removeDuplicates:
     *
     */
    public static removeDuplicates(array: node[]) {
        return array.filter((a, b) => array.indexOf(a) === b);
    }
}

export default node;
