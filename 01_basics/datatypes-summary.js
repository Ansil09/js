// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint

// Data Types
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = nulll
let userEmail;             => undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 6327568237658n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "hanuman"];
let myObj = {
    name: "ansil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// **************************************************************************

// stack (Primitive), Heap (Non-Primitive)

let myLinked = "Ansilkumarshah"

let anothername = myLinked
anothername = "shah"

console.log(myLinked);
console.log(anothername);   

/* result => Ansilkumarshah (get copy value not ref)
        shah (get original value not ref)  */

let userOne{
    email = "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ansil@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// result =>  get original value by reference 