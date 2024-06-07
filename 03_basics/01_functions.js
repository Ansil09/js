function sayMyname(){
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("i");
    console.log("l");
}

// sayMyname()

// function addTwoNumber(number1, number2){    //parameters
//     console.log(number1 + number2);
// }

// addTwoNumber(3, null)  //arguments

// function addTwoNumber(number1, number2){    //parameters

//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumber(3, 5)
// console.log(result);



// function addTwoNumber(number1, number2){    //parameters

//     let result = number1 + number2
//     return result
//     console.log("ansl");
// }

// const result = addTwoNumber(3, 5)
// console.log(result);



// function addTwoNumber(number1, number2){    //parameters

//     let result = number1 + number2
//     console.log("ansl");
//     return result
    
// }

// const result = addTwoNumber(3, 5)
// console.log(result);



// function addTwoNumber(number1, number2){    //parameters

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
    
// }

// const result = addTwoNumber(3, 5)
// console.log("result: ", result);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("ansil"));




// function loginUserMessage(username){
//     if(username === undefined){
//         console.log(" Please enter a uername");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());


// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log(" Please enter a uername");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());




function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log(" Please enter a uername");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ans"));


