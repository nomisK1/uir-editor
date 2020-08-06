import _node, { INodeProps } from './_node';

export interface IValueProps extends INodeProps {
    showType?: true;
}

abstract class _value extends _node {
    protected type: string | null = null;
    protected showType?: true;

    constructor(props: IValueProps) {
        super(props);
        this.showType = props.showType;
    }

    // Should always be called in the context
    public findRanges() {}

    public getAlias() {
        return this.name!;
    }
}

export default _value;
