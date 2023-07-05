// Some  Method

const numbers = [2, 4, 5, 8];

// atleast one even or not
const ans = numbers.some((num)=> num%2===0)
console.log(ans)


// Realistic Example
const products = [
  { productId: 1, productName: "p1", price: 400 },
  { productId: 2, productName: "p2", price: 600 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 700 },
];

// Check if any product is more than 500
const price = products.some((product)=>product.price>500);
console.log(price)