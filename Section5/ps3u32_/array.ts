const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]
const carsByMake: string[] = [];

// help with inference when extracting values

const cars = carMakers[0];
const myCar = carMakers.pop();



// Prevent incompatible values

carMakers.push();

// Prevent incompatible values 
carMakers.push();

carMakers.map((car: string): string => {
    return car.toUpperCase();
})


// Flexible types

const importantDates: (Date | string)[] = [new Date(), '2031-10-10'];
importantDates.push('2031-10-10')
importantDates.push(new Date())
// importantDates.push(100)

// Tupels

