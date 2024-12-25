"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
// export a class CSVFileReader
class CSVFileReader {
    // use the fs module to read the file
    constructor(fileName) {
        this.fileName = fileName;
        // a twoD array of strings initialized as an empty array
        // file name provided by the construcy=tor as a public field for flexibility
        this.data = [];
    }
    // read() : reads and processes the CSV file , populating the data field
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf8" })
            .split("\n")
            .map((row) => row.split(","))
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3], 10),
                parseInt(row[4], 10),
                row[5],
                row[6],
            ];
        });
    }
}
exports.CSVFileReader = CSVFileReader;
