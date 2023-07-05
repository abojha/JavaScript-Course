// Has Own Property
// New Keyword
// 1. this = {}
// 2. return this
// 3. automatically link __proto__ with prototype


function CreateUser(firstName, lastName, eMail, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.eMail = eMail;
  this.age = age;
  this.address = address;
}

// add all function in prototype of userMethod function
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "tana nan nana ann";
};

const user1 = new CreateUser("Abhay", "ojha", "abhay@gmail.com", 2, "MYaddress");
console.log(user1);

// for (key in user1){
//     console.log(key) // give all keys even the belogs to prototype
// }

//  Only own Propery
for (key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)

    }
}

