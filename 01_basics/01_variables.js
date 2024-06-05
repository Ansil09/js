const accountId = 13234
let accountEmail = "ansil@google.com"
var accountPassword = "12345"
accountCity = "Biratnagar"
let accountState;

// accountId = 2 //  not allowed


accountEmail = "ansil@gmail.com"
accountPassword = "ansil@xyz"
accountCity = "Bengalore"

/* Prefer not to use var
beacuse of issue in block scope and functional scope */

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);