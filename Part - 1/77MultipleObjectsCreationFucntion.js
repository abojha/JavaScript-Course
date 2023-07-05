// Create Multiple Object


// Function to Create Multiple Object
// create object
// add key value pari
// return object

function createUser(firstName, lastName, eMail, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.eMail = eMail;
    user.age = age;
    user.address = address
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    }
    user.is18 = function(){
        return this.age >= 18
    }

    return user
}

const user1 = createUser("Abhay", "ojha", "abhay@gmail.com", 2, "MYaddress")
console.log(user1)

const is18 = user1.is18()
console.log(is18)

const about = user1.about()
console.log(about)