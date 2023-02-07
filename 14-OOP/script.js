'use strict';
// 🌟🔴🟢🌟

///////////////////////////////////////////////////
// 🔴 What is object-oriented programming?

///////////////////////////////////////////////////
// 🔴 OOP in JavaScript

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
