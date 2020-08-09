import _value from './_value';
import target from './target';
import label from './label';
import { ttNode, ttEdge } from '../TargetTree';

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
        let str = buffer + this.label.getName() + ' (' + this.opcode;
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

    public toData() {
        let json: { node: ttNode | null; edges: ttEdge[] } = {
            node: { label: this.label.getName(), opcode: this.opcode, operands: [] },
            edges: [],
        };
        this.operands.forEach((c) => json.node!.operands.push(c.getAlias()));
        this.next.forEach((n) => json.edges.push({ from: this.label.getName(), to: n.label.getName() }));
        if (this.opcode === 'LOOP') json.node = null;
        return json;
    }
}

export default branch;
