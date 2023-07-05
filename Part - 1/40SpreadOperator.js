// Spread Operator - Only work with Iterables like arrays, strings etc

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Spread Operator in Array
// const newArray = [...array1, ...array2];

// Spread Operator in String
// const newArray = ["abc"]  // this will be the array with one element - ["abc"]
// const newArray = [..."abc"] // this will be the array with three element - ['a', 'b', 'c']

// Spread Operator in Objects
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}
// console.log(obj1)

// If both objects have same key then the last object's key will be there
// const newObject = {...obj1, ...obj2}

// const newObject = {..."abc"} // { '0': 'a', '1': 'b', '2': 'c' }
// const newObject = {...["item1", "item2"]} //{ '0': 'item1', '1': 'item2' }

// console.log(newObject)
