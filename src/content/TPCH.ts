import Graph from './Graph';

const url: string = 'http://localhost:8000/';
const local: string = './data/';
const count: number = 22;
const graphs: Graph[] = [];

function requestQueries() {
    try {
        let xhr = new XMLHttpRequest();
        for (let i = 1; i <= count; i++) {
            xhr.open('GET', url + i + '.json', false);
            xhr.send(null);
            let json = JSON.parse(xhr.responseText);
            graphs.push(new Graph({ gid: i, json }));
            console.log('NETWORK SUCCESS: LOADING TPCH #' + i + '...');
        }
    } catch (error) {
        console.log('NETWORK ERROR: LOADING LOCAL DATA...');
        for (let i = 1; i <= count; i++) {
            let json = require(local + i + '.json');
            graphs.push(new Graph({ gid: i, json }));
        }
    }
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
