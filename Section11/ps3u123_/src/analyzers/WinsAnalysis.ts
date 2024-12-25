

export class WinAnalysis {
    constructor(private team: string) { }

    run(matches: string[][]): string {
        let teamWins = 0;
        for (const match of matches) {
            if (match[1] === this.team) {
                teamWins++;
            }
        }
        return `${this.team} won ${teamWins} games`;
    }
}