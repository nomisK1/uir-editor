import definition from './structure/definition';
import target from './structure/target';
import label from './structure/label';
import branch from './structure/branch';

interface ITargetTreeProps {
    root: target;
}

class TargetTree {
    context: definition;
    tree: branch[][];

    constructor(props: ITargetTreeProps) {
        this.context = props.root.getOuterContext() as definition;
        let root = this.context.getTargetTreeBranch(props.root);
        root.prev = null;
        let tree = [[root]];
        let branches = tree[0][0].targets.map((t) => this.context.getTargetTreeBranch(t));
        while (branches.length > 0) {
            let nextBranches: branch[] = [];
            let level: branch[] = [];
            branches.forEach((b) => {
                let labels: label[] = [];
                tree.forEach((i) => i.forEach((j) => labels.push(j.label)));
                if (labels.includes(b.label)) level.push(new branch({ label: b.label, targets: [], conditions: [] }));
                else {
                    level.push(b);
                    b.targets.forEach((t) => nextBranches.push(this.context.getTargetTreeBranch(t)));
                }
            });
            tree.push(level);
            branches = nextBranches;
        }
        this.tree = tree;
    }

    public print() {
        let str = '';
        for (let i = 0; i < this.tree.length; i++) {
            for (let j = 0; j < this.tree[i].length; j++) {
                str += this.tree[i][j].toString();
            }
        }
        return str;
    }
}

export default TargetTree;
