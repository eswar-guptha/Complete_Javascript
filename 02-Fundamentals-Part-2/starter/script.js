"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
let passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can driver");
}

// let interface = 'Audio';
// let private = 534;

*/

/*
///////////////////////////////////////
// ===>>> Functions

// => FUNCTION DECLARATION:-
function logger() {
  console.log("helo"); // this is function body
}

// // => invoking / calling / running function
// logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  let juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// let appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(3, 0));

// // =>>> FUNCTION DECLARTION

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

// console.log(calcAge1(2000));
// console.log(calcAge1(2002));

//  // =>>> FUNCTION EXPRESSION :-

let calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

// console.log(calcAge2(2002));

// // =>>> ARROW FUNCTIONS :-

let calcAge3 = (birthYear) => {
  return 2023 - birthYear;
};

// console.log(calcAge3(2022))

let yearsUntillRetirement = (myName, birthyear) => {
  let age = 2023 - birthyear;
  let retirement = 65 - age;
  return `${myName} retires in ${retirement} years`;
};

// console.log(yearsUntillRetirement("Eswar", 2002));
// console.log(yearsUntillRetirement("Jaya", 1960));

function cutPices(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    let applePieces = cutPices(apples);
    let orangePieces = cutPices(oranges);
    
    let juice = `Juice with ${applePieces} apples Pieces and ${orangePieces} oranges Pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*

let calcAge = function (birthYear) {
  return 2023 - birthYear;
};

let yearsUntilRetirement = function (birthYear, firstName) {
  let age = calcAge(birthYear);
  let retirement = 65 - age;
  //   return retirement;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has retired`);
    return "retired";
  }
  //   return retirement > 0 ? retirement : "Retired";
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "guptha"));
console.log(yearsUntilRetirement(1950, "eswar"));

*/

/*
///////////////////////////////////////
// ===>>> Introduction to Arrays

let friend1 = "f1";
let friend2 = "f2";
let friend3 = "f3";

let friends = ["f1", "f2", "f3", "f4"];
console.log(friends);

let years = new Array(2000, 2002, 2003, 2007);
console.log(years);

// => accessing the elements

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "f10";
console.log(friends);

let eswar = ["eswar", "guptha", 2023 - 2000, friends, [1, 2, 3, 4]];
console.log(eswar);
let fullName = eswar[0] + " " + eswar[1];
eswar[2] = fullName;
console.log(eswar);

// => Execrice

let calcAge = (birthYear) => {
  return 2023 - birthYear;
};

years = [2000, 2002, 2003, 2005, 2007];

let age1 = calcAge(years[0]);
let age2 = calcAge(years[1]);
let age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

/*
///////////////////////////////////////
// ===>>> Basic Array Operations (Methods)

let friends = ["f1", "f2", "f3", "f4"];
console.log(friends);

// => add Elements
friends.push("f10");
friends.unshift("f11");
console.log(friends);

// => remove elements
friends.pop(); //last
friends.pop(1);
friends.shift();
console.log(friends);

console.log(friends.indexOf("f3"));
console.log(friends.indexOf("f11"));
console.log(friends.includes("f1"));
console.log(friends.includes("f11"));

if (friends.includes("f1")) {
  console.log("You have friend called f1");
} else {
  console.log("You dont have friend called f1");
}
*/

/*
///////////////////////////////////////
// ===>>> Introduction to Objects

let eswarArray = [
  "eswar",
  "guptha",
  2022 - 2002,
  "student",
  ["f1", "f2", "f3"],
];

// => object literal syntax

let eswar = {
  firstName: "Eswar",
  lastName: "Guptha",
  birthYear: 2000,
  age: 2023 - 2000,
  firends: ["f1", "f2", "f3"],
  job: "student",
};

console.log(eswar);

///////////////////////////////////////
// ===>>> Dot vs. Bracket Notation

console.log(eswar.lastName);
console.log(eswar["firstName"]);

let nameKey = "Name";
console.log(eswar["first" + nameKey]);
console.log(eswar["last" + nameKey]);

// let intrestedIn = prompt(
//   "What do you want to know about eswar firstName, lastName, age"
// );

// console.log(intrestedIn, typeof intrestedIn);
// console.log(eswar[intrestedIn]);

// if (eswar[intrestedIn]) {
//   console.log(eswar[intrestedIn]);
// } else {
//   console.log("Wrong request");
// }

eswar.location = "Hydrabad";
eswar["insta"] = "eswar_guthpa_24";
console.log(eswar);

// => challange
// -> "Eswar has 3 friends, and his best firend is called f1"

console.log(
  `${eswar.firstName} has ${eswar.firends.length} and his best friend called ${eswar.firends[0]}`
);
*/

/*
///////////////////////////////////////
// ===>>> Object Methods

let eswar = {
  firstName: "Eswar",
  lastName: "Guptha",
  birthYear: 2000,
  friends: ["f1", "f2", "f3"],
  job: "students",
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this)
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  // => challange:
  // "Eswar is a 23 years old teacher, and he has a/no drivers license"

  summary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.driversLicense ? "a" : "no"} drivers's license`;
  },
};

console.log(eswar.summary());

eswar.calcAge();
console.log(eswar);
console.log(eswar.age);
console.log(eswar.age);
console.log(eswar.age);

console.log(eswar.summary());

*/

/*
///////////////////////////////////////
// ===>>> Iteration: The for Loop

// => for loop keeps running untill the condition is true
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetiton ${i} 🏋️`);
}
*/

/*
///////////////////////////////////////
// ===>>> Looping Arrays, Breaking and Continuing

let details = [
  "Eswar",
  "Guptha",
  2023 - 2002,
  "student",
  ["f1", "f2", "f3"],
  true,
];

let typesOf = [];

for (let i = 0; i < details.length; i++) {
  console.log(details[i]);

  // typesOf[i] = typeof details[i];
  typesOf.push(typeof details[i]);
}

// console.log(typesOf);

let birthYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006];

let calcAge = function (birthYear) {
  return 2023 - birthYear;
};

let ages = [];

for (let i = 0; i < birthYears.length; i++) {
  // console.log(birthYears[i])
  ages.push(calcAge(birthYears[i]));
}

console.log(ages);

*/

/*
// => CONTINUE & BREAK

let arr = [1, 2, "one", 3, "two", true, [1, 2, 3]];

console.log("---only strng----");
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") {
    continue;
  } else {
    console.log(arr[i]);
  }
}

console.log("---Break with boolean---");
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "boolean") {
    break;
  } else {
    console.log(arr[i]);
  }
}
*/

/*
///////////////////////////////////////
// ===>>> Looping Backwards and Loops in Loops

let details = [
  "Eswar",
  "Guptha",
  2023 - 2002,
  "student",
  ["f1", "f2", "f3"],
  true,
];

for (let i = details.length - 1; i >= 0; i--) {
  console.log(details[i]);
}

for (let i = 0; i < 3; i++) {
  console.log(`---- started ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`sub ${j}`);
  }
}
*/

///////////////////////////////////////
// ===>>> The while Loop

// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 1;
// }

let random = Math.trunc(Math.random() * 6) + 1;
console.log(random);

while (random !== 6) {
  console.log(`You rolled a ${random}`);
  random = Math.trunc(Math.random() * 6) + 1;
  if (random === 6) {
    console.log(`Looop is about to end... ${random}`);
  }
}
