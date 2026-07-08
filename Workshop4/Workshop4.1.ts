class Animal{
    species: string;
    sound: string;
    constructor(s: string, so: string){
        this.species = s;
        this.sound = so;
    }
    makeSound(): void {
        console.log(`The ${this.species} says ${this.sound}.`);
    }
}
const Dog = new Animal("Dog", "Woof");
const Cat = new Animal("Cat", "Meow");
Dog.makeSound();
Cat.makeSound();