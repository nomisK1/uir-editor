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
                    line: this.line,
                    index: this.data.indexOf(a),
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
        let line = this.line + 2;
        blocks.forEach((b) => {
            let label = b.split(':')[0];
            let target = new variable({
                name: '%' + label,
                data: 'Target:' + label + ':Active@l:' + this.line + '->' + this.getLastLineNumber(),
                line: line,
                index: 0,
                prev: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].getTarget() : null,
                next: null,
                parents: null,
            });
            this.blocks.push(
                new block({
                    name: label,
                    data: b,
                    line: line,
                    index: 0,
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

    public getTargets(line: number) {
        let targets: variable[] = [];
        if (line >= this.line && line <= this.getLastLineNumber())
            this.blocks.forEach((b) => {
                targets.push(b.getTarget());
            });
        return targets;
    }

    public getLastLineNumber() {
        if (this.next === null) return 0;
        return this.next.getLine() - 2;
    }
}

export default definition;
