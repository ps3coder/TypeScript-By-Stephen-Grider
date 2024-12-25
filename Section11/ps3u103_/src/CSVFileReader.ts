import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";



type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];

// export a class CSVFileReader
export abstract class CSVFileReader<T> {
    // data: T[] = [];
    public data: T[] = [];

    // a twoD array of strings initialized as an empty array
    // file name provided by the construcy=tor as a public field for flexibility
    // use the fs module to read the file
    constructor(public fileName: string) { }
    // read() : reads and processes the CSV file , populating the data field
    abstract mapRow(row: string[]): T;

    read() {
        this.data = fs
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map(this.mapRow);
    }
}
