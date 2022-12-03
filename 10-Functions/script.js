'use strict';

/*
// Default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);

createBooking(`LH123`, undefined, 1000);
*/

/*
// How passing arguments works: value vs refference
const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 2345982374234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;
  if (passenger.passport === 2345982374234) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport!`);
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

//
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(jonas);
checkIn(flight, jonas);
// passing by value vs passing by refference -> js has ONLY passing by value
*/

// First-class and higher-order functions
//

/*
// Functions accepting callback functions
const oneWord = function (str) {
  return str.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher-order function with callback function inside
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

// JS callbacks all the time
const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener(`click`, high5);
[`Jonas`, `Martha`, `Adam`].forEach(high5);

// Abstraction = a way to reduce complexity and allow efficient design and implementation in complex software systems
*/

/*
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greet(`Hello`)(`Jonas`);

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2(`Hello`)(`Steven`);
*/

/*
// The call and apply methods
const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(536, `John Smith`);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

// Call method - (uses this keyword and parameters)
const book = lufthansa.book;
// book(23, `Sarah Williams`); // does not work (this. - is undefined)
book.call(eurowings, 23, `Sarah Williams`); // call() - manually define this keyword
console.log(eurowings);
book.call(lufthansa, 239, `Mary Cooper`);
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};
book.call(swiss, 583, `Mary Cooper`);

// Apply method - uses (this keyword and array of data) NOR THAT USED
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

//
book.call(swiss, ...flightData); // same with 156 line

// The bind method - sets the this keyword
// book.call(eurowings, 23, `Sarah Williams`);

const bookEW = book.bind(eurowings); // this keyword is set to eurowings when using bookEW
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, `Steven Williams`);

const bookEW23 = book.bind(eurowings, 23); // first argument is set, only needs name
bookEW23(`Jonas Schmedtmann`);
bookEW23(`Martha Cooper`);

// With event listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa)); // bind tells evend listner that this keyword points to lufthansa, not the button

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
// my way of doing it
const addTaxC = function (value) {
  return function (rate = 0.23) {
    return value + value * rate;
  };
};
console.log(addTaxC(100)());
//

// Jonas
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
