"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchReader_1 = require("./matchReader");
const matchResult_1 = require("./matchResult");
const reader = new matchReader_1.MatchReader("football.csv");
reader.read();
const dateOfFirstMatch = reader.data[0][0];
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] == matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
