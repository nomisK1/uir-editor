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

    constructor(props: IGraphProps) {
        this.json = props.json;
        this.components = [];
        this.variables = [];
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
        console.log(str);
        console.log(this);
        return str.slice(0, -1);
    }
}

export default Graph;
