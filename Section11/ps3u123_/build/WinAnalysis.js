"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResult_1 = require("./MatchResult");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            const [homeTeam, awayTeam, homeScore, awayScore, result] = match;
            if (homeTeam === this.team && result === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (awayTeam === this.team && result === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} times.`;
    }
}
exports.WinAnalysis = WinAnalysis;
