// Immediately Invoked Function Expression (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


// Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

(function aurcode (){
    console.log(`DB CONNECTED Two`);
})()


// ********************************************************


((name) => {
    console.log(`DB CONNETCED TWO ${name}`);
}) ('ansillllll')