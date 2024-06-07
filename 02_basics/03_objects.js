// singleton
// Object.create - construct through for singleton

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

// Object literals
const JsUser = {
    name: "ansil",
    "full name" : "ansil kumar shah",
        mySym: "mykey1",
        [mySym2]: "mykey2",
    age: 18,
    location: "Nepal",
    email: "ansil@google.com",
    isLoggedIn: false,
    lstLoginDay: ["Monday", "saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym2]);

JsUser.email ="ansil@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ansil@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());