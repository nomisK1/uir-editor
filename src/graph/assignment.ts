import * as monaco from 'monaco-editor';
import { offset } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import operation from './operation';
import variable, { findVariableRange } from './variable';

interface IAssignmentProps extends IInstructionProps {}

class assignment extends _instruction {
    protected operation: operation;
    protected destination: variable;

    constructor(props: IAssignmentProps) {
        super(props);
        this.operation = new operation({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.destination = new variable({
            json: this.json,
            line: this.line,
            context: this,
            parents: this.operation.getVariables(),
        });
        findVariableRange(this.destination, offset);
        this.name = 'assignment@line:' + this.line;
        this.range = new monaco.Range(this.line, offset, this.line, this.toString().length);
    }

    public getVariables() {
        return [this.destination, ...this.operation.getVariables()];
    }

    public toString() {
        return this.destination.toString() + ' = ' + this.operation.toString();
    }
}

export default assignment;
