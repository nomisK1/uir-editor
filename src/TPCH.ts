import Graph from './content/Graph';

const url: string = 'http://localhost:8000/';
let uir: string[] = [];
let jsons: Object[] = [];
let strings: string[] = [];
let graphs: Graph[] = [];

function generateText(json: Object) {
    let text = '';
    // GLOBALS
    let globals = Object.values(json)[0] as Object[];
    globals.forEach((g) => {
        text += stringifyGlobal(g);
    });
    // FUNCTIONS
    let functions = Object.values(json)[1] as Object[];
    functions.forEach((f) => {
        console.log(Object.entries(f));
        let keys = Object.keys(f);
        if (keys.includes('blocks')) text += stringifyDefinition(f);
        else text += stringifyDeclaration(f);
    });
    console.log(functions);
    return text.slice(0, -1);
}

function stringifyGlobal(global: Object) {
    let name = Object.values(global)[1];
    let size = Object.values(global)[2];
    let data = Object.values(global)[3];
    return 'const %' + name + '[' + size + '] = "' + data + '"\n\n';
}

function stringifyDeclaration(declaration: Object) {
    let name = Object.values(declaration)[0];
    let returnType = Object.values(declaration)[1];
    let args = stringifyArgs(Object.values(declaration)[2]);
    return 'declare ' + returnType + ' @' + name + '(' + args + ')\n\n';
}

function stringifyDefinition(definition: Object) {
    let name = Object.values(definition)[0];
    let returnType = Object.values(definition)[1];
    let args = stringifyArgs(Object.values(definition)[2]);
    let variables = Object.values(definition)[3];
    let blocks = stringifyBlocks(Object.values(definition)[4]);
    return 'define ' + returnType + ' @' + name + '(' + args + ') [' + variables + '\n] {\n' + blocks + '}\n\n';
}

function stringifyArgs(args: Object[]) {
    let str = '';
    args.forEach((a) => {
        let name = Object.values(a)[0];
        let type = Object.values(a)[1];
        str += type + ' %' + name + ', ';
    });
    return str.slice(0, -2);
}

function stringifyBlocks(blocks: Object[]) {
    let str = '';
    blocks.forEach((b) => {
        let label = Object.values(b)[0];
        let instructions = stringifyInstructions(Object.values(b)[1]);
        str += label + ':\n' + instructions + '\n';
    });
    return str.slice(0, -1);
}

function stringifyInstructions(instructions: Object[]) {
    let str = '';
    instructions.forEach((i) => {
        let keys = Object.keys(i);
        if (keys.includes('dst')) str += stringifyAssignment(i);
        else str += stringifyOperation(i);
        str += '\n';
    });
    return str;
}

function stringifyAssignment(assignment: Object) {
    let str = '';
    let dst = Object.values(assignment)[0];
    let opcode = Object.values(assignment)[1];
    let type = Object.values(assignment)[2];
    str += '  %' + dst + ' = ' + opcode + ' ' + type + ' ';

    let keys = Object.keys(assignment);
    //[ "dst", "opcode", "type", "pointer", "offsets" ] (%CompilationContext_cpp_215_ = getelementptr int8 %state, i64 128)
    if (keys.includes('pointer')) {
        let pointer = Object.values(assignment)[3];
        let vrb = '%' + Object.values(pointer)[0];
        let offsets = Object.values(assignment)[4];
        str += vrb;
        if (offsets.length) {
            str += ', ';
            str += stringifyOSA(offsets);
        }
    }
    //[ "dst", "opcode", "type", "value", "offsets" ] (%sql_cpp_125_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_215_)
    else if (keys.includes('value')) {
        let value = Object.values(assignment)[3];
        let offsets = Object.values(assignment)[4];
        str += Object.values(value)[0] + ' ' + Object.values(value)[1];
        if (offsets.length) {
            str += ', ';
            str += stringifyOSA(offsets);
        }
        str += ', %MISSING_OFFSET';
    }
    //[ "dst", "opcode", "type", "condition", "src" ] (%RelationMappedLogic_cpp_348_1 = select i64 %RelationMappedLogic_cpp_348_, %to, %RelationMappedLogic_cpp_347_0)
    else if (keys.includes('condition')) {
        let condition = Object.values(assignment)[3];
        let vrb = '%' + Object.values(condition)[0];
        let src = Object.values(assignment)[4];
        str += vrb;
        if (src.length) {
            str += ', ';
            str += stringifyOSA(src);
        }
    }
    //[ "dst", "opcode", "type", "fun", "args" ] (%Numeric_cpp_698_ = call d128 umbra::BigNumericRuntime::mulTrap(umbra::data128_t, umbra::data128_t) (%BigNumeric_cpp_863_15, %BigNumeric_cpp_863_17))
    else if (keys.includes('fun')) {
        let fun = Object.values(assignment)[3];
        let args = Object.values(assignment)[4];
        str += fun + ' (' + stringifyOSA(args) + ')';
    }
    //[ "dst", "opcode", "type", "incoming" ] (%firstTid = phi i64 [%from, %body %RelationMappedLogic_cpp_348_1, %loopDoneTuples])
    else if (keys.includes('incoming')) {
        str += '[';
        let incoming = Object.values(assignment)[3] as Object[];
        incoming.forEach((i) => {
            let value = Object.values(i)[0];
            let vrb = '%' + Object.values(value)[0];
            let block = Object.values(i)[1];
            str += vrb + ', %' + block + ' ';
        });
        str = str.slice(0, -1) + ']';
    }
    //[ "dst", "opcode", "type", "src", "targetSuccess", "targetFailure" ] (%Numeric_cpp_777_65 = checkedsadd i64 %MaterializationHelper_cpp_977_63, %RelationMappedLogic_cpp_314_ %cont64 %overflow)
    else if (keys.includes('targetSuccess')) {
        str += stringifyOSA(Object.values(assignment)[3]) + ' ';
        let targetSuccess = '%' + Object.values(assignment)[4];
        let targetFailure = '%' + Object.values(assignment)[5];
        if (targetFailure === targetSuccess) str += targetSuccess + ' %overflow';
        else str += targetSuccess + ' ' + targetFailure;
    }
    //[ "dst", "opcode", "type", "src" ] (%Char1_cpp_85_13 = sub i32 %Char1_cpp_85_12, %Char1_cpp_85_10)
    else {
        str += stringifyOSA(Object.values(assignment)[3]);
    }

    return str;
}

function stringifyOperation(operation: Object) {
    let str = '';
    let opcode = Object.values(operation)[0];
    str += '  ' + opcode;
    switch (opcode) {
        //call void umbra::AggregationTarget::init(umbra::AggregationTarget*, unsigned long) (%CompilationContext_cpp_215_0, i64 88)
        case 'call':
            {
                let type = Object.values(operation)[1];
                let fun = Object.values(operation)[2];
                let args = Object.values(operation)[3];
                str += ' ' + type + ' ' + fun + ' (' + stringifyOSA(args) + ')';
            }
            break;
        //store int64 %Numeric_cpp_777_51, %MaterializationHelper_cpp_983_52
        case 'store':
            {
                let type = Object.values(operation)[1];
                let value = Object.values(operation)[2];
                let vrb = '%' + Object.values(value)[0];
                let offsets = Object.values(operation)[3];
                str += ' ' + type + ' ' + type + ' ' + vrb;
                if (offsets.length) {
                    str += ', ';
                    str += stringifyOSA(offsets);
                } else str += ', %MISSING_OFFSET';
            }
            break;
        //br %cont
        case 'br':
            {
                let target = Object.values(operation)[1];
                str += ' %' + target;
            }
            break;
        //condbr %RelationMappedLogic_cpp_343_ %loopBlocks %loopDoneBlocks
        case 'condbr':
            {
                let condition = Object.values(operation)[1];
                let vrb = '%' + Object.values(condition)[0];
                let targetTrue = Object.values(operation)[2];
                //let targetFalse = Object.values(operation)[3];
                str += ' ' + vrb + ' %' + targetTrue + ' %targetFalse_EQUAL';
            }
            break;
        case 'return':
            {
                let value = Object.values(operation)[1];
                let keys = Object.keys(value);
                if (keys.includes('const')) str += ' ' + Object.values(value)[1];
                else {
                    let vrb = '%' + Object.values(value)[0];
                    str += ' ' + vrb;
                }
            }
            break;
        default:
            break;
    }
    return str;
}

function stringifyOSA(osa: Object[]) {
    let str = '';
    osa.forEach((o) => {
        let keys = Object.keys(o);
        if (keys.includes('const')) {
            str += Object.values(o)[0] + ' ' + Object.values(o)[1];
        } else {
            if (Object.values(o)[0]) str += 'global ';
            let vrb = '%' + Object.values(o)[1];
            str += vrb;
        }
        str += ', ';
    });
    return str.slice(0, -2);
}

export function requestQueries() {
    let request = new XMLHttpRequest();
    for (let i = 1; i < 23; i++) {
        request.open('GET', url + i + '.uir', false);
        request.send(null);
        uir.push(request.responseText);
    }
    for (let i = 1; i < 23; i++) {
        request.open('GET', url + i + '.json', false);
        request.send(null);
        jsons.push(JSON.parse(request.responseText));
    }
    strings.unshift(generateText(jsons[0]));
}

export function getUir() {
    return uir;
}

export function getStrings() {
    return strings;
}

export function getGraphs() {
    return graphs;
}

/*
const fetchQuery = async () => {
    let response = await fetch(url);
    let result = await response.json();
    queries.push(JSON.stringify(result));
};

fetch(url)
    .then((response) => response.json())
    .then((data) => queries.push(data))
    .catch((error) => {
        console.log(error);
    });
*/
