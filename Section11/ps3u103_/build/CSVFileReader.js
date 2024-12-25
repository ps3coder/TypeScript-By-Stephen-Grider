"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// export a class CSVFileReader
class CSVFileReader {
    // a twoD array of strings initialized as an empty array
    // file name provided by the construcy=tor as a public field for flexibility
    // use the fs module to read the file
    constructor(fileName) {
        this.fileName = fileName;
        // data: T[] = [];
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
