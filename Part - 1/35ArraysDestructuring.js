// Arrays Destructuring

myArray = ["value1", "value2", "value3", "value4"];

// let [myvar1, myvar2] = myArray;
// console.log(myvar1, myvar2);

// Skip the second value inclue one more comma in between
// let [myvar1, ,myvar2] = myArray;
// console.log(myvar1, myvar2);

// Add starting two values in two variables and rest of array in new array
let [myvar1, myvar2, ...newArray] = myArray;
console.log(myvar1, myvar2);
console.log(newArray)