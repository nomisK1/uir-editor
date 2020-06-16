import node, { INodeProps } from './_node';
import instruction from './_instruction';
import allocation from './allocation';
import operation from './operation';
import variable from './variable';

// keyword: label (name)
interface IBlockProps extends INodeProps {}

class block extends node {
    protected instructions: instruction[];

    constructor(props: IBlockProps) {
        super(props);
        this.instructions = [];
    }

    public build() {
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
        this.instructions.forEach((i) => {
            vars.push(...i.getVariables());
        });
        return vars;
    }
}

export default block;
