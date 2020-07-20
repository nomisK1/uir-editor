import _node, { INodeProps } from './_node';

export interface IValueProps extends INodeProps {}

abstract class _value extends _node {
    protected showType?: true;

    constructor(props: IValueProps) {
        super(props);
    }
}

export default _value;
