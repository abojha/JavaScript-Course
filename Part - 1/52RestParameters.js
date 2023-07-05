// Rest Parameters

// function myfunc(a, b, c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// console.log(myfunc(4, 5, 6))

// function myfunc(a, b, ...c) {
//   // c is rest parameters
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is`, c); // c will be array
// }
// myfunc(1, 2, 3, 4, 5, 6);


// Add All Function

function AddAll(...numbers){
    let total = 0
    for(let num of numbers){
        total = total + num
    }

    console.log(total)
}

AddAll(1, 2,3, 4, 5)