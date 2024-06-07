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