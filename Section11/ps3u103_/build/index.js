"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' });
// console.log(matches)
// split file content into rows
// const rows = matches.split('\n')
// console.log(rows)
// const matchesArray = rows.map(rows => rows.split(','))
// console.log(matchesArray)
// ps3u111
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
console.log(reader.data[1]);
// const MatchResult = {
//     homeWin: 'H',
//     awayWin: 'A',
//     draw: 'D'
// }
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match.homeTeam === 'Man United' && match.result === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match.awayTeam === 'Man United' && match.result === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log(`Man United won ${manUnitedWins} games.`)
