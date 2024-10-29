// class Sorter {
//     // collection: number[];
//     constructor(public collection: number[] | string) {
//         // this.collection = collection;
//     }
//     sort(): void {
//         const { length } = this.collection;

//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 //  All of this works only if collection is number
//                 // if collection is an array of numbers

//                 if (this.collection instanceof Array) {
//                     if (this.collection[j] > this.collection[j + 1]) {
//                         const leftHand = this.collection[j];
//                         this.collection[j] = this.collection[j + 1];
//                         this.collection[j + 1] = leftHand;
//                     }
//                 }

//                 // Only going to work if collection is a string
//                 // If collection is a string do this login instead
//                 if (typeof this.collection === 'string') {

//                 }
//             }
//         }
//     }
// }
import { Sorter } from './Sorter'

const sorter = new Sorter([10, 5, 3, 0, 11, 9, -5]);
sorter.sort();
console.log(sorter.collection);
