// Nested If Else - Game
// Winning Number is 19

let winningNumber = 19;

// + change the string to a number  
let userGuess = +prompt("Guess a Number");
console.log(userGuess)


if (userGuess === 19){
    console.log("Your Guess is Right");
}

else{
    if (userGuess < winningNumber){
        console.log("Too Low");
    }
    else{
        console.log("Too High");
    }
}
