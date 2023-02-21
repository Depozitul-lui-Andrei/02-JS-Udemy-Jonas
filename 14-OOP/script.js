'use strict';
// 🌟🔴🟢🌟

///////////////////////////////////////////////////
// 🔴 What is object-oriented programming?

///////////////////////////////////////////////////
// 🔴 OOP in JavaScript

// /*
///////////////////////////////////////////////////
// 🔴 Constructor functions and the new operators

// creating object programmatically using function constructor
const Person = function (fullName, birthYear) {
  // Instance properties
  this.fullName = fullName;
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

console.log(jonas.hasOwnProperty(`fullName`));
console.log(jonas.hasOwnProperty(`species`));
// */

///////////////////////////////////////////////////
// 🔴 OOP in JavaScript
// differences between classical oop and prototypes oop
// costructor functions / es6 classes / object.create()

///////////////////////////////////////////////////
// 🔴 Prototypal inheritance and the prototype chain

///////////////////////////////////////////////////
// 🔴 Prototypal inheritance on build-in objects
console.log(jonas.__proto__);
// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 6, 7, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(h1); // check __proto__ how many they are?
console.dir((x) => x + 1);

///////////////////////////////////////////////////
// 🔴 Coding Challenge #1

`Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK �
`;

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  return this.speed;
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  return this.speed;
};

const bmw = new Car(`BMW`, 120);
console.log(bmw);
console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());

const mercedes = new Car(`Mercedes`, 95);
console.log(mercedes);
console.log(mercedes.brake());
console.log(mercedes.brake());
console.log(mercedes.accelerate());

// Jonas's way
const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car2.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car2.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw2 = new Car2(`BMW`, 120);
const mercedes2 = new Car2(`Mercedes`, 95);

bmw2.accelerate();
bmw2.accelerate();
bmw2.brake();
bmw2.accelerate();

///////////////////////////////////////////////////
// 🔴 ES6 classes
// classes are still functions

// class expression
// const PersonCls = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Whenever we try to set a property that already exists... use _ before property
  set fullName(name) {
    console.log(name);
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

const jessica = new PersonCl(`Jessica Davis`, 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////////////////
// 🔴 Setters and getters

const walter = new PersonCl(`Walter White`, 1965);

const account = {
  owner: `Jonas`,
  movements: [200, 300, 450, 550, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// !!!
account.latest = 50;
console.log(account.movements);

///////////////////////////////////////////////////
// 🔴 Static methods
Person.hey = function () {
  console.log(`Hey there 👋`);
};
Person.hey();

PersonCl.hey();
