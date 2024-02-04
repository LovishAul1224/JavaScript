// Datatype is of two types
// 1. Primitive Datatype
// 2. Non-Primitive Datatype
// How data is stored in memory and how it is accessed on that basis data is classified into two types
// primitive datatype
// 7 types - String, Number, Boolean, null, Undefined, Symbol, BigInt
// Reference (Non-Primitive)
// Array,Objects,Functions
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id == anotherId);
// Array Example
const name = ["I'm","Lovish","Aul"]
console.log(name);

let myObj ={
    name: "Lovish Aul",
    age: 19,
    rollNo: 12345,
}
// Creating a Function

const MyFunction = function(){
    console.log("Hello World!!");
}