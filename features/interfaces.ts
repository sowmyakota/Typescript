interface Vechile {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 200,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVechile = (vehicle: Vechile): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`${vehicle.summary()}`);
};

const printSummary = (vehicle: Vechile): void => {
  console.log(`${vehicle.summary()}`);
};

printVechile(oldCivic);
