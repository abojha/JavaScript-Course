// Call Back Functions


function myfunc(a){
    console.log("Hello World")

}

// myfunc([1, 2, 3]) // a will be an array
// myfunc("abc") // a will be string


// Similarly 'a' can be a function
// Function Can be passed inside function

function myfunc2(callback){
    callback() // calling the function that come here through an argumen
}

myfunc2(myfunc) // function passes as an argument of another funciton