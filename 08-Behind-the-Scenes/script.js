'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > +1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = `Steven`;

      // Reassigning outer scope's variable
      output = `NEW OUTPUT!`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);

// console.log(age);
// printAge();
*/

/*
// HOISTING LESSON
// Variables hoisting lesson / TDZ
console.log(me);
// console.log(job);
// console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

// Functions hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart(); // numProducts is undefined in this case, and 0 is also undefined > so we get error

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

// variables created with var will create a property in the window object (in console)
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// Best practices
// Declare variables with let and const, and at the top of the code
// Declare functions first, then call them

*/

/*
// this keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();

const f = jonas.calcAge;

f();
*/

/*
// var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hei ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = {
  name: `Jonas`,
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(`Friend: `, friend); // name: 'Jonas', age: 27
console.log(`Me: `, me); // name: 'Jonas', age: 27
