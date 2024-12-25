"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
class AverageGoalsAnalysis {
    run(matches) {
        let totalGoals = 0;
        matches.forEach(match => {
            totalGoals += match[3];
        });
        const averageGoals = totalGoals / matches.length;
        return `Average Goals Scored : ${averageGoals}`;
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
