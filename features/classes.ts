class Vehicle {
  // public drive(): void {
  //   console.log('I hope I can drive 🐼');
  // }
  color: string = 'red';
  constructor(color: string) {
    this.color = color;
    // console.log(this.color);
  }

  public honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'yellow');
// car.drive();
car.startDrivingProcess();
car.honk();
