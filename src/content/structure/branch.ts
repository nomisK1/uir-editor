import variable from './variable';
import target from './target';
import label from './label';

interface IBranchProps {
    label: label;
    targets: target[];
    conditions: variable[];
    prev?: label | null;
}

class branch {
    label: label;
    targets: target[];
    conditions: variable[];
    prev?: label | null;

    constructor(props: IBranchProps) {
        this.label = props.label;
        this.targets = props.targets;
        this.conditions = props.conditions;
        this.prev = props.prev;
    }

    public toString() {
        let str = this.label.getName() + ' (';
        if (this.conditions.length) {
            this.conditions.forEach((c) => (str += c.getName() + ', '));
            str = str.slice(0, -2);
        }
        return str + ') {';
    }
}

export default branch;
