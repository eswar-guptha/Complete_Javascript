

----------------------------------------------------------------
# FIRST CLASS FUNCTIONS :
----------------------------------------------------------------

https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/

## Defination:
In Javascript,functions are treated as first class citizens. We can treat functions as values and assign them to another varible, pass them as arguments to another functions, or even return them from another functions.

-> Javascript treats functions as 'First class citizens'.
-> This means functions are simply values.
-> Functions are another type of objects.
-> which means functions can be stored in a varible, object, or array

### Stroring a function 

-> store in a variable : let fn = function doSomething() {}
-> store in an object : let obj = { doSomething : function(){} }
-> store in an array : arr.push(function doSomething() {})

### Assigning a function to a variable:-

let add = function(a,b){
    return a + b
}

### Passing a function to another function:-

function average(a,b,fn){
    return fn(a,b)/2
}

### Returning functions from functions:-

function sayHello(){
    return () => {
        console.log('hello!')
    }
}

----------------------------------------------------------------
# HIGHER ORDER FUNCTIONS
----------------------------------------------------------------
https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad
https://www.freecodecamp.org/news/higher-order-functions-in-javascript/


## Defination :- 
A Higher-Order function is a function that receives a function as an argument or returns the function as output.

-> Higher order functions only possible with first class functions

### Functions that receives another function

#### Example:-
let greet = function () {
  console.log("greet");
};

btnClose.addEventListener("click", greet);

### function that returns another functions
function count() {
  let count = 0;
  return function () {
    count++;
  };
}


# Call backs:-
https://www.javascripttutorial.net/javascript-callback/

## Defination :- 

In javascript functions are firstclass citizens. therefore you can pass a function to another function as an argument.

By defination, a callback is a function that pass into another function as an argument for exccuting later.

-> They are two types of callbacks "Synchronous" and "Asynchronous" call backs.

### Synchronous :- 

A synchronous callback is executed during the execution of higher-order function that uses the callbacks.
