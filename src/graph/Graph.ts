import { lookupJSON } from './_node';
import _component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import variable from './variable';

interface IGraphProps {
    json: Object;
}

class Graph {
    private json: Object;
    private components: _component[];
    private variables: variable[];
    private current: variable | null;
    private next: variable | undefined;
    private currentParents: variable[];
    private currentChildren: variable[];
    private ancestors: variable[];

    constructor(props: IGraphProps) {
        this.json = props.json;
        this.components = [];
        this.variables = [];
        this.current = null;
        this.next = undefined;
        this.currentParents = [];
        this.currentChildren = [];
        this.ancestors = [];
        this.build();
    }

    private build() {
        let line = 1;
        let globals = lookupJSON(this.json, 'globals') as Object[];
        let functions = lookupJSON(this.json, 'functions') as Object[];
        globals.forEach((json) => {
            this.components.push(
                new global({
                    json,
                    line,
                    context: null,
                }),
            );
            line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        functions.forEach((json) => {
            if (lookupJSON(json, 'blocks'))
                this.components.push(
                    new definition({
                        json,
                        line,
                        context: null,
                    }),
                );
            else
                this.components.push(
                    new declaration({
                        json,
                        line,
                        context: null,
                    }),
                );
            line = this.components[this.components.length - 1].getLastLine() + 2;
        });
        this.components.forEach((c) => {
            this.variables.push(...c.getVariables());
        });
    }

    public print() {
        let str = '';
        this.components.forEach((c) => {
            str += c.toString() + '\n\n';
        });
        return str.slice(0, -1);
    }

    public log() {
        console.log(this);
    }
}

export default Graph;
