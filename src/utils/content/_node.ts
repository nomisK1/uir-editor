import * as monaco from 'monaco-editor';
import variable from './variable';

export enum Type {
    VOID = 'void',
    BOOL = 'bool',
    INT8 = 'int8',
    INT16 = 'int16',
    INT32 = 'int32',
    INT64 = 'int64',
    DATA128 = 'data128',
    DOUBLE = 'double',
    POINTER = 'pointer',
}

export interface INodeProps {
    name: string;
    data: string;
    range: monaco.Range;
    prev: node | null;
    next: node | null;
}

abstract class node {
    protected name: string;
    protected data: string;
    protected range: monaco.Range;
    protected prev: node | null;
    protected next: node | null;

    constructor(props: INodeProps) {
        this.name = props.name;
        this.data = props.data;
        this.range = props.range;
        this.prev = props.prev;
        this.next = props.next;
    }

    public abstract build(): void;

    public abstract getVariables(): variable[];

    //public abstract findNode(line: number, column: number): node | null;

    public getNode() {
        return this;
    }

    public getName() {
        return this.name;
    }

    public getRange() {
        return this.range;
    }

    public setData(data: string) {
        this.data = data;
    }

    public getData() {
        return this.data;
    }

    public setNext(next: node | null) {
        this.next = next;
    }

    public getNext() {
        return this.next;
    }
}

export default node;
