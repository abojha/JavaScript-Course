// Every Method 
const numbers = [1, 5, 3, 9, 8]

const even = numbers.every((number)=>number%2===0) // return true if all are even number in numbers
// call back function - return either true or false
// every method - return either true if the condition of callback function is true for all elements other wise false

// console.log(even)


// Realistic Examples
const products = [
  { productId: 1, productName: "p1", price: 400 },
  { productId: 2, productName: "p2", price: 600 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 700 },
];

// Check that every product is less than 500
const price = products.every(productItem => productItem.price < 500)
console.log(price)

