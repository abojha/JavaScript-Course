// Practice Class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

// Extended class from Animal
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} dog can run at ${this.speed}`;
  }

  eat(){
    return `${this.name} is eating like a dog`
  }
}

const tommy = new Dog("Tommy", 20, 56);

console.log(tommy.name);
console.log(tommy.speed);
console.log(tommy.run());
console.log(tommy.eat()) // Priority will be own class
