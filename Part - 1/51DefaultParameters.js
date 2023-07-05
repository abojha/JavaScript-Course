// Default Parameters

function addTwo(a, b=9){ //9 is default value of b
    return a + b;
}

let sum = addTwo(2);
console.log(sum)