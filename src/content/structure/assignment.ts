import * as monaco from 'monaco-editor';
import _node from './_node';
import { indentation } from './block';
import _instruction, { IInstructionProps } from './_instruction';
import operation from './operation';
import variable, { findVariableRangeIn } from './variable';

interface IAssignmentProps extends IInstructionProps {}

class assignment extends _instruction {
    protected destination: variable;
    protected operation: operation;

    constructor(props: IAssignmentProps) {
        super(props);
        this.destination = new variable({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.operation = new operation({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.destination.setParents(this.operation.getVariables());
        this.name = 'assignment@line:' + this.line;
        this.findRanges();
    }

    public findRanges() {
        findVariableRangeIn(this.destination, this.toString(), indentation);
        this.operation.findRanges();
        this.range = new monaco.Range(this.line, indentation, this.line, this.toString().length + indentation);
    }

    public toString() {
        return '%' + this.destination.getAlias() + ' = ' + (this.operation ? this.operation.toString() : '');
    }

    public getNodes() {
        return [this, this.destination, ...this.operation.getNodes()];
    }

    public getVariables() {
        return [this.destination, ...this.operation.getVariables()];
    }

    public getNodeAt(position: monaco.Position): _node | null {
        if (this.destination.getRange().containsPosition(position)) return this.destination.getNodeAt(position);
        if (this.operation.getRange().containsPosition(position)) return this.operation.getNodeAt(position);
        return this;
    }

    public getDestination() {
        return this.destination;
    }

    public getOperation() {
        return this.operation;
    }

    public getTargets() {
        return this.operation.getTargets();
    }

    public hasParent(name: string) {
        return this.operation.hasVariable(name);
    }
}

export default assignment;
