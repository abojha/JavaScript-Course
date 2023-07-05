// userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },

//   sing: function () {
//     return "tona nan nana ann";
//   },
// };

function createUser(firstName, lastName, eMail, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.eMail = eMail;
  user.age = age;
  user.address = address; 

  return user;
}

// add all function in prototype of userMethod function
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "tana nan nana ann";
};

const user1 = createUser("Abhay", "ojha", "abhay@gmail.com", 2, "MYaddress");
console.log(user1);

const is18 = user1.is18();
console.log(is18);

console.log(user1.about());
console.log(user1.sing());

console.log(user1.__proto__);
