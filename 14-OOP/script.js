'use strict';
// 🌟🔴🟢🌟

///////////////////////////////////////////////////
// 🔴 What is object-oriented programming?

///////////////////////////////////////////////////
// 🔴 OOP in JavaScript

/*
///////////////////////////////////////////////////
// 🔴 Constructor functions and the new operators

// creating object programmatically using function constructor
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this (create function in constructor function which is blueprint for objects in OOP) code performance is affected
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person(`Jonas`, 1991);
console.log(jonas);

// 1. New {} (empty object) is created
// 2. Function is called, this = {} (this becomes {} empty object)
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack);

const jay = `Jay`;

console.log(jonas instanceof Person);
console.log(jay instanceof Person);


///////////////////////////////////////////////////
// 🔴 Prototypes (prototype of linked objects)
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = `Homo Sapiens`;
console.log(jonas);
console.log(matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty(`firstName`));
console.log(jonas.hasOwnProperty(`species`));
*/

///////////////////////////////////////////////////
// 🔴 OOP in JavaScript
// differences between classical oop and prototypes oop
// costructor functions / es6 classes / object.create()
