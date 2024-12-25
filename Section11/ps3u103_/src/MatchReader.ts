import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { DataReader } from "./DataReader";

// interface MatchData {
//     date: Date;
//     homeTeam: string;
//     awayTeam: string;
//     homeScore: number;
//     awayScore: number;
//     result: MatchResult;
// }
type MatchData = [Date, string, string, number, number, string, string];

export class MatchReader {

    matches: MatchData[] = [];

    constructor(public reader: DataReader) { }

    // mapRow(row: string[]): MatchData {
    //     return {
    //         date: dateStringToDate(row[0]),
    //         homeTeam: row[1],
    //         awayTeam: row[2],
    //         homeScore: parseInt(row[3]),
    //         awayScore: parseInt(row[4]),
    //         result: MatchResult[row[5] as keyof typeof MatchResult],
    //     }
    // }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                new Date(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ]
        })
    }
}