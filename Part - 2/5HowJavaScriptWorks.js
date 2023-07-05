// function execution context

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const PersonName = getFullName("Abhay", "Ojha");
console.log(PersonName);