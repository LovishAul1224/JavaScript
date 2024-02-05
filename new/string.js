const name = "Lovish Aul"
const value = 100
// console.log(name +" " +  value + " " + "value");
// this syntax is outdated one if you want to print something you can use backticks in console.log 
console.log(`Hello my name is ${name} and my marks are ${value}`);
const fname = new String("AUL0001")
console.log(fname[6]);
console.log(fname.length);
console.log(fname.toLowerCase());
console.log(fname.indexOf('U'));

const lname = new String("AulLovish")
console.log(lname.substring(0,5));
console.log(lname.slice(-8,5));
// markdown
const newSTringOne = "  Lovish     "
 console.log(newSTringOne.trim());
 const url = "https://lovish.com/lovish%20aul"
console.log(url.replace('%20','/'));

// url include is used to find wheather the string or constant is present in variable or not
// to convert a string to an array use console.log(varibleNAme.split('-'));