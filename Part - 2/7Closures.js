// Closures - 30-40%
// analyse - 70-80%
// real example - 100%


// function can return functions

// function outerFunction(){

//     function innerFunction(){
//         console.log("Hello World");
//     }

//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans)
// ans();


function printFullName(firstName, lastName){

    function printName(){
        console.log(firstName, lastName);
    }

    return printName; // will return not alone but along with local memory of printFullName ; This is closure
}

const ans = printFullName("Abhay", "Ojha");
// console.log(ans)
ans();