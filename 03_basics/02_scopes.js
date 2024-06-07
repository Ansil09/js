// Global Scope
let a = 300

// Block Scope 
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);


// browser(inspect) scope is different from code scope



// function one(){
//     const username = "ansil"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
    // console.log(website);

    // two()
// }





function addOne(num){
    return num + 2
}
console.log(addOne(5));


const addTwo = function(num){
    return num + 2 
}
console.log(addTwo(5));