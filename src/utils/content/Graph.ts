import range, { inRange } from '../editor/IRange';
import component from './_component';
import global from './global';
import declaration from './declaration';
import definition from './definition';
import allocation from './allocation';
import variable from './variable';

interface IGraphProps {
    query: string;
}

class Graph {
    private query: string;
    private components: component[];

    constructor(props: IGraphProps) {
        this.query = props.query;
        this.components = [];
        this.build();
    }

    private build() {
        let comps: component[] = [];
        // split query into globals, declarations, definitions
        const lines = this.query.split(/\n/);
        for (let i = 0; i < lines.length; i++) {
            const consts = lines[i].match(/const.*/g);
            if (consts) {
                const names = consts[0].match(/%[\w]*\[[\d]+\]/);
                comps.push(
                    new global({
                        name: names![0],
                        data: consts[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
            const declares = lines[i].match(/declare.*/g);
            if (declares) {
                const names = declares[0].match(/@[_\w]*/);
                comps.push(
                    new declaration({
                        name: names![0],
                        data: declares[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
            const defines = lines[i].match(/define.*/g);
            if (defines) {
                const names = defines[0].match(/@[_\w]*/);
                comps.push(
                    new definition({
                        name: names![0],
                        data: defines[0],
                        line: i + 1,
                        index: 0,
                        prev: comps.length > 0 ? comps[comps.length - 1] : null,
                        next: null,
                    }),
                );
            }
        }
        // add body to definitions
        const defines = this.query.match(/define[\s\S]*?}/g);
        defines?.forEach((s) => {
            const name = s.match(/@[_\w]*/)![0];
            comps.forEach((c) => {
                if (c.getName() === name) {
                    c.setData(s);
                }
            });
        });
        // add references to next object
        for (let i = 0; i < comps.length - 1; i++) {
            comps[i].setNext(comps[i + 1]);
        }
        // build components
        comps.forEach((c) => {
            c.build();
        });
        this.components = comps;
    }

    private getComponents() {
        return this.components;
    }

    private getGlobals() {
        let globals: global[] = [];
        this.components.forEach((c) => {
            if (c instanceof global) globals.push(c);
        });
        return globals;
    }

    private getDeclarations() {
        let declarations: declaration[] = [];
        this.components.forEach((c) => {
            if (c instanceof declaration) declarations.push(c);
        });
        return declarations;
    }

    private getDefinitions() {
        let definitions: definition[] = [];
        this.components.forEach((c) => {
            if (c instanceof definition) definitions.push(c);
        });
        return definitions;
    }

    private getAllocations() {
        let allocations: allocation[] = [];
        let defnitions = this.getDefinitions();
        defnitions.forEach((d) => {
            allocations.push(...d.getAllocations());
        });
        return allocations;
    }

    private getNode(line: number, column: number) {}

    private getAllVariables() {
        let vars: variable[] = [];
        this.components.forEach((c) => {
            vars.push(...c.getVariables());
        });
        return vars;
    }

    public findVariable(line: number, column: number) {
        let vars: variable[] = [];
        this.getAllVariables().forEach((v) => {
            if (inRange(v.getRange(), line, column)) return vars.push(v);
        });
        return vars;
    }

    public findVariables(name: string) {
        let vars: variable[] = [];
        this.getAllVariables().forEach((v) => {
            if (v.isCalled(name)) {
                vars.push(v);
            }
        });
        return vars;
    }

    public getVariableRanges(vars: variable[]) {
        let ranges: range[] = [];
        vars.forEach((v) => {
            ranges.push(v.getRange());
        });
        return ranges;
    }

    private getVariableChildren(name: string) {
        let allocations = this.getAllocations();
        let children: variable[] = [];
        for (let i = 0; i < allocations.length; i++) {
            if (allocations[i].hasParent(name)) children.push(allocations[i].getChild()!);
        }
        return children;
    }

    private getVariableParents(name: string) {
        let parents: variable[] = [];
        this.getAllVariables().forEach((v) => {
            if (v.isCalled(name)) {
                parents.push(...v.getParents());
            }
        });
        return parents;
    }

    // level: ...-2->grandparents, -1->parents, 0->[], 1-> children, 2->grandchildren...
    private getVariableRelatives(name: string, level: number) {
        if (level === 0) return [];
        let relatives = this.findVariables(name);
        if (level < 0) {
            level = Math.abs(level);
            relatives.push(...this.getVariableParents(name));
            for (let i = 1; i < level; i++) {
                let temp: variable[] = [];
                relatives.forEach((r) => {
                    temp.push(...this.getVariableParents(r.getName()));
                });
                relatives = this.removeDuplicates(temp);
            }
            return relatives;
        } else {
            relatives.push(...this.getVariableChildren(name));
            for (let i = 1; i < level; i++) {
                let temp: variable[] = [];
                relatives.forEach((r) => {
                    temp.push(...this.getVariableChildren(r.getName()));
                });
                relatives = this.removeDuplicates(temp);
            }
            return relatives;
        }
    }

    public getVariableParentsTree(name: string) {
        let tree: variable[] = [];
        for (let i = 1; i < 10; i++) {
            tree.push(...this.getVariableRelatives(name, -i));
        }
        return tree;
    }

    public getVariableChildrenTree(name: string) {
        let tree: variable[] = [];
        for (let i = 1; i < 10; i++) {
            tree.push(...this.getVariableRelatives(name, i));
        }
        return tree;
    }

    public getVariableBalancedTree(name: string) {
        let tree: variable[] = [];
        for (let i = -10; i <= 10; i++) {
            tree.push(...this.getVariableRelatives(name, i));
        }
        return tree;
    }

    private removeDuplicates(array: variable[]) {
        return array.filter((a, b) => array.indexOf(a) === b);
    }

    public print() {
        console.log(this);
    }
}

export default Graph;
