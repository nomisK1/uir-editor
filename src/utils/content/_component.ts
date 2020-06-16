import node, { INodeProps } from './_node';

export interface IComponentProps extends INodeProps {}

abstract class component extends node {
    // eslint-disable-next-line
    constructor(props: IComponentProps) {
        super(props);
    }
}

export default component;
