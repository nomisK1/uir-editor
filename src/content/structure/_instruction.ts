import _node, { INodeProps } from './_node';
import target from './target';

export interface IInstructionProps extends INodeProps {}

abstract class _instruction extends _node {
    // eslint-disable-next-line
    constructor(props: IInstructionProps) {
        super(props);
    }

    public abstract getTargets(): target[];
}

export default _instruction;
