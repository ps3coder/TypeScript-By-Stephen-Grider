"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
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
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                new Date(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
