import * as monaco from 'monaco-editor';
import _node, { Type, compareType, matchType, indexOfStrict, lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface IConstantProps extends IValueProps {}

class constant extends _value {
    constructor(props: IConstantProps) {
        super(props);
        this.type = matchType(lookupJSON(this.json, 'type'));
        let number = lookupJSON(this.json, 'const');
        if (compareType(Type.PTR, this.type) && number > 15) this.name = '0x' + number.toString(16);
        else this.name = '' + number;
    }

    public toString() {
        return (this.showType && this.type ? this.type + ' ' : '') + this.name;
    }

    public getNodes() {
        return [this];
    }

    public getVariables() {
        return [];
    }

    public getNodeAt(position: monaco.Position): _node | null {
        return this;
    }
}

export default constant;

/**
 * findConstantRangeIn:
 * Set Constant range in a text (call in the context!)
 */
export function findConstantRangeIn(constant: constant, text: string, offset?: number) {
    let name = constant.getName();
    let line = constant.getLastLine();
    let coloumn = indexOfStrict(name, text) + (offset ? offset : 0);
    constant.setRange(new monaco.Range(line, coloumn, line, coloumn + name.length));
    return text.replace(name, '%'.repeat(name.length));
}
