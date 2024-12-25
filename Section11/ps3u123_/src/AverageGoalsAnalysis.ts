import { MatchData } from './matchData';
import { WinAnalysis } from './analyzers/WinsAnalysis';


export class AverageGoalsAnalysis implements WinAnalysis {
    run(matches: MatchData[]): string {
        let totalGoals = 0;
        matches.forEach(match => {
            totalGoals += match[3];
        });
        const averageGoals = totalGoals / matches.length;
        return `Average Goals Scored : ${averageGoals}`
    }
}