// Optional Chaining

const user = {
    firstName:"Abhay",
    address:{houseNumber:"1234"}
}

console.log(user.firstName)
console.log(user.address)
console.log(user.address.houseNumber)

// console.log(user.age) // undefined - b/c age is not a key
// console.log(user.age.num) // Error - b/c user.age return undefined
// // and undefined.num creates error

// .? gives no error it gives undefined
console.log(user?.age?.num) // Error - b/c user.age return undefined
// and undefined.num creates error