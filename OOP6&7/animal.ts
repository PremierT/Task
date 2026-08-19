class Animal{
    move(){
        console.log("Animal is moving");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.move();
dog.bark();