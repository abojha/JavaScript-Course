// undefined
// let firstName;

// console.log(typeof firstName)
// firstName = "Abhay"
// console.log(typeof firstName);

// null
// let nullVariable = null;
// This is bug in javaScript that typeof null is object.
// console.log(nullVariable);
// console.log(typeof nullVariable);

//BigInt - Store large Number beyond capacity of Number
let myNumber = 123;
let myNumberBigInt = BigInt(123);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + myNumberBigInt)