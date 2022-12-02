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
