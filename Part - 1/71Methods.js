// Methods

// function inside object

// const person = {
//     firstName:"Anjali",
//     age:8,
//     about: function(){
//         // console.log("This is A Person")
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }

// }

// console.log(person.firstName)
// call the functio inside object
// person.about()



function personInfo(){
        // console.log("This is A Person")
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }

const person1 = {
    firstName:"Anjali",
    age:8,
    about: personInfo
}

const person2 = {
    firstName:"Abhay",
    age:10,
    about: personInfo
}

const person3 = {
    firstName:"Chhavi",
    age:80,
    about: personInfo
}

person1.about()
person2.about()
person3.about()
