// and or operators

let firstName = "Abhay";
let age = 5;

// and - both conditions must be true
if (firstName[0] === "a" && age > 18){
    console.log("Inside If")
}
else{
    console.log("Inside else");
}

// or - any one condition can be true
if (firstName[0] === "A" || age > 18){
    console.log("Inside If")
}
else{
    console.log("Inside else");
}