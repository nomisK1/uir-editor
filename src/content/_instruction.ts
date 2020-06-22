import node, { INodeProps } from './_node';

export interface IInstructionProps extends INodeProps {}

abstract class instruction extends node {
    // eslint-disable-next-line
    constructor(props: IInstructionProps) {
        super(props);
    }
}

export default instruction;
