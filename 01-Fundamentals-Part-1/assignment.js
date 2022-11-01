/*
//Values and Variables
console.log("###$$$ASSIGNMENTS FILE");
const country = "Romania";
const continent = "Europe";
let population = 15;

console.log(country);
console.log(continent);
console.log(population);

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

const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description2);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

//1. Predict the result of these 5 operations without executing them:
"9" - "5"; // 4
"19" - "13" + "17"; // 617
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; // 117 (correct answer is 1143 because 5 + 6 + '4' = '114' and then 9 - 4 - 2 = 3; numbers before string '4' become strings, then the subtractions happen, then string + number)
//2. Execute the operations to check if you were right


// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

const numNeighbours = Number(
  prompt(
    `How many neighbour countries does your country 
  have?`
  )
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
*/
