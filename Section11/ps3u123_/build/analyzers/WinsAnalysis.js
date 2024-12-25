"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        for (const match of matches) {
            if (match[1] === this.team) {
                teamWins++;
            }
        }
        return `${this.team} won ${teamWins} games`;
    }
}
exports.WinAnalysis = WinAnalysis;
