import Graph from './Graph';

const url: string = 'http://localhost:8000/';
let jsons: Object[] = [];
let graphs: Graph[] = [];

function requestQueries() {
    let request = new XMLHttpRequest();
    for (let i = 1; i < 23; i++) {
        request.open('GET', url + i + '.json', false);
        request.send(null);
        jsons.push(JSON.parse(request.responseText));
    }
    jsons.forEach((json) => {
        graphs.push(new Graph({ json }));
    });
}

export function getData() {
    requestQueries();
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
