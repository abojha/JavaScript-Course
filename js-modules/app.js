// import { firstname } from "./utils/fname.js";
import { firstname  as fname } from "./utils/fname.js";
import { age } from "./utils/age.js";
import { Person } from "./utils/person.js";

console.log(fname, age)

const person = new Person("Abhay", "Ojha", 22)

console.log(person)
person.info()