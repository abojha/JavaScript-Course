// Filter Methods - functio must return True or False using with Filter Method

const numbers = [1, 2, 4, 5];

const isEven = function(number){
    return number % 2 === 0;
}

const EvenNumbers = numbers.filter(isEven)

console.log(EvenNumbers)