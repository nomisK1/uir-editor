import node, { INodeProps } from './_node';
import instruction from './_instruction';
import allocation from './allocation';
import operation from './operation';
import variable from './variable';

// keyword: label (name)
interface IBlockProps extends INodeProps {}

class block extends node {
    protected instructions: instruction[];
    protected target: variable | null;

    constructor(props: IBlockProps) {
        super(props);
        this.instructions = [];
        this.target = null;
    }

    public build() {
        // create target reference
        this.target = new variable({
            name: '%' + this.name,
            data: 'TargetForBlock:' + this.name + '@l:' + this.line,
            line: this.line,
            index: this.index,
            prev: null,
            next: null,
            parents: null,
            context: this,
        });
        // split block into lines
        let lines = this.data.split(/\n/).slice(1);
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].trim();
        }
        // define instructions
        let i = 0;
        lines.forEach((l) => {
            let line = this.line + ++i;
            if (l.includes('=')) {
                this.instructions.push(
                    new allocation({
                        name: 'Allocation@l:' + line,
                        data: l,
                        line: line,
                        index: 2,
                        prev: this.instructions.length > 0 ? this.instructions[this.instructions.length - 1] : null,
                        next: null,
                        context: this,
                    }),
                );
            } else {
                this.instructions.push(
                    new operation({
                        name: 'Operation@l:' + line,
                        data: l,
                        line: line,
                        index: 2,
                        prev: this.instructions.length > 0 ? this.instructions[this.instructions.length - 1] : null,
                        next: null,
                        context: this,
                    }),
                );
            }
        });
        // add references to next instruction
        for (let i = 0; i < this.instructions.length - 1; i++) {
            this.instructions[i].setNext(this.instructions[i + 1]);
        }
        // build instructions
        this.instructions.forEach((i) => {
            i.build();
        });
    }

    public getVariables() {
        let vars: variable[] = [];
        vars.push(this.target!);
        this.instructions.forEach((i) => {
            vars.push(...i.getVariables());
        });
        return vars;
    }

    public getAllocations() {
        let allocations: allocation[] = [];
        this.instructions.forEach((i) => {
            if (i instanceof allocation) allocations.push(i);
        });
        return allocations;
    }
}

export default block;