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
        let globals = Object.values(this.json)[0] as Object[];
        let functions = Object.values(this.json)[1] as Object[];
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
            let keys = Object.keys(json);
            if (keys.includes('blocks'))
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
        return str;
    }
}

export default Graph;
