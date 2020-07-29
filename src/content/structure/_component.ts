import _node, { INodeProps, Type } from './_node';

export interface IComponentProps extends INodeProps {}

abstract class _component extends _node {
    protected type: string | null;

    constructor(props: IComponentProps) {
        super(props);
        this.type = Type.CONST;
    }
}

export default _component;
