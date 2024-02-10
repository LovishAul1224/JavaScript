// array
const arr = [2,1,3,8,7,5]
console.log(arr[2]);
// array methods 
arr.push(4,32,21) // here push method is used to add elements in array
console.log(arr);
// pop is used to remove the last element from the arrayList
arr.pop()
console.log(arr);
// unshift- it is used to shift the array and it adds up new element in the beginning of array list
arr.unshift(90)
console.log(arr);
// shift - it is used to remove the first element from the array list , it should remain blank
arr.shift()
console.log(arr);
// include and index are used to check element in the array
// join is used to convert an array in form of string 
console.log(arr.join());

// use of slice and splice in an array
console.log("A ", arr);

const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("B ",arr);

const myn2 = arr.splice(1,3);
console.log("C",arr);
console.log(myn2);


