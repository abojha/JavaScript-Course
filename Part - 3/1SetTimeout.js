// synchronous programming vs asynchronous programming

// Java Script is synchronouse and single threaded.

// synchronous programming
// console.log("Script Start")

// for (let i = 0; i < 10000; i++){
//     console.log("Inside for Loop")
// }

// console.log("Script End")

// setTimeout
console.log("Script Start");

// function hello(){
//     console.log("Hello World");
// }

const id = setTimeout(()=>{
    console.log("Inside SetTimeout")
}, 0);

for (let i = 0; i < 100; i++){
    console.log("....")
}
console.log(id)
console.log("Script End");  
clearTimeout(id)