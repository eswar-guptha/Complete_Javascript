'use strict';

/*
console.log(this);

let fun = function () {
  console.log(this);
};

fun();

let funArrow = () => {
  console.log(this);
};

funArrow();

let eswar = {
  year: 2000,
  calcAge() {
    console.log(this);
    console.log(2023 - this.year);
    return 2023 - this.year;
  },
};

eswar.calcAge();

let jaya = {
  year: 2022,
};

jaya.calcAge = eswar.calcAge;
jaya.calcAge();

let f = eswar.calcAge()
console.log(f)
*/

console.log(this);

let funExp = function () {
  console.log(this);
};

funExp();

function funDec() {
  console.log(this);
}

funDec();

let funArrow = () => {
  console.log(this);
};

funArrow();

let eswar = {
  birthYear: 2000,
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

let jaya = {
  birthYear: 2002,
};

eswar.calcAge();
console.log(eswar);

jaya.calcAge = eswar.calcAge;
console.log(jaya);
jaya.calcAge();

let fun = eswar.calcAge;
// console.log(fun);

// /////////////////////////////////////////////
// ===>>> Concept :- Primitives vs. Objects in Practice
// /////////////////////////////////////////////

/*
// => Primitive types :-
let lastName = 'Guptha';
let oldLastName = lastName;
lastName = 'Golla';

console.log(lastName);
console.log(oldLastName);

// => Reference Types :-
let arani = {
  firstName: 'arani',
  lastName: 'naga',
  age: 27,
};

const marriedArani = arani;
marriedArani.lastName = 'Golla';

console.log('Before : ', arani);
console.log('After : ', marriedArani);
*/

// => Copying object :-

let person1 = {
  firstName: 'Eswar',
  lastName: 'Golla',
  birthYear: 2000,
  address: {
    hNo: '1-45',
    street: 'Kotapadu Road',
    Village: 'pothunuru',
  },
};

// console.log(person1);

let person2 = Object.assign({}, person1);
person2.firstName = 'Arani';
(person2.birthYear = 1996), (person2.address.Village = 'Hyd');
console.log(person2);
console.log(person1);


