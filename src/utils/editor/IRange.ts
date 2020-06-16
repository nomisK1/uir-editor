import * as monaco from 'monaco-editor';

interface IRange {
    line: number;
    start: number;
    end: number;
}

export function isEqual(range1: IRange, range2: IRange): boolean {
    return range1.line === range2.line && range1.start === range2.start && range1.end === range2.end ? true : false;
}

export function getMonacoRange(range: IRange): monaco.Range {
    return new monaco.Range(range.line, range.start, range.line, range.end);
}

export default IRange;
