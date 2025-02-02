const accountId = 144553
let accountEmail = "abhi@google.com"
var accountPass = "1234"
accountCity = "Jaipur"
let accountState;    // undefined

// accountId = 2 // not allowed 
// console.log(accountId);  TypeError: Assignment to constant variable.

accountEmail = "abc@hc.com"
accountPass = "212112"
accountCity = "Hyderabad"

console.log(accountEmail);

/*
prefer not to use var
because of issue in block 

*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])