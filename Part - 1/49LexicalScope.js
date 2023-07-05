// Lexical Scope
const myVAr = 5
function myApp(){
    function myFunc(){
        // const myVAr = 8
        console.log("Inside the myFunc", myVAr)
    }
    const myFunc2 = function (){}
    const myFunc3 = () => {}

    console.log(myVAr)
    myFunc()
}
myApp()