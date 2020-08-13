import { lookupJSON } from './_node';
import target, { ITargetProps } from './target';

interface ILabelProps extends ITargetProps {}

class label extends target {
    constructor(props: ILabelProps) {
        super(props);
        this.name = '' + lookupJSON(this.json, 'label');
    }

    public toString() {
        return this.getAlias() + ':';
    }
}

export default label;
