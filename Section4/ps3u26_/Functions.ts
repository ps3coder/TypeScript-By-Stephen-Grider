const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    return a - b;
}
function divide(a: number, b: number): number {
    return a / b;
}
const multiply = (a: number, b: number): number => {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
    // return undefined;
}
const throwErrorn = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
    // return message;
}


const forecast = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}
logWeather(forecast);

// object destructuring

