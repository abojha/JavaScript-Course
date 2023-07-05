// Param Destructuring

// Object
// react

const Person = {
    firstName: "Abhay",
    Gender: "Male"
}

// function printDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.Gender)
// }


function printDetails({firstName, Gender}){
    console.log(firstName)
    console.log(Gender)
}

printDetails(Person)