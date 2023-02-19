//Typed Arrays:
//Arrays where each element is some type of consistent value

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['ford'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Why do we care:
// Ts can do type inference when extracting values fom an array
// Ts can prevent us from adding incompatible values to the array
// we can get help with 'map', 'forEach','reduce' functions
// Flexible - arrays can still contain multiple different types
//Prevent incompatible types
carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('string');

//When to use use typed arrays
//Any time we need to represent a collectio of records with some arbitary sort order
