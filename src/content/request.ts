import Graph from './Graph';
import { sql } from './SQL';

const fail = false; //FOR TESTING
const url: string = 'https://umbra.db.in.tum.de:25992/irJson';
const local: string = './data/';

/**
 * requestQuery:
 * Request and return the UIR-Query at the specified index from the webserver or default to local data
 */
export async function requestQuery(index: number) {
    if (fail) return failure(); //FOR TESTING
    function success(result: string): query {
        console.log('NETWORK SUCCESS: LOADING UIR-QUERY ' + (index + 1) + ' @ URL "' + url + '"');
        let json = JSON.parse(result);
        return { index, content: new Graph({ gid: index + 1, json }) };
    }
    function failure(): query {
        if (index > localTotal - 1) index = localTotal - 1;
        console.log('NETWORK FAILURE: LOADING UIR-QUERY ' + (index + 1) + ' @ LOCAL PROJECT');
        let json = require(local + (index + 1) + '.json');
        return { index, content: new Graph({ gid: index + 1, json }) };
    }
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain');
    let requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: sql[index],
        redirect: 'follow',
    };
    let response = await fetch(url, requestOptions);
    let result = await response.text();
    if (response.ok) return success(result);
    return failure();
}

export type query = {
    index: number;
    content: Graph;
};

export const queryTotal: number = sql.length;
const localTotal: number = 23;
