// Practice Class

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    isSuperCute(){
        return this.age <= 1
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{

}



// const animal1 = new Animal("Tom", 2)
// console.log(animal1)
// animal1.eat()

const Dog1 = new Dog("Tuffy", 5)

console.log(Dog1.isCute())