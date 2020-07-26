import * as monaco from 'monaco-editor';
import _node, { Type, matchType, indexOfStrict, lookupJSON } from './_node';
import _value, { IValueProps } from './_value';

interface IVariableProps extends IValueProps {}

class variable extends _value {
    protected parents: variable[] | null = null;
    protected alias?: string;

    constructor(props: IVariableProps) {
        super(props);
        if (lookupJSON(this.json, 'isConst')) {
            this.type = Type.GLOBAL;
            this.name = '' + lookupJSON(this.json, 'name');
        } else if (lookupJSON(this.json, 'global')) {
            this.type = Type.GLOBAL;
            this.showType = true;
            this.name = '' + lookupJSON(this.json, 'var');
        } else {
            this.type = matchType(lookupJSON(this.json, 'type'));
            let assigned = lookupJSON(this.json, 'dst');
            this.name = '' + (assigned ? assigned : lookupJSON(this.json, 'var'));
        }
    }

    public toString() {
        return (this.showType && this.type ? this.type + ' ' : '') + '%' + this.getAlias();
    }

    public getVariables() {
        return [this];
    }

    public getNodeAt(position: monaco.Position): _node | null {
        return this;
    }

    public isGlobal() {
        return this.type === Type.GLOBAL || this.type === Type.GLOBAL_;
    }

    public getParents() {
        if (this.parents === null) return [];
        return this.parents;
    }

    public setParents(parents: variable[] | null) {
        this.parents = parents;
    }

    public getAlias() {
        return this.alias ? this.alias : this.name!;
    }

    public setAlias(alias: string) {
        this.alias = alias;
    }
}

export default variable;

export function findVariableRange(variable: variable, offset?: number) {
    if (variable.getRange()) return variable.getRange();
    let name = variable.getAlias();
    let line = variable.getLastLine();
    let coloumn = indexOfStrict('%' + name, variable.getContext()!.toString()) + (offset ? offset : 0);
    variable.setRange(new monaco.Range(line, coloumn, line, coloumn + name.length + 1));
}
