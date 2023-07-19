// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// ===>>> PROBLEM

let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }
    if (min > temps[i]) {
      min = temps[i];
    }
    if (max < temps[i]) {
      max = temps[i];
    }
  }
  return max - min;
};

let amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

//
let calcTempAmplitudeTwo = function (temp1, temp2) {
  let temps = temp1.concat(temp2);
  let min = 0;
  let max = 0;
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }

    // debugger;
    if (min > temps[i]) {
      min = temps[i];
    }
    if (max < temps[i]) {
      max = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let amplitudeTwo = calcTempAmplitudeTwo([3, 5, 1], [9, 0, 5]);
// // console.log(amplitudeTwo);

// let amplitudeBug = calcTempAmplitudeTwo([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

// let count = 1;
// for (let i = 0; i < 10; i++) {
//   count = count + 1;
// }
// console.log(count);

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ...${arr[i]}°C in ${i + 1} day`;
  }
  console.log(str + '...');
}

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
// printForecast(data1);
// printForecast(data2);

// debugging

// let measureKelvin = function () {
//   let measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius:')),
//   };

//   let kalvin = measurement.value + 273;
//   return kalvin;
// };

// console.log(measureKelvin());

