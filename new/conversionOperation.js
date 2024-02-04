let marks = "90abc"

console.log(typeof marks);
console.log(typeof (marks));

let valueNumber = Number(marks)

console.log(typeof valueNumber);
// 33 --> 33
// "123afvb" --> NaN
//  true --> 1 and false --> 0 

let isBoolean = 1
let BooleanIsLoggedIn = Boolean(isBoolean)
console.log(BooleanIsLoggedIn);
// 1 --> true & 0 --> false
// "" --> false
// "hitesh" --> true