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
console.log(fun);
