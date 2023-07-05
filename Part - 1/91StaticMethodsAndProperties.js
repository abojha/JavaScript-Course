// Static Methods and Properties


// Getters and Setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // Static Methods
    static InfoClass(){
        return "This is Person Class"
    }

    // Static Properites
    static desc = "static Property"
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

// Static Methods can be called by Class not through Instance or Objects
console.log(Person.InfoClass())
console.log(Person.desc)
