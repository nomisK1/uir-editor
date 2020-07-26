import _node, { INodeProps, Type } from './_node';

export interface IValueProps extends INodeProps {
    showType?: true;
}

abstract class _value extends _node {
    protected type: Type | null = null;
    protected showType?: true;

    constructor(props: IValueProps) {
        super(props);
        this.showType = props.showType;
    }
}

export default _value;
