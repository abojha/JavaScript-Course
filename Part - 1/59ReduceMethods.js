// Reduce Methods
const numbers = [1, 2, 3, 5];


// sum of all number of array

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// })

// accumulator         currentValue           return
//      1                   2                   3
//      3                   3                   6
//      6                   5                   11

// console.log(sum)

const userCart = [
    {productId: 1, productPrice:12000},
    {productId: 2, productPrice:5000},
    {productId: 3, productPrice:10000},
]

const Total = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.productPrice;
},0)  

console.log(Total)
