// Nested Destructuring

const users = [
  { userId: 1, firstName: "Abhay", Gender: "Male" },

  { userId: 2, firstName: "Anjali", Gender: "Female" },

  { userId: 3, firstName: "Mayank", Gender: "Male" },
];

// Get each object from array in seperate objects
// const [user1, user2, user3] = users; // Get Three objects
// console.log(user1) //{ userId: 1, firstName: 'Abhay', Gender: 'Male' }
// console.log(user2) //{ userId: 2, firstName: 'Anjali', Gender: 'Female' }
// console.log(user3) //{ userId: 3, firstName: 'Mayank', Gender: 'Male' }

// What if we need firstName from first Object, Skip the second Object and Get Gender from Third Object
// const [{firstName}, , {Gender}] = users;
// console.log(firstName);

// Change variable name from firstName to username1
const [{firstName:username1}, , {Gender}] = users;
console.log(username1);
console.log(Gender);
