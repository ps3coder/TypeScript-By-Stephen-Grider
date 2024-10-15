const apples: number = 5;
let speed: string = 'string'
let hasName: boolean = false;
let nothing: null = null;
let not: undefined = undefined;
let now: Date = new Date();
let colors: string[] = [
    'red', 'green', 'blue'
]
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false]
class Car {
}
let car: Car = new Car();
// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};
// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}
// inference
// Annotations

const json = '{"x":10 , "y":20}';
const coordinates: { x: number, y: number } = JSON.parse(json)
console.log(coordinates)
// any types

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3. Variables whose type cannot be inferred correctly
let numbers = [-10, 1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}