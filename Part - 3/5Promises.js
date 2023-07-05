// Promise

console.log("Script Start");
const bucket = ['coffee', 'chips', 'vegetables', 'rice'];


// Produce
const friedRicePromise = new Promise((resolve, reject) => {
   if(bucket.includes("vegetables") &&
    bucket.includes("sale") &&
    bucket.includes("rice")) 
    {
        resolve("Fried Rice");
    } 
    else 
    {
        reject("Couldn't Do It");
    }
 });


// Consume
// how to Consume
// friedRicePromise.then(
//     // When Promise Resolved
//     (myFriedRice)=>{
//     console.log("Let's eat", myFriedRice)}
//     ,
//     // When Promise Reject
//     (error)=>{
//     console.log("Sorry", error)}
// )

// Chaining
friedRicePromise.then(
    // When Promise Resolved
    (myFriedRice)=>{
    console.log("Let's eat", myFriedRice)}
).catch((error)=>{
    console.log(error)
})

setTimeout(() => {
    console.log("Hello from set time out")
}, 0);


for(let i = 0; i <= 100; i++){
    console.log(Math.random(), i)
}

console.log("Script End");

// Promise is a task for browser and its asynchronouse.
// Promises store in microtask queue.

// Microtask queue has high priority than Callback queue