// import fs from 'fs';
import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' });
// console.log(matches)
// split file content into rows
// const rows = matches.split('\n')
// console.log(rows)
// const matchesArray = rows.map(rows => rows.split(','))
// console.log(matchesArray)

// ps3u111
const reader = new MatchReader('football.csv');
reader.read();
console.log(reader.data[1])
// const MatchResult = {
//     homeWin: 'H',
//     awayWin: 'A',
//     draw: 'D'
// }


let manUnitedWins = 0;
for (let match of reader.data) {
    if (match.homeTeam === 'Man United' && match.result === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match.awayTeam === 'Man United' && match.result === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log(`Man United won ${manUnitedWins} games.`)
