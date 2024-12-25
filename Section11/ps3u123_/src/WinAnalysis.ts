import { MatchData } from "./matchData";
import { MatchResult } from "./MatchResult";
import { Analyzer } from "./Summary";


export class WinAnalysis implements Analyzer {
    constructor(public team: string) { }
    run(matches: MatchData[]) {
        let wins = 0;

        for (let match of matches) {
            const [homeTeam, awayTeam, homeScore, awayScore, result] = match;
            if (homeTeam === this.team && result === MatchResult.HomeWin) {
                wins++;
            } else if (awayTeam === this.team && result === MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} times.`;
    }
}