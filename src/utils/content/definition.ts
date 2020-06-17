import * as monaco from 'monaco-editor';
import { Type } from './_node';
import functon, { IFunctonProps } from './_functon';
import block from './block';
import variable from './variable';
import allocation from './allocation';

// keyword: define | /define[^}]*}/
interface IDefinitionProps extends IFunctonProps {}

class definition extends functon {
    protected blocks: block[];

    constructor(props: IDefinitionProps) {
        super(props);
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
                    prev: this.args.length > 0 ? this.args[this.args.length - 1] : null,
                    next: null,
                    parents: null,
                }),
            );
        });
        // add references to next variable
        for (let i = 0; i < this.args.length - 1; i++) {
            this.args[i].setNext(this.args[i + 1]);
        }
        // match blocks
        let body = this.data.match(/{[\s\S]*?}/)![0];
        let blocks = body.slice(2, body.length - 2).split(/\n\n/);
        blocks.forEach((b) => {
            let label = b.split(':')[0];
            let target = new variable({
                name: '%' + label,
                data: 'Target:' + label + '@l:' + line + 2,
                range: new monaco.Range(line + 2, 0, line + 2, label.length),
                prev: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].getTarget() : null,
                next: null,
                parents: null,
            });
            this.blocks.push(
                new block({
                    name: label,
                    data: b,
                    range: new monaco.Range(line + 2, 0, this.getLastLineNumber() - 1, 0),
                    prev: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1] : null,
                    next: null,
                    target,
                }),
            );
            line += b.match(/\n/g)!.length + 2;
        });
        // add references to next block
        for (let i = 0; i < this.blocks.length - 1; i++) {
            this.blocks[i].setNext(this.blocks[i + 1]);
        }
        // build blocks
        this.blocks.forEach((b) => {
            b.build();
        });
        // set range
        this.range = new monaco.Range(this.range.startLineNumber, 0, this.getLastLineNumber(), 0);
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

    private getLastLineNumber() {
        if (this.next === null) return this.range.endLineNumber;
        return this.next.getRange().startLineNumber - 2;
    }
}

export default definition;
