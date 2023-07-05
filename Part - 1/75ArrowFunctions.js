// Arrow Functions

// const user1 = {
//   firstName: "Abhay",
//   age: 8,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };
// user1.about()

// Arrow function don't have "this"
const user1 = {
  firstName: "Abhay",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

// user1.about() // Arrow functions don't have "this", they take it from surroundings (one level up)

// Even we can't change the "this" of arrow function 
// user1.about.call(user1);