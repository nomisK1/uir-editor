import * as monaco from 'monaco-editor';
import { Type } from './_node';
import component, { IComponentProps } from './_component';
import block from './block';
import allocation from './allocation';
import operation from './operation';
import variable from './variable';

// keyword: define | /define[^}]*}/
interface IDefinitionProps extends IComponentProps {}

class definition extends component {
    protected type: Type;
    protected args: variable[];
    protected blocks: block[];

    constructor(props: IDefinitionProps) {
        super(props);
        this.type = Type.VOID;
        this.args = [];
        this.blocks = [];
    }

    public build() {
        let line = this.range.startLineNumber;
        // match type
        let type = this.data.match(/define(.*?)@/)![1].trim();
        let types = Object.values(Type);
        types.forEach((t) => {
            let str = '' + t;
            if (str === type) {
                this.type = t;
            }
        });
        // match args
        let argument = this.data.match(/\((.*?)\)/)![1];
        let args = argument.match(/%[\w]*/g);
        args?.forEach((a) => {
            this.args.push(
                new variable({
                    name: a,
                    data: argument,
                    range: new monaco.Range(line, this.data.indexOf(a), line, this.data.indexOf(a) + a.length),
                    prev: /* this.args.length > 0 ? this.args[this.args.length - 1] :  */ null,
                    next: null,
                    parents: null,
                    context: this,
                }),
            );
        });
        // add references to next variable
        /* for (let i = 0; i < this.args.length - 1; i++) {
            this.args[i].setNext(this.args[i + 1]);
        } */
        // match blocks
        let body = this.data.match(/{[\s\S]*?}/)![0];
        let blocks = body.slice(2, body.length - 2).split(/\n\n/);
        blocks.forEach((b) => {
            let label = b.split(':')[0];
            let target = new variable({
                name: '%' + label,
                data: 'Block:' + label + '@l:' + (line + 2),
                range: new monaco.Range(line + 2, 0, line + 2, label.length),
                prev: /* this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].getTarget() :  */ null,
                next: null,
                parents: null,
                context: this,
            });
            this.blocks.push(
                new block({
                    name: '%' + label,
                    data: b,
                    range: new monaco.Range(line + 2, 0, this.getLastLineNumber() - 1, 0),
                    prev: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1] : null,
                    next: null,
                    target,
                    context: this,
                }),
            );
            line += b.match(/\n/g)!.length + 2;
        });
        // add references to next block
        for (let i = 0; i < this.blocks.length - 1; i++) {
            this.blocks[i].setNext(this.blocks[i + 1]);
            /* this.blocks[i].getTarget().setNext(this.blocks[i + 1].getTarget()); */
        }
        // build blocks
        this.blocks.forEach((b) => {
            b.build();
        });
        // set range
        this.range = new monaco.Range(this.range.startLineNumber, 0, this.getLastLineNumber(), 0);
    }

    public findNodeAt(position: monaco.Position): component | null {
        for (let i = 0; i < this.args.length; i++) {
            if (this.args[i].getRange().containsPosition(position)) return this.args[i].findNodeAt(position);
        }
        for (let i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].getRange().containsPosition(position)) return this.blocks[i].findNodeAt(position);
        }
        return this;
    }

    public getVariables() {
        let vars: variable[] = [];
        this.args.forEach((a) => {
            vars.push(...a.getVariables());
        });
        this.blocks.forEach((b) => {
            vars.push(...b.getVariables());
        });
        return vars;
    }

    public getAllocations() {
        let allocations: allocation[] = [];
        this.blocks.forEach((b) => {
            allocations.push(...b.getAllocations());
        });
        return allocations;
    }

    public getOperations() {
        let operations: operation[] = [];
        this.blocks.forEach((b) => {
            operations.push(...b.getOperations());
        });
        return operations;
    }

    private getLastLineNumber() {
        if (this.next === null) return this.range.endLineNumber;
        return this.next.getRange().startLineNumber - 1;
    }
}

export default definition;
