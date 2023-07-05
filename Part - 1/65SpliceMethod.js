// Splice Method
// start, delete, insert

const myArray = ['item1', 'item2', 'item3']


//delete
// myArray.splice(1, 1) // return deleted item
// console.log(myArray)

//insert
// myArray.splice(1,0, 'insertedItem')
// console.log(myArray)

// insert and delete
const storedelete = myArray.splice(1, 2, "insertedItem1", "insertedItem2")
console.log(myArray)
console.log("deleted Items", storedelete)
