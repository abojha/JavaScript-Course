// Clone Arrays - Means a Seperate Copy of Array
// let Array1 = ["item1", "item2"];
// let Array2 = ["item1", "item2"];

// First Method for Cloning
// let Array1 = ["item1", "item2"];
// let Array2 = Array1.slice(0);

// Second Method for Cloning
// let Array1 = ["item1", "item2"];
// let Array2 = [].concat(Array1)

// Spread Operators for Cloning
// let Array1 = ["item1", "item2"];
// let Array2 = [...Array1];

// console.log("These Arrays are Same?",Array1 === Array2);

// console.log("Array1", Array1);
// console.log("Array2", Array2);

// Array1.push("item3");
// console.log("After Changes In Arrays");
// console.log("Array1", Array1);
// console.log("Array2", Array2);


// Concatenation
// let Array1 = ["item1", "item2"];
// console.log("Array1", Array1);
// Array2 = Array1.slice(0).concat(["item3", "item4"])
// console.log("Array2", Array2);

// Concatenation with Spread Operator
let Array1 = ["item1", "item2"];
console.log("Array1", Array1);
Array2 = [...Array1, "item3", "item4"]
console.log("Array2", Array2);