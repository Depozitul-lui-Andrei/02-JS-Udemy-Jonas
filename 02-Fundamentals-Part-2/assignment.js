"use strict";
/*
`LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console`;

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const country1 = describeCountry(`Germany`, 35, `Berlin`);
const country2 = describeCountry(`France`, 43, `Paris`);
const country3 = describeCountry(`UK`, 23, `London`);
console.log(country1);
console.log(country2);
console.log(country3);


`LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations`;
//function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china = percentageOfWorld1(1441);
const romania = percentageOfWorld1(15);
const usa = percentageOfWorld1(350);
console.log(china, romania, usa);

//function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const china2 = percentageOfWorld2(1440);
const romania2 = percentageOfWorld2(16);
const usa2 = percentageOfWorld2(355);
console.log(china2, romania2, usa2);


`LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'`;

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const china3 = percentageOfWorld3(1441);
const romania3 = percentageOfWorld3(16);
const usa3 = percentageOfWorld3(355);
console.log(china3, romania3, usa3);
*/
