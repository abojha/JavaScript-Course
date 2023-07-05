// Example 3 - Closure

// function myFunction(power){

//     return function(number){
//         return number ** power
//     }
// }

// Short hand for above function
const myFunction = power => number => number ** power

const square = myFunction(3);
const ans = square(2);
console.log(ans)