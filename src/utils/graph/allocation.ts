import instruction, { IInstructionProps } from './_instruction';
import variable from './variable';
import operation from './operation';

// keyword: "="
interface IAllocationProps extends IInstructionProps {}

class allocation extends instruction {
    protected target: variable | null;
    protected operation: operation | null;

    constructor(props: IAllocationProps) {
        super(props);
        this.target = null;
        this.operation = null;
    }

    public build() {
        // split assignment on "="
        let sides = this.data.split(/=/);
        for (let i = 0; i < sides.length; i++) {
            sides[i] = sides[i].trim();
        }
        // define target and operation
        this.operation = new operation({
            name: 'Operation@l:' + this.line,
            data: sides[1],
            line: this.line,
            index: sides[0].length + 5,
            prev: null,
            next: null,
        });
        this.operation.build();
        this.target = new variable({
            name: sides[0],
            data: this.data,
            line: this.line,
            index: 2,
            prev: this.operation,
            next: null,
            parents: this.operation.getVariables(),
        });
        // add reference to target
        this.operation.setNext(this.target);
    }

    public getVariables() {
        let vars: variable[] = [];
        vars.push(this.target!);
        vars.push(...this.operation!.getVariables());
        return vars;
    }
}

export default allocation;
