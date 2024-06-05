let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33absc" => NaN
// true => 1; false => 0;
// "Ansil" => true

// let isLoggedIn = 1

// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);

// let someNumber = 33

// let stringNumber= string(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let isLoggedIn = "Ansil"

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);



// *******************operations*************************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2%2);
console.log(2**2);


let str1 = "Ansil"
let str2 = "hello"

let str3 = str1 + str2
console.log(str3);

console.log("1" +2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1"+ 2 +2);
console.log(1 + 2 + "2");

console.log(+true);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-typeconversion