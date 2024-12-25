class ArrayOfNumbers {
    constructor(public collection: number[]) { }
    get(index: number): number {
        // return the element at the specified index
        return this.collection[index];
    }
}
class ArrayOfStrings {
    constructor(public collection: string[]) { }
    get(index: number): string {
        return this.collection[index];
    }
}
class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}
// To handle strings
const stringArray = new ArrayOfAnything<string>(["a", "b", "c"]);
// console.log(stringArray.get(0));


const numberArray = new ArrayOfAnything<number>([1, 2, 3,]);
// console.log(numberArray.get(1));



function printStrings(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything<T>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}


// printAnything<string>(['A', 'B', 'C'])
// // printAnything(['A', 'B', 'C']) // rely on type inference
// printAnything<number>([1, 2, 3])

interface Printable {
    print(): void
}
class Car {
    print(): void {
        console.log("I am a Car")
    }
}
class House {
    print(): void {
        console.log("I am House")
    }
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
    arr.forEach((item) => {
        item.print();
    })
}

const cars: Car[] = [new Car(), new Car()];
const houses: House[] = [new House(), new House()];


printHouseOrCars(cars);
printHouseOrCars(houses)

