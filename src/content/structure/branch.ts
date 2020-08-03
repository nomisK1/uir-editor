import variable from './variable';
import target from './target';
import label from './label';

interface IBranchProps {
    label: label;
    targets: target[];
    conditions: variable[];
    prev?: branch;
}

class branch {
    label: label;
    targets: target[];
    conditions: variable[];
    prev?: branch;
    next: branch[] = [];

    constructor(props: IBranchProps) {
        this.label = props.label;
        this.targets = props.targets;
        this.conditions = props.conditions;
        this.prev = props.prev;
    }

    public print(depth: number) {
        let buffer = '\t'.repeat(depth);
        let str = buffer + this.label.getName() + ' (';
        if (this.conditions.length) {
            this.conditions.forEach((c) => (str += c.getName() + ', '));
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
}

export default branch;