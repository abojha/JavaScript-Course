// Find Methods
// return first occurrence that satisfied the call back function condition
const myArray = ["Hello", "cat", "dog", "lion"]


// Call Back Function
function isLength3(string){
    return string.length === 3;
}
const firstLength3Word =  myArray.find((string)=>string.length===3); 
console.log(firstLength3Word)

// Realistic Examples

const users = [
    {userId:1, userName:"abojha"},
    {userId:2, userName:"anjiojha"},
    {userId:3, userName:"chhaviojha"},
    {userId:4, userName:"mintuojha"},
]

// find a particular user
const userid3 = users.find((user)=>user.userId===3)
console.log(userid3)