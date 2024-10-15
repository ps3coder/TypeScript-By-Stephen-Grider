class Vehicle {
    public drive(): void {
        console.log('chugga chugga')
    }
    protected honk(): void {
        console.log('beep beep')
    }
}
class Car extends Vehicle {

    private drive(): void {
        console.log('vroom vroom')
    }
    startDriving(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();
car.startDriving();
// car.honk();