let key = "email"
const person = {
  name: "Abhay",
  age: 22,
  "person hobbies": ["Guitar", "Reading"],
};


// We can't acces person.person hobbies from dot notation now
// console.log(person.person hobbies)

// We need to make the above variable "key" value as key in the person object
// as 'email': "abhayojha0012@gmail.com"

// But from dot notation variable key itself become key not the email
// person.key = "abhayojha0012@gmail.com"

// from bracket Notation this can be possbile as
person[key] = "abhayojha0012@gmail.com";
console.log(person)