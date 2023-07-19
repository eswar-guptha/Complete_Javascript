'use strict';

/*
// ////////////////////////
// ===>>> Default Parameters
let createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  let booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
};

createBooking('LH123');
createBooking('LH234', 2, 299);
createBooking('LH124',undefined,399)
*/

/*
// ////////////////////////
// ===>>> How Passing Arguments Works: Value vs. Reference:-

let flight = 'LH234';
let eswar = {
  name: 'Eswar',
  passport: 123456789,
};

let checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, eswar);

// console.log(flight);
// console.log(eswar);

// Same as doing...
let flightNum = flight;
let passenger = eswar;

let newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(eswar);
checkIn(flight, eswar);
console.log(eswar);
*/

let oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

let upperFirstWord = function (str) {
  let [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

/*
// //////////////////////////////
// Higher order Function
// //////////////////////////////

let transformer = function (str, fn) {
  console.log(`Orginal String: ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
console.log('=');
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time

let high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

// let greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

let greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`)
  }
}

let greetHey = greet('Hey');
greetHey('Eswar');
greetHey("Guptha")

let greetHello = greet("Helo")
greetHello("Eswar")

greet("Hello")("Eswar Guptha")
greet("Hey")("Eswar Guptha")
*/

/*

// //////////////////////////////////
// ===>>> The call and apply Methods
// //////////////////////////////////

let lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(249, 'Eswar');
// lufthansa.book(435, 'Guptha');

// console.log(lufthansa.bookings);

let eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

let swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

let book = lufthansa.book;

// Does not work
// book('145', 'Eswar Guptha');

// ===>>> Call method
book.call(eurowings, 145, 'Eswar Guptha');
console.log(eurowings);

book.call(lufthansa, 123, 'jaya');
console.log(lufthansa);

book.call(swiss, '999', 'krishna');
console.log(swiss);

// ===>>> Apply method

let flightData = [789, 'jk'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

*/
/*
// //////////////////////////////////
// ===>>> The Bind Method
// //////////////////////////////////

let bookEW = book.bind(eurowings);
let bookLH = book.bind(lufthansa);
let bookLX = book.bind(swiss);
// bookEW('11', 'person1');

let bookEW23 = book.bind(eurowings, 23);
// bookEW23('Person2');
// bookEW23('Person3');

// With event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// lufthansa.buyPlane()
// lufthansa.buyPlane()
// lufthansa.buyPlane()

// ===>>> Partial application

// let addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// let addVAT = addTax.bind(null, 0.23);
// // addVAT = value=> value + value *  0.23

// console.log(addVAT(100));

// let addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// let output = addTax(0.10)
// output(100)

let userName = 'Eswar';

function showMessage() {
  userName = 'guptha';
  let message = 'Hello ' + userName;
  console.log(message);
}

console.log(userName);
showMessage();
console.log(userName);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
let poll = {
  question: 'What is your favourite programming language?',
  options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  // 1.1
  let answer = Number(
    prompt(`${this.question}\n${this.options.join('\n')}\n
  (Write option number)
  `)
  );
  // 1.2
  typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer]++;

  this.displayResults();
  this.displayResults('string');
};

// 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3
poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  }
};

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({answers : [5, 2, 3]},"string")
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]})
*/

/*
// ===>>> Immediately invoked functions expression:-

let runOne = function () {
  console.log('This function is normal regular function');
};

runOne();

(function () {
  console.log('this is immediately invoked function');
})();

(() => {
  console.log('This is arrow function which is immediately invoked function');
})();

*/

// ===>>> Closuers

let secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passngers`);
  };
};

let booker = secureBooking();
booker()
