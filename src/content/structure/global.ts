import * as monaco from 'monaco-editor';
import _node, { lookupJSON } from './_node';
import _component, { IComponentProps } from './_component';
import variable, { findVariableRangeIn } from './variable';

interface IGlobalProps extends IComponentProps {}

class global extends _component {
    protected size: number;
    protected data: string;
    protected variable: variable;

    constructor(props: IGlobalProps) {
        super(props);
        this.name = 'const(' + lookupJSON(this.json, 'name') + ')';
        this.size = lookupJSON(this.json, 'size');
        let data = lookupJSON(this.json, 'data');
        this.data = getUnicodeLiteral(data);
        this.variable = new variable({
            json: this.json,
            line: this.line,
            context: this,
        });
        this.findRanges();
    }

    public findRanges() {
        findVariableRangeIn(this.variable, this.toString());
        this.range = new monaco.Range(this.line, 0, this.line, this.toString().length);
    }

    public toString() {
        return 'const ' + this.variable.toString() + '[' + this.size + '] = "' + this.data + '"';
    }

    public getNodes() {
        return [this, this.variable];
    }

    public getVariables() {
        return this.variable.getVariables();
    }

    public getNodeAt(position: monaco.Position): _node | null {
        if (this.variable.getRange().containsPosition(position)) return this.variable.getNodeAt(position);
        return this;
    }
}

export default global;

/**
 * getUnicodeLiteral:
 * Convert every unreadable ascii character in a string to unicode format (\u****)
 */
function getUnicodeLiteral(str: string) {
    let ucl = '';
    for (let i = 0; i < str.length; i++) {
        let dec = str.charCodeAt(i);
        if (dec > 31 && dec < 127) ucl += str[i];
        else ucl += '\\u' + dec.toString(16).toUpperCase().padStart(4, '0');
    }
    return ucl;
}
