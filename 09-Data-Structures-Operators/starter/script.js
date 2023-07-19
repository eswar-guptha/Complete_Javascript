'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// /////////////////////////////////////////////
// ====>>> Enhanced Object Literals<<<====
// There are three of writing objects
// /////////////////////////////////////////////

let weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // => before ES6
  // openingHours:openingHours,
  // => ES6 Enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza(mainIngeridean, ...otherItems) {
    console.log(mainIngeridean);
    console.log(otherItems);
  },
};

// console.log(restaurant);
// console.log(openingHours);

// /////////////////////////////////////////////
// ====>>> Destructuring <<<====

/*
// ========>>>>>>>> ARRAY DESTRUCTURING

let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c);
let [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
[main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ===> Swiching varibles
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// ===> nested array

let nested = [2, 3, [4, 5]];
console.log(nested);

// let [i, j] = nested;
// [i, , j] = nested;
// console.log(i, j);

let [i,,[j,k]] = nested
console.log(i,j,k)

// ===> default values:

let [p = 1,q = 1,r = 1] = [8,9]
console.log(p,q,r)
*/

/*

// ========>>>>>>>> OBJECT DESTRUCTURING

let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// ===> DEFAULT VALUES
let { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// ===> MUTATING VARIBLES

let a = 111;
let b = 999;
let obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);

// ===> NESTED OBJECTS

// let {fri} = openingHours;
// console.log(fri)
// let {open,close} = fri;
// console.log(open,close)

let {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'kotapadu road 1-45',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'kotapadu road 1-45', starterIndex: 1 });
*/

/*
// /////////////////////////////////////////////
// ====>>> SPREAD OPERATOR (...) <<<====
// /////////////////////////////////////////////


let arr = [1, 2, 3];
let badArr = [11, 22, arr[0], arr[1], arr[2]];
console.log(arr);
console.log(badArr);

console.log([111, 222, arr]);
let newArr = [111, 222, ...arr]; // 111 222 Array(3)
console.log(newArr); // 111 222 1 2 3
console.log(...arr); // 1 2 3

let newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// ===> COPY ARRAY :-

let mainMenuCopy = [...restaurant.mainMenu];

// ===> JOIN 2 ARRAYS :-

let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// NOTE : Iterables : Arrays, strings,maps, sets. Not objects

let str = 'Eswar';
let letters = [...str, ' ', 'G'];
console.log(letters);
console.log(...str);

let ingredients = [
  prompt(`Let's make pasta Ingredients`),
  prompt(`Let's make pasta Ingredients`),
  prompt(`Let's make pasta Ingredients`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// ===> ON OBJECTS:-
let newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Eswar guptha' };
console.log(newRestaurant);

let restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);

*/

/*
// /////////////////////////////////////////////
// ====>>> REST PATTERN AND PARAMETERS (...) <<<====
// /////////////////////////////////////////////

// =====>>>>> 1) DESTRUCTURING

// =====>>>>> NOTE : spread for expand, rest for compress
// let spread = [1, 2, 3, 4, 5, 6];
// let [i1, i2, , ...rest] = [...spread];
// console.log(rest);
// console.log(spread);

// =====>>>>> SPREAD ,  because on RIGHT side of assignment operator (=)
let arr = [1, 2, ...[3, 4]];

// =====>>>>> REST ,  because on LEFT side of assignment operator (=)
let [a, b, ...others] = arr;
console.log(a, b, others);

console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
let [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// =====>>>>> OBJECTS
// let { thu, fri, sat } = { ...restaurant.openingHours };
// console.log(thu, fri, sat);

let { sat, ...weekDays } = { ...restaurant.openingHours };
console.log(sat, weekDays);

// =====>>>>> 2) FUNCTIONS

let calcSum = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

calcSum(2, 4);
// calcSum(1, 2, 3);
// calcSum(1, 2, 3, 4, 5);
calcSum(...[1, 2, 3, 4, 5, 6]);

restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
*/

/*
console.log(`-------------OR-------------`);
// =====>>>> Use any data type, return ANY data type, short-circuiting
console.log(3 || 'Eswar');
console.log('' || 'eswar');
console.log(true || 0);
console.log(undefined || null);
// || "" || "Hello" || 23 || null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 1;
console.log(guests1);

let guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`-------------AND-------------`);
console.log(0 && 'eswar');
console.log(7 && 'eswar');
console.log('Hello' && 23 && null && 'eswar');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
restaurant.numGuests = 0;
let guest1 = restaurant.numGuests || 10;
console.log(guest1);
// =====>>>>> : Nullish coalescing operator (??) :- The nullish coalescing operator work with nullish values instaed of false values, 
// -> Nullish values are(null , undefined)
// -> False values are (false, 0,"",null,undefined)

let guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// /////////////////////////////////////////////
// ====>>> LOGICAL ASSIGNMENT OPERATOR (...) <<<====
// /////////////////////////////////////////////

let rest1 = {
  name: 'RestOne',
  numGuests: 0,
};

let rest2 = {
  name: 'RestTwo',
  owner: 'Eswar Guptha',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests ?? 10;

rest1.owner = rest1.owner && 'newone';
rest2.owner = 'Newone' && rest2.owner;

console.log(rest1);
console.log(rest2);

*/

/*
// /////////////////////////////////////////////
// ====>>> LOOPING ARRAYS : THE FOR-OF LOOP <<<====
// /////////////////////////////////////////////

let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (let item of menu) {
  console.log(item);
}

// for(let item  of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

for (let [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
// /////////////////////////////////////////////
// ====>>> Optional Chaining (?.) <<<====
// /////////////////////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// =====>>>> with out optinal chaining
// console.log(restaurant.openingHours.mon.close)
// =====>>>> With Optinal Chaining
// console.log(restaurant?.openingHours?.mon?.open);

// ===>>> Example

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  let open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day + 'day'}, we open at ${open}`);
}

// ===>>> Optional chaining on methods
// console.log(restaurant.orderFood());
console.log(restaurant.order?.(1, 0) ?? 'this method does not exist');
console.log(restaurant.orderFood?.() ?? 'this method does not exist');

// ===>>> Optional chaining on Arrays
let users = [{ name: 'Eswar', email: 'eswarguptha01@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
console.log(openingHours);

// ===>>> property name
let properties = Object.keys(openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days, ${[...properties]}`);

for (let day of Object.keys(openingHours)) {
  console.log(day);
}

// ===>>> property values

let values = Object.values(openingHours);
console.log(values);

// ====>>> Entire Object

let entries = Object.entries(openingHours);

for (let [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
// /////////////////////////////////////////////
// ====>>> SETS <<<====
// /////////////////////////////////////////////

let numSet = new Set([1, 2, 6, 3, 1, 2, 4, 3, 2]);
let myNameSet = new Set('Golla Eswar Guptha');
console.log(numSet);
console.log(myNameSet);

console.log(numSet.has(1));
console.log(myNameSet.has('g'));
console.log(myNameSet.size);
console.log(numSet.size);
numSet.add(10);
numSet.delete(1);
numSet.clear();
console.log(numSet.size);
console.log(numSet)

for(let n of myNameSet){
  console.log(n)
}

// => Example

let staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter']
let staffUnique = new Set(staff)
console.log(staffUnique)
let arr = new Array(...staffUnique)
console.log(arr)
*/

/*
// /////////////////////////////////////////////
// ====>>> MAPS <<<====
// /////////////////////////////////////////////

let resta = new Map();
resta.set('name', 'Classico Italiano');
resta.set(1, 'Firenze Italy');
console.log(resta.set(2, 'Lisbon, Portugal'));

resta
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are closed :(');
console.log(resta);

console.log(resta.get('name'));
console.log(resta.get(1));
*/

// /////////////////////////////////////////////
// ====>>> STRINGS <<<====
// /////////////////////////////////////////////

/*
let airline = 'TAP Air Portugal';
let plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('Eswar'[2]);
console.log(plane.length);
console.log('Eswar guptha'.length);

console.log(airline.indexOf('a'));
console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('a'));

console.log(airline.slice(4));
console.log(airline.slice(0, 3));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log('Eswar guptha'.slice(-2));
console.log('Eswar guptha'.slice(0, -1));

// ===>>> practice

let checkMiddleSeat = function (seat) {
  // B and E are middle seats
  let lastChar = seat.slice(-1);
  console.log(
    lastChar === 'B' || lastChar === 'E' ? 'Middle Seat' : 'Window Seat'
  );
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
/*
// =====>>>>> Note:- Strings are primitives, why do they have methods, shouldn't methods available on objects like arrays.
// JS is smart when ever we call a method on string JS will automatical converts that string primitive to String object with same content. in that object the methods are called.then an operatoin done it converts to regular string

console.log(new String("Eswar"))
console.log(typeof new String("Eswar"))

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
let passenger = 'eSWaR'; //Eswar;
let passengerLower = passenger.toLowerCase();
let passengerCap = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCap);

let capName = function (name) {
  console.log(
    name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1)
  );
};

capName('eSWaR');

let str = '    eswar guptha    ';
console.log(str);
console.log(str.length);
console.log(str.trim().length);

let email = 'eswarguptha01@gmail.com';
let wrongMail = '   eSWARgupTHA01@gMaIl.com   ';
console.log(wrongMail.toLowerCase().trim());

// Replace
let priceGb = '288,97@';
let priceUs = priceGb.replace('@', '$').replace(',', '.');
console.log(priceUs);

let annonucement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(annonucement.replace(/door/, 'gate'));
console.log(annonucement.replaceAll('door', 'gate'));

// Boolean

let plane = 'Airbus A320neo';
console.log(plane.includes('320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A'));
console.log(plane.endsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// exercise

let checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('welcome aboard!');
  }
};

checkBaggage('I have a laptop, some FoOD and pocket kNife');
checkBaggage('Socks and cAmera');
checkBaggage('Got some snacks and a gun for protection');
*/

// split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Golla Eswar Guptha'.split(' '));
// let [sunName, firstName, lastName] = 'Golla Eswar Guptha'.split(' ');
// console.log(sunName, firstName, lastName);

// let newName = ['Mr', sunName, firstName, lastName].join(' ');
// console.log(newName);

// console.log(`a+very+nice+string`.split('+').join(' '));

let capitalization = function (name) {
  let lowerCase = name.toLowerCase().split(' ');
  let finalWord = '';
  for (let word of lowerCase) {
    finalWord += word[0].toUpperCase() + word.slice(1) + ' ';
  }
  console.log(finalWord.trim());
};

let capitalization1 = function (name) {
  let lowerCase = name.toLowerCase().split(' ');
  let finalArray = [];
  // console.log(lowerCase)
  for (let word of lowerCase) {
    finalArray.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(finalArray.join(' '));
};

capitalization('jessica ann smith davis');
capitalization('golla ESWaR gupThA');
capitalization1('jessica ann smith davis');
capitalization1('golla ESWaR gupThA');

// Padding
let message = 'Go to gate 23';
console.log(message);
console.log(message.padStart(20, '.'));
console.log(message.padEnd(20, ','));
console.log('Eswar'.padStart(20, '.'));

let maskCreditCard = function (number) {
  let str = String(number);
  let last = str.slice(-4);
  console.log(last.padStart(str.length, 'x'));
};

maskCreditCard(123456789123456789);
maskCreditCard(231234141865968236);

// Repeat
let message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

let planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planeInLine(5);
planeInLine(2);
planeInLine(3);
