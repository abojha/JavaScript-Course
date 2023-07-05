// const user1 = {
//   firstName: "Abhay",
//   age: 8,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

// Short Hand to create function inside object
const user1 = {
  firstName: "Abhay",
  age: 8,
  // this way 
  about() {
    console.log(this.firstName, this.age);
  },
};

user1.about()