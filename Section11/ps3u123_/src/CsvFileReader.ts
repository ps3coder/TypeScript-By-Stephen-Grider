import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, { encoding: 'utf8' }).split('\n').map((row: string): string[] => row.split(','));
  }
}
