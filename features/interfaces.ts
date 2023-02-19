interface Reportable {
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

// const printVechile = (vehicle: Vechile): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
//   console.log(`${vehicle.summary()}`);
// };

const printSummary = (vehicle: Reportable): void => {
  console.log(`${vehicle.summary()}`);
};

const drink = {
  color: 'brown',
  corbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(drink);
printSummary(oldCivic);
