var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        // return the element at the specified index
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
// To handle strings
var stringArray = new ArrayOfAnything(["a", "b", "c"]);
// console.log(stringArray.get(0));
var numberArray = new ArrayOfAnything([1, 2, 3,]);
// console.log(numberArray.get(1));
function printStrings(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a Car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am House");
    };
    return House;
}());
function printHouseOrCars(arr) {
    arr.forEach(function (item) {
        item.print();
    });
}
var cars = [new Car(), new Car()];
var houses = [new House(), new House()];
printHouseOrCars(cars);
printHouseOrCars(houses);
