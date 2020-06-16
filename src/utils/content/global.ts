import component, { IComponentProps } from './_component';
import variable from './variable';

// keyword: const | /const.*/
interface IGlobalProps extends IComponentProps {}

class global extends component {
    protected variable: variable | null;

    constructor(props: IGlobalProps) {
        super(props);
        this.variable = null;
    }

    public build() {
        this.variable = new variable({
            name: this.name.match(/%[\w]*/)![0],
            data: this.data,
            line: this.line,
            index: this.index + 6,
            prev: this.prev,
            next: this.prev,
            parents: null,
        });
    }

    public getVariables() {
        return [this.variable!];
    }
}

export default global;
