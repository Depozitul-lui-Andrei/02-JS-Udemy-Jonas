'use strict';
// Remember, we're gonna use strict mode in all scripts now!

//TODO HIGHLIGHTS MUST BE CONFIGURED

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude? Answer: difference between highest and lowest temp
// - how to compute the max and min temperatures?
// - what's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2
// 1) Understanding the problem
// - with 2 arrays, should we implement funcionality? - merge 2 arrays

// 2) Breaking up into sub-problems
// - how to merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
