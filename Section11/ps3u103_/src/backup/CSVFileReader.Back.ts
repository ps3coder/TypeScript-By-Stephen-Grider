import fs from "fs";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";


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
export class CSVFileReader {
    // a twoD array of strings initialized as an empty array
    // file name provided by the construcy=tor as a public field for flexibility
    data: any[][] = [];
    // use the fs module to read the file
    constructor(public fileName: string) { }
    // read() : reads and processes the CSV file , populating the data field
    read() {
        this.data = fs
            .readFileSync(this.fileName, { encoding: "utf8" })
            .split("\n")
            .map((row: string): string[] => row.split(","))
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3], 10),
                    parseInt(row[4], 10),
                    row[5] as MatchResult,
                    row[6],
                ];
            });
    }
}
