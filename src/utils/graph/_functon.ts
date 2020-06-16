import { Type } from './_node';
import component, { IComponentProps } from './_component';
import variable from './variable';

// definitions and declarations
export interface IFunctonProps extends IComponentProps {}

abstract class functon extends component {
    protected type: Type;
    protected args: variable[];

    constructor(props: IFunctonProps) {
        super(props);
        this.type = Type.VOID;
        this.args = [];
    }
}

export default functon;
