// Objects Inside Arrays
// Very Useful in Real World Applications

const users = [
  { userId: 1, firstName: "Abhay", Gender: "Male" },

  { userId: 2, firstName: "Anjali", Gender: "Female" },

  { userId: 3, firstName: "Mayank", Gender: "Male" },
];


for (let user of users){
    console.log(user.userId)
}
// console.log(users)