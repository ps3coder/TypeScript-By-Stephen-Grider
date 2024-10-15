class Vehicle1 {
    constructor(public color: string) {

    }
    protected honk(): void {
        console.log('beep')
    }
}
const vehicle = new Vehicle1('red');
console.log(vehicle.color)
// vehicle.honk();

class Car1 extends Vehicle1 {

    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vrrom')
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car1 = new Car1(4, 'red');
car1.startDrivingProcess();
// car1.honk1();
