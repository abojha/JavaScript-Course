function hello(){
    console.log("Hello World")

}

// const hello = {
//     firstName : "Abhay"
// }

// javaScript function ==> function + object
// console.log(hello.name) 
 
// You can add you own property in function 
// hello.myOwnProperty = "Very Unique Property"
// console.log(hello.myOwnProperty)

// name Property --> tells function name
// Similarly function provides more useful properties.


// {} - prototype // Muft ki space function dwara
// console.log(hello.prototype)


// Only function provide prototype property
// if(hello.prototype){
//     console.log("Prototype is Present")
// }
// else{
//     console.log("Prototype is Not Present")
// }

// How to add property into the prototype
hello.prototype.abc = "abc"
hello.prototype.xyz = "zy"
hello.prototype.singh = function(){
    console.log("lalslla")
}

console.log(hello.prototype)
hello.prototype.singh()