import _value from '../structure/_value';
import target from '../structure/target';
import label from '../structure/label';
import { treeJSON } from './TargetTree';

interface IBranchProps {
    label: label;
    targets: target[];
    opcode: string;
    operands: _value[];
    prev?: branch;
}

class branch {
    label: label;
    targets: target[];
    opcode: string;
    operands: _value[];
    prev?: branch;
    next: branch[] = [];

    constructor(props: IBranchProps) {
        this.label = props.label;
        this.targets = props.targets;
        this.opcode = props.opcode;
        this.operands = props.operands;
        this.prev = props.prev;
    }

    public print(depth: number) {
        let buffer = '|\t'.repeat(depth);
        let str = buffer + this.label.getAlias() + ' (' + this.opcode;
        if (this.operands.length) {
            str += ' ';
            this.operands.forEach((c) => (str += c.getAlias() + ', '));
            str = str.slice(0, -2);
        }
        str += ') {';
        if (this.next.length) {
            str += '\n';
            this.next.forEach((n) => (str += n.print(depth + 1) + '\n'));
            str += buffer;
        }
        return str + '}';
    }

    public toJSON(): treeJSON {
        return {
            id: this.label.getAlias() + (this.opcode === 'LOOP' ? '[!]' : ''),
            children: this.next.map((n) => n.toJSON()),
        };
    }
}

export default branch;
