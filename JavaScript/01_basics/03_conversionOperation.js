let score = "33"
console.log(typeof score);


let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber);

// but what if there is like 33abc
let score2 = "33abc"
let score2ToNumber = Number(score2)
console.log(score2ToNumber);             // Nan not a number this one of the issue in js

console.log(typeof score2ToNumber);


// "33" => 33
// "33abc" => NaN (Not a Number)
// "abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);