'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// =====================
// LECTURES on dom

// =====================
// display user Movements

let displayMovements = function (movements, sort) {
  containerMovements.innerHTML = ``;

  let movs = sort
    ? movements.slice().sort((a, b) => {
        return a - b;
      })
    : movements;

  movs.forEach(function (mov, i) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    let html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// =====================
// display user Balance

let calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// =====================
// Display Summary
let calcDisplaySummary = function (account) {
  let incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  let out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  let intrest = account.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * account.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${intrest}`;
};

// =====================
// Makeing User names
let createUserNames = function (accs) {
  accs.forEach(function (acc, i) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0];
      })
      .join('');
  });
};

createUserNames(accounts);

// =====================
// Implementing Login

let updateUI = function (account) {
  // => Display movements
  displayMovements(account.movements);
  // => display balance
  calcDisplayBalance(account);
  // => display summary
  calcDisplaySummary(account);
};

// =====================
// Event handler

// => implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent FORM from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => {
    return acc.userName === inputLoginUsername.value;
  });

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('correct pin');
    // => Display ui and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // => clear field
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // update ui
    updateUI(currentAccount);
  }
});

// =====================
// => implementing Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  let reciverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);

  // clear field
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    reciverAcc &&
    amount <= currentAccount.balance &&
    reciverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    // update ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // Update ui
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// =====================
// => implementing Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    let index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    // Delete account
    containerApp.style.opacity = 0;

    // Hide ui
    accounts.splice(index, 1);
  }
  // inputCloseUsername.value = inputClosePin.value = '';
  // inputClosePin.blur();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// ----------------
// =====>>>>> SLICE
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
// ===>>> shallow copy
console.log(arr.slice());
console.log(...arr);

// ----------------
// =====>>>>> SPLICE
// console.log(arr.splice(2))
arr.splice(1, 2);
arr.splice(-1);
console.log(arr);

// ----------------
// =====>>>>> REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse())
console.log(arr2)

// ----------------
// =====>>>>> CONCAT
let letters = arr.concat(arr2)
console.log(letters)
console.log([...arr,...arr2])


// ----------------
// =====>>>>> JOIN
console.log(letters.join('_'))
*/

/*
// ----------------
// =====>>>>> AT method

let arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// getting lat array element
console.log(arr[arr.length-1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

console.log("Eswar".at(-1))
console.log("Eswar".at(0))
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// ----------------
// =====>>>>> Looping Arrays: forEach :-


for (let [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${movement}`);
  }
}

movements.forEach(function (movement, index, array) {
  if (movement < 0) {
    console.log(`Movements ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movements ${index + 1}: You withdrew ${movement}`);
  }
});

// 0 : function(200)
// 1 : function(450) .....

*/

/*
// ----------------
// =====>>>>> Map method

let usdToInd = 82;

let movementsIND = movements.map(function (mov) {
  return mov * usdToInd;
});

let movementsINDArrow = movements.map(mov => {
  return mov * usdToInd;
});

let movementsDes = movements.map((mov, i) => {
  return `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`;

  // if (mov > 0) {
  //   return `Movement ${i + 1}: you deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: you withdrew ${mov}`;
  // }
});

console.log(movements);
console.log(movementsIND);
console.log(movementsINDArrow);
console.log(movementsDes);

// let movementsINDFor = [];
// for (let mov of movements) {
//   movementsINDFor.push(mov * usdToInd);
// }

// console.log(movementsINDFor)
*/

/*
// ----------------
// =====>>>>> Filter method

console.log(movements);

let deposites = movements.filter(function (mov,i,arr) {
  return mov > 0;
});
console.log(deposites);

let withdrawals = movements.filter(mov => {
  return mov < 0;
});
console.log(withdrawals);

// let depositesEach = []
// let withdrawalsEach = []
// movements.forEach(function(mov){
//   if(mov > 0){
//     depositesEach.push(mov)
//   }
//   else{
//     withdrawalsEach.push(mov)
//   }
// })

// console.log(depositesEach)
// console.log(withdrawalsEach)

*/

/*
// ----------------
// =====>>>>> Reduce method

console.log(movements);

let balance = movements.reduce(function (accu, cur, i, arr) {
  // console.log(`${i} :- ${accu}`);
  return accu + cur;
}, 0);

console.log(balance);

let balanceArrow = movements.reduce((accu, cur) => {
  return accu + cur;
});

console.log(balanceArrow);

// let balance2 = 0;
// for (let mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// ====>>> Maximum value

let maxValue = movements.reduce((acc, cur, i) => {
  // console.log(`${i}:- ${acc}`);
  if (acc < cur) {
    return cur;
  } else {
    return acc;
  }
});

console.log(maxValue);

let eurToUsd = 1.1;
let totlaDepositsIND = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totlaDepositsIND);
*/

/*
// ----------------
// =====>>>>> Find method

let findMethod = movements.find(function (mov) {
  return mov < 0;
});
// console.log(findMethod);

let account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

for (let acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}

accounts.forEach(acc => {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc)
  }
});
*/

/*
// ----------------
// =====>>>>> some and every

console.log(movements);
// => Equality
console.log(movements.includes(-130));

// => Some : Condition
let anyDeposite = movements.some(mov => mov < 0);
console.log(anyDeposite);

// => Every : Condition
console.log(account1.movements.every(mov => mov > 0))
console.log(account4.movements.every(mov => mov > 0));
*/

/*
// ----------------
// =====>>>>> flat and flatMap

// let arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// let arrDeep = [[[1, 2], 3], [4, [5, [6]]], 7, 8];
// console.log(arr.flat());
// console.log(arrDeep.flat(10));

let allAccountsMovements = accounts
  .map(acc => {
    return acc.movements;
  })
  .flat()
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);
console.log(allAccountsMovements);

// => flatMap goes only one level deep
let flatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(flatMap);
*/

/*
// ----------------
// =====>>>>> Sort Method

// => Sorting with stings
let owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort())
// console.log(owners)

// => Sotring with numbers

console.log(movements);
// console.log(movements.sort())

// NOTE :-
// returns < 0 :- A, B (keep order)
// returns > 0 :- B, A (switch order)
// => Ascending order
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(movements);
// Descending order
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);
*/
// ----------------
// =====>>>>> More Ways of Creating and Filling Arrays

/*
// ///////////////////////////////////////////////////
// Array Methods Practice

// 1:-
let bankDepositeSome = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((accu, mov) => accu + mov, 0);
console.log(bankDepositeSome);

// 2:- movements above 1000
let numDeposits1000 = accounts
  .map(acc => acc.movements)
  .flat()
  // .filter(mov => mov >= 1000).length;
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

// 3:-

let { diposits, withdrawal } = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.diposits += cur) : (sums.withdrawal += cur);
      return sums;
    },
    { diposits: 0, withdrawal: 0 }
  );
console.log(diposits, withdrawal);

let diposits1000 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((arr, cur) => {
    cur >= 1000 ? arr.push(cur) : null;

    return arr;
  }, []);
console.log(diposits1000);

// 4:-
// this is a nice title -> This Is a Nice Title

let convertTitleCase = function (string) {
  let capitalize = str => str[0].toUpperCase() + str.slice(1);

  let exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  let titleCase = string
    .toLowerCase()
    .split(' ')
    .map(word => {
      return exceptions.includes(word) ? word : capitalize(word);
    })
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title JaYA KRiSHna'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
