// Sort Method
// Rearrange the elements either in ascending or descending order.
// Sort Method changes the original array
// Sort as a string by default


// const numbers = [1000, 400, 60, 31, 22] 
// // numbers.sort() // Sort as a string
// numbers.sort((a, b)=>a-b) // Now sort correctly for numbers
// console.log(numbers)



//Working of sort for two numbers in asceding order.
// a-b if positive then b,a
// a-b if negative then a,b

//Working of sort for two numbers in descending order.
// a-b if positive then a,b
// a-b if negative then b,a


// Realistic Example
const products = [
    {productId:1, productName:"p1", price:400},
    {productId:2, productName:"p2", price:600},
    {productId:3, productName:"p3", price:200},
    {productId:4, productName:"p4", price:700},
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
})


// highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price
})

console.log(highToLow)