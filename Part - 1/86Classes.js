// In javascript Classes are fake

class CreateUser{
    constructor(firstName, lastName, eMail, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.eMail = eMail;
    this.age = age;
    this.address = address;
    }

    about(){return `${this.firstName} is ${this.age} years old.`;}
    is18(){return this.age >= 18;}
    sing(){return "tona nan nana ann";}
}

const user1 = new CreateUser("Abhay", "ojha", "abhay@gmail.com", 18, "Gwalior")

console.log(user1.firstName)
console.log(user1.age)
console.log(user1.is18())
console.log(user1.firstName)