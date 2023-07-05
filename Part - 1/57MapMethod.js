// Map Method - Give new array must use return with the functio when use map method

// const numbers = [1, 2, 3, 5];


// const square = function(number){
//     return number * number
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber)

// Realistic Examples
users = [
  { firstName: "Abhay", age: 21 },
  { firstName: "Anjali", age: 19 },
  { firstName: "Mintu", age: 22 },
  { firstName: "Chhavi", age: 23 },
];

const name = users.map(user=>{
    return user.firstName
})

console.log(name)
