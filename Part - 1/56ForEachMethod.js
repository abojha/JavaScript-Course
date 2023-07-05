// For Each Method

const numbers = [4, 2, 5, 8];

// function multipleByTwo(number, index){
//     console.log("index is ", index);
//     console.log(`${number}*2 = ${number*2}`)
// }

// multipleByTwo(numbers[0], 0)
// multipleByTwo(numbers[1], 1)
// multipleByTwo(numbers[2], 2)
// multipleByTwo(numbers[3], 3)

// Through for Loop
// for (let i = 0; i < numbers.length; i++){
//     multipleByTwo(numbers[i], i)
// }

// Same as above code
// numbers.forEach(multipleByTwo) 

// For Each takes the array element one by one and pass element and its index one by one to the calling function

// short Hand
// numbers.forEach(function (number, index) {
//   console.log("index is ", index);
//   console.log(`${number}*2 = ${number * 2}`);
// });

// Realistic Examples
users = [
    {firstName : "Abhay", age : 21},
    {firstName : "Anjali", age :19},
    {firstName : "Mintu", age : 22},
    {firstName : "Chhavi", age : 23}
]

users.forEach(user =>{
    console.log(user.firstName);
    console.log(user.age)
})
