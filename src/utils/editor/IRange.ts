import * as monaco from 'monaco-editor';

interface IRange {
    line: number;
    start: number;
    end: number;
}

export function inRange(range: IRange, line: number, column: number) {
    return range.line === line && range.start <= column && range.end >= column;
}

export function getMonacoRange(range: IRange): monaco.Range {
    return new monaco.Range(range.line, range.start + 1, range.line, range.end + 1);
}

export function getMonacoRanges(ranges: IRange[]): monaco.Range[] {
    let mranges: monaco.Range[] = [];
    ranges.forEach((r) => {
        mranges.push(getMonacoRange(r));
    });
    return mranges;
}

export default IRange;
