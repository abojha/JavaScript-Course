// The defect in this function is that when we create a new user we will have new function "about" and "is18" for each user


// Solution

userMethods = {

    about : function () {
      return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function () {
      return this.age >= 18;
    }
}
function createUser(firstName, lastName, eMail, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.eMail = eMail;
    user.age = age;
    user.address = address
    user.about = userMethods.about, // refrence
    user.is18 = userMethods.is18    // refrence
    

    return user
}

const user1 = createUser("Abhay", "ojha", "abhay@gmail.com", 2, "MYaddress")
console.log(user1)

const is18 = user1.is18()
console.log(is18)

console.log(user1.about())

