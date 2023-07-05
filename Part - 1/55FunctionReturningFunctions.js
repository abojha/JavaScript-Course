// Function Returning Functions

function myFunc(){
    // return "a"; // Can return any data type through return keyword from function
    // Similarly function can be return through an function
    function Hello(){
        console.log("Hello World")
    }
    return Hello
}

const answer = myFunc() // now the function Hello() store in answer variable

answer() // Can call answer() any time