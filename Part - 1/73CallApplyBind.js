// Call Apply Bind

// const user1 = {
//     firstName: "Abhay",
//     age: 8,
//     about: function(hobby, favMusician){
//         console.log(this.firstName, this.age, hobby, favMusician)
//     }
// }

// user1.about()
// const user2 = {
//     firstName: "Anjali",
//     age: 9
// }
// // user1.about()

// // Objective is to call  function about from user1 through user2
// user1.about.call(user2) // now this for about function will be user2
// // user1.about.call(user2) // undefine undefined

// user1.about.call(user2, "guitar", "Sanam");

function about(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician)
    }

const user1 = {
    firstName: "Abhay",
    age: 8,
    
}
const user2 = {
    firstName: "Anjali",
    age: 9
}

// call 
about.call(user1, "Music", "Sanam")
about.call(user2, "MakeUp", "MakeUp")

// apply - same as call but we pass extra arguments as array
about.apply(user1, ["Music", "Sanam"])
about.apply(user2, ["MakeUp", "MakeUp"])

//bind - return a function that we can store and call later
const func = about.bind(user1, "guitar", "Sanam")
func()




