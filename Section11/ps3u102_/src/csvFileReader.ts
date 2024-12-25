import fs from "fs";



export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) { }
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf8'
        }).split('\n').map((row: string): string[] => {
            return row.split(',')
        })
    }
}


// Nothing to do with generics

// class HoldAnything<TypeOfData> {
//     data: TypeOfData;
// }
// const holdNumber = new HoldAnything<number>();
// holdNumber.data = 123

// const holdString = new HoldAnything<string>();
// holdString.data = "asdjhdfn"