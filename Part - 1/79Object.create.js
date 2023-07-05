// solution using object.create

// But what if we need a lot of methods so we need to change in both this is tedious

// Solution

userMethods = {

    about : function () {
      return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function () {
      return this.age >= 18;
    },

    sing:function(){
        return "tona nan nana ann"
    }
}
function createUser(firstName, lastName, eMail, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.eMail = eMail;
    user.age = age;
    user.address = address

    // Now no need this 
    // user.about = userMethods.about, // refrence
    // user.is18 = userMethods.is18    // refrence
    // user.sing = userMethods.sing    // refrence
    

    return user
}

const user1 = createUser("Abhay", "ojha", "abhay@gmail.com", 2, "MYaddress")
console.log(user1)

const is18 = user1.is18()
console.log(is18)

console.log(user1.about())
console.log(user1.sing())

console.log(user1.__proto__)






