import definition from './structure/definition';
import target from './structure/target';
import branch from './structure/branch';

interface ITargetTreeProps {
    root: target;
}

class TargetTree {
    context: definition;
    tree: branch[][];

    constructor(props: ITargetTreeProps) {
        let context = props.root.getOuterContext() as definition;
        let root = context.getTargetTreeBranch(props.root);
        let tree = [[root]];
        let branches = root.targets.map((t) => context.getTargetTreeBranch(t));
        branches.forEach((b) => (b.prev = root));
        while (branches.length > 0) {
            let nextBranches: branch[] = [];
            let level: branch[] = [];
            branches.forEach((b) => {
                let labels = tree.map((i) => i.map((j) => j.label)).flat();
                if (labels.includes(b.label))
                    level.push(new branch({ label: b.label, targets: [], opcode: 'LOOP', operands: [], prev: b.prev }));
                else {
                    level.push(b);
                    b.targets.forEach((t) => {
                        let nextBranch = context.getTargetTreeBranch(t);
                        nextBranch.prev = b;
                        nextBranches.push(nextBranch);
                    });
                }
            });
            tree.push(level);
            branches = nextBranches;
        }
        let flat = tree.flat();
        flat.forEach((f) => {
            flat.forEach((e) => {
                if (e.prev === f) f.next.push(e);
            });
        });
        this.context = context;
        this.tree = tree;
    }

    public print() {
        return this.tree[0][0].print(0);
    }

    public toData() {
        let json: treeData = { context: this.context.getName(), nodes: [], edges: [] };
        this.tree.flat().forEach((t) => {
            let elem = t.toData();
            if (elem.node) json.nodes.push(elem.node);
            json.edges.push(...elem.edges);
        });
        return json;
    }
}

export default TargetTree;

export interface treeData {
    context: string;
    nodes: {
        label: string;
        opcode: string;
        operands: string[];
    }[];
    edges: {
        from: string;
        to: string;
    }[];
}
