class Vehicle {
  protected drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vromm');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();

// we can not change access modifiers of inherited methods
