//Values and Variables
console.log("###$$$ASSIGNMENTS FILE");
const country = "Romania";
const continent = "Europe";
let population = 15;

console.log(country);
console.log(continent);
console.log(population);
/*
//random attempts
console.log("TOYING WITH JS");
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
class Rectangle extends Shape {}
const rect = new Rectangle(3, 4);
console.log(rect);
*/

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
language = "romanian";

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);
