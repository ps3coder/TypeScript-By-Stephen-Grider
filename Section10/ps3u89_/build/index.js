"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data)
// const charsCollection = new CharactersCollection('zbabdbdbiuasdbncwjesdf')
// const sorter = new Sorter(charsCollection)
// sorter.sort();
// console.log(charsCollection.data)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(300);
linkedList.add(400);
linkedList.add(60);
linkedList.add(1500);
linkedList.add(5);
linkedList.add(10);
linkedList.add(900);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
