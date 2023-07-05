// Call Back In General

// function myfunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// function myfunc2(){
//     console.log("Function is Doing task 2")
// }

// myfunc(function(){
//     console.log("Functionis Doing task 2")
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    if (typeof number1 === "number" && typeof number2 === "number"){
        
        onSuccess(number1, number2)
    }
    else{
        onFailure()
    }
}

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

getTwoNumbersAndAdd('4', '5', addTwoNumbers, ()=>{
    console.log("Wrong Data Type")
})
getTwoNumbersAndAdd(4, 5, addTwoNumbers, ()=>{
    console.log("Wrong Data Type")
})
