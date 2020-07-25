import _node, { INodeProps } from './_node';

export interface IInstructionProps extends INodeProps {}

abstract class _instruction extends _node {
    // eslint-disable-next-line
    constructor(props: IInstructionProps) {
        super(props);
    }
}

export default _instruction;
