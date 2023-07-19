/*

let js = "amazing";
console.log(48 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

*/

/*
////////////////////////////////////
// ===>>> Varibles and Values


let firstName = "Eswar";
console.log(firstName);

let eswar_guptha = "eg";
let $function = 27;

let myFirstJob = "Student";
let myCurrentJob = "Software developer";

let job1 = "Student";
let job2 = "Software developer";

*/

/*
////////////////////////////////////
// ===>>> Data Types

console.log(true);
let javascriptIsFun = true;
if (javascriptIsFun) {
  console.log("yes");
}

console.log(typeof true); // boolean
console.log(typeof 1); // number
console.log(typeof 1.5); // number
console.log(typeof "Eswar"); // string
console.log(typeof javascriptIsFun); // boolean

let num = "eswar";
console.log(num, typeof num);
num = 5;
console.log(num, typeof num);

let myName;
console.log(myName, typeof myName);
myName = "Eswar guptha";
console.log(myName, typeof myName);

console.log(typeof null)
*/

/*
////////////////////////////////////
// ===>>> let, const and var

let age = 30;
age = 31;

const birthYear = 2002;
console.log(birthYear);
// birthYear = 2003; // => TypeError: Assignment to constant variable.

// const job; // => SyntaxError: Missing initializer in const declaration

var varType = "var varible";
console.log(varType);
varType = "Value changed";
console.log(varType);

// -> dont declare varibles with out type of the varible
fullName = "eswar guptha";
console.log(typeof fullName);

*/

/*

////////////////////////////////////
// ===>>> Basic Operators
// ===>>> Math operators

let currentYear = 2023;
let ageEswar = currentYear - 2000;
let ageJaya = currentYear - 2002;
console.log(ageEswar, ageJaya);

console.log(ageEswar * 2, ageEswar / 2);
console.log(2 ** 3);

let firstName = "Eswar";
let lastName = " guptha";
console.log(firstName + lastName);

let x = 10 + 5;
x += 5; // 15 + 5
x *= 2;
x /= 2;
console.log(x);

// ===>>> Comparison Operators >, < , <=, >=
console.log(ageEswar > ageJaya);
console.log(ageJaya <= 18);
*/

/*
////////////////////////////////////
// ===>>> Operator Precedence

let currentYear = 2023;
let ageEswar = currentYear - 2000;
let ageJaya = currentYear - 2002;

console.log(currentYear - 2000 > currentYear - 2002);

let x, y;
x = y = 25 - 10 - 5;
console.log(x,y)
let avgAge = (ageEswar + ageJaya) / 2;
console.log(avgAge)
*/

/*
////////////////////////////////////
// ===>>> Strings and Template Literals

let firstName = "Eswar";
let lastName = "guptha";
let job = "Junior software developer";
let birthYear = 2000;

let myDetails = `I am ${firstName} ${lastName} and i am currently a ${job} and i am ${
  2023 - birthYear
}'s old`;
console.log(myDetails);
*/

/*
////////////////////////////////////
// ===>>> Taking Decisions: if / else Statements

let age = 15;
let isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`you can start driving 🚗`);
} else {
  let yearsLeft = 18 - age;
  console.log(`You are too young, wait another ${yearsLeft}`);
}

let birthYear = 2000;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
////////////////////////////////////
// ===>>> Type Conversion and Coercion

// => Type Conversion
let inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18, inputYear);
console.log(Number("Eswar")); // => NaN
console.log(String(25));
console.log(typeof NaN);

// => Type Coercion
console.log("I am 23 years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n);
*/

/*

////////////////////////////////////
// Truthy and Falsy Values :- 0,"",undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

let money = 0;

if (money) {
  console.log(`Dont spend it all`);
} else {
  console.log(`you shold get a job`);
}

let height;
if (height) {
  console.log(`Hey height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

/*
////////////////////////////////////
// Equality Operators: == vs. ===

// => srtic equality operator
console.log(18 === 18); // true
console.log(18 === "18"); // false
console.log(18 === 19); // false

// => loss equality operator : "==" makes type coercion
console.log(18 == 18); // true
console.log(18 == "18"); // true
console.log(18 == 19); // false

let age = "18";
if (age === 18) {
  console.log("you just became an adult ,  (strict)");
}
if (age == 18) {
  console.log("you just became an adult , (loose)");
}
*/

/*
////////////////////////////////////
// Logical Operators

// => AND :- &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// => OR :- ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// => NOT :- !
console.log(!true);
console.log(!false);
console.log(!true && false);
console.log(!false && true);
console.log(!true || true);
console.log(!true || false);

let hasDriversLicense = true; // A
let hasGodVision = true; // B

console.log(hasDriversLicense && hasGodVision);
console.log(hasDriversLicense || hasGodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGodVision) {
  console.log(`can drive`);
} else {
  console.log(`cant drive`);
}

let isTired = true;
console.log(hasDriversLicense && hasGodVision && isTired);

if (hasDriversLicense && hasGodVision && !isTired) {
  console.log("can drive");
} else {
  console.log("cont drive");
}
*/

////////////////////////////////////
// ===>>> The switch Statement

/*
let day = "friday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy");
    break;
  default:
    console.log("Not a vaild day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy");
} else {
  console.log("Not a vaild day");
}
*/

/*
////////////////////////////////////
// ===>>> Statements and Expressions

// => a expression is a piece of code which produces a value "3 + 4", 1991 , ture && false && !false

// => a statement is bigger piece of code that is executed which doesnot produce a value on it self
*/

////////////////////////////////////
// ===>>> The Conditional (Ternary) Operator

let age = 23;
age >= 18
  ? console.log("i like to drink wine")
  : console.log("I like to drink watre");

let checkDrink = age >= 18 ? "wine" : "water";
console.log(checkDrink);

console.log(`${age >= 18 ? "wine" : "water"}`);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
