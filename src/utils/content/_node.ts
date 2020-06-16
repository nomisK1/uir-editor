import Graph from './Graph';
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
    line: number;
    index: number;
    prev: node | null;
    next: node | null;
    context: Graph | node;
}

abstract class node {
    protected name: string;
    protected data: string;
    protected line: number;
    protected index: number;
    protected prev: node | null;
    protected next: node | null;
    protected context: Graph | node;

    constructor(props: INodeProps) {
        this.name = props.name;
        this.data = props.data;
        this.line = props.line;
        this.index = props.index;
        this.prev = props.prev;
        this.next = props.next;
        this.context = props.context;
    }

    public abstract build(): void;

    public abstract getVariables(): variable[];

    public getName() {
        return this.name;
    }

    public setData(data: string) {
        this.data = data;
    }

    public setNext(next: node | null) {
        this.next = next;
    }
}

export default node;
