// let and const is hoisted but
// it remain uninitialized at global execution context


// Temporal Dead Zone - variablesbefore initialization remain in tdz


console.log(firstName);
console.log(lastName);
console.log(typeof firstName)
let firstName = "Abhay";
const lastName = "Ojha";
console.log(firstName); 
console.log(lastName); 