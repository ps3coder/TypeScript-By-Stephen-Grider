import { MatchData } from './matchData';
import { OutputTarget } from './interfaces/OutputTarget';
import { WinAnalysis } from './analyzers/WinsAnalysis';



export class Summary {
    constructor(
        public analyzer: WinAnalysis,
        public outputTarget: OutputTarget
    ) { }

    buildAndPrintReport(matches: string[][]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}


