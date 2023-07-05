// Getters and Setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // Now fullname will be used as property not function
    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName

    }
}

const person1 = new Person("Abhay", "Ojha", 19)

// after using "get"
// person1.fullname


// after using set
person1.fullName("Anjali Jha")

