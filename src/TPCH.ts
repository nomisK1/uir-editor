const url: string = 'http://localhost:8000/';

class TPCH {
    private static instance: TPCH;
    private strings: string[];
    private jsons: Object[];

    constructor() {
        this.strings = [];
        this.jsons = [];
        this.requestQueries(url);
    }

    public static getInstance(): TPCH {
        if (!TPCH.instance) TPCH.instance = new TPCH();
        return TPCH.instance;
    }

    private requestQueries(url: string) {
        let request = new XMLHttpRequest();
        for (let i = 1; i < 23; i++) {
            request.open('GET', url + i + '.uir', false);
            request.send(null);
            this.strings.push(request.responseText);
        }
        for (let i = 1; i < 23; i++) {
            request.open('GET', url + i + '.json', false);
            request.send(null);
            this.jsons.push(JSON.parse(request.responseText));
        }
    }

    public getStrings() {
        return this.strings;
    }

    public getJsons() {
        return this.jsons;
    }
}

export default TPCH;

/* const fetchQuery = async () => {
    let response = await fetch(url);
    let result = await response.json();
    queries.push(JSON.stringify(result));
};

fetch(url)
    .then((response) => response.json())
    .then((data) => queries.push(data))
    .catch((error) => {
        console.log(error);
    }); */
