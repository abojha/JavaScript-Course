
const user1 = {
    firstName:"Abhay",
    age:8,
    about: function(){
        console.log(this.firstName, this.age)
    }
}
// Don't Do this mistake
// const myfunc = user1.about; // Here we do not call a function so value of "this" is unknown
// myfunc() // return undefined undefined because it doesn't know the value of this

// To solve above mistake we use bind method

const myfunc = user1.about.bind(user1);
myfunc()  // now work correctly


