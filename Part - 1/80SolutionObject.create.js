const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

// const obj2 = {
//     key3 : "value3"
// }

// const obj2 = {};


// there is more than one way to create empty object
const obj2 = Object.create(obj1) // empty object with __proto__ obj1


obj2.key3 = "value3"
obj2.key1 = 'value11'
console.log(obj2.key3)
console.log(obj2.key2) // key2 is not in obj2 so will go to obj1
console.log(obj2.key1) // priority will be of its own key/value pair

console.log(obj2.__proto__)


// Now we can understand solution of 79