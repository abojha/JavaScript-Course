// Promise Resolve and Chaining

// const myPromise = Promise.resolve(5);

// myPromise.then((value)=>{
//     console.log(value)
// })

// then() - always return promise

function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo")
    })
}

myPromise()
    .then((value)=>{
        console.log(value);
        value += "bar";
        return value; // It is the promise which is return (Not a String)
    })
    .then((value)=>{
        console.log(value)
        value += "baaz";
        return value;
    })
    .then((value)=>{
        console.log(value)
    })