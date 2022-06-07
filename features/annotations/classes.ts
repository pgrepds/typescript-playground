class Vehicle {
    //    color: string = 'red';
    //    constructor(color?: string) {
    //        this.color = color;
    //    }

    // Shortcut for the above
    constructor(public color?: string) {

    }

    public drive(): void {
        console.log('Drive');
    }
}

class Car extends Vehicle {
    // do not put modifier on color or otherwise we recreate this instance variable in Car, 
    // however we want to refer to Vehicle
    constructor(public wheels?: number, color?: string) {
        super(color);
    }

    public drive(): void {
        this.privateDrive();
        console.log('Override drive');
    }
    private privateDrive(): void {
        console.log('Private drive');
    }
}

const vehicle = new Vehicle('yellow');
vehicle.drive();
console.log(vehicle.color);

const car = new Car();
car.drive();
// Does not work
//car.privateDrive();