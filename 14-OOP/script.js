'use strict';
// 🌟🔴🟢🌟
/*
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

///////////////////////////////////////////////////
// 🔴 Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calcAge();

///////////////////////////////////////////////////
// 🔴 Coding challenge #2
`Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK `;

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl(`Ford`, 120);
console.log(ford);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
*/

/*
///////////////////////////////////////////////////
// 🔴 CInheritance between 'classes': constructor functions
const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(mike);

///////////////////////////////////////////////////
// 🔴 Coding challenge #3
`Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK `;

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  return this.speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed); // 🌟
  this.charge = charge;
};

// Link prototypes
EV.prototype = Object.create(Car.prototype); // 🌟

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const Tesla = new EV(`Tesla`, 120, 23);
console.dir(EV);

Tesla.accelerate();
console.log(Tesla.brake());
Tesla.chargeBattery(90);
console.log(Tesla);
Tesla.accelerate();
Tesla.accelerate();

///////////////////////////////////////////////////
// 🔴 Inherintance between 'classes': ES6 Classes

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear); // super is the constructor function of the parent class
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl(`Martha Jones`, 2012);
const martha = new StudentCl(`Martha Jones`, 2012, `Computer Science`);
martha.introduce();
martha.calcAge();

///////////////////////////////////////////////////
// 🔴 Inherintance between 'classes': Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init(`Jay`, 2010, `Computer Science`);
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////////////////
// 🔴 Another class example

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.languate;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface of out objects
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan aproved`);
      return this;
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Jonas`, `EUR`, 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

///////////////////////////////////////////////////
// 🔴 Encapsulation: protected properties and methods

///////////////////////////////////////////////////
// 🔴 Encapsulation: private class fields and methods
// Public fields
// Private fields
// Public methods
// Private methods

// console.log(acc1.#movements);
// console.log(acc1._pin);
// console.log(acc1.#approveLoan(100));

///////////////////////////////////////////////////
// 🔴 Chaining methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////////////////
// 🔴 ES6 classes summary

///////////////////////////////////////////////////
// 🔴 Coding Challenge #4
`Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and  chargeBattery'methods of this class, and also update the 'brake' method in the 'CarCl'class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK `;

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed); // 🌟
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed = this.speed + 20;
    this.#charge = this.charge - 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl(`Rivian`, 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
