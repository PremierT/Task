class Character{
    constructor(public name: string, public health: number, public level: number) {}

    attack(target: Character, damage: number): void {
        target.takeDamage(damage);
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health < 0) {this.health = 0; }
        console.log(`${this.name} took ${damage} damage and now has ${this.health} health.`);
        if (this.health <= 0) {console.log(`${this.name} has been defeated!`);}
    }
}

class Mage extends Character {
    constructor(name: string, public health: number, level: number, public mana: number) {
        super(name, health, level);
    }
    
    attack(target: Character, damage: number): void {
        let enhancedSpellDamage = damage * 5;
        if (this.mana >= 20) {
            target.takeDamage(enhancedSpellDamage);
            this.mana -= 20;
            console.log(`${this.name} casts a spell and deals ${enhancedSpellDamage} damage, Mana left: ${this.mana}.`);
        } else {
            console.log(`${this.name} does not have enough mana to cast a spell.`);
        }
    }
}

class Warrior extends Character {
    constructor(name: string, public health: number, level: number, public stamina: number) {
        super(name, health, level);
    }

    attack(target: Character, damage: number): void {
        let enhancedSwordDamage = damage * 3;
        if (this.stamina >= 10) {
            target.takeDamage(enhancedSwordDamage);
            this.stamina -= 10;
            console.log(`${this.name} swings the sword and deals ${enhancedSwordDamage} damage, Stamina left: ${this.stamina}.`);
        } else {
            console.log(`${this.name} does not have enough stamina to swing the sword.`);
        }
    }
}

const mage = new Mage("Gandalf", 100, 10, 50);
const warrior = new Warrior("Aragorn", 120, 12, 30);
const rogue = new Character("Legolas", 80, 8);
console.log(`Mage: ${mage.name}, Health: ${mage.health}, Mana: ${mage.mana}`);
console.log(`Warrior: ${warrior.name}, Health: ${warrior.health}, Stamina: ${warrior.stamina}`);
console.log(`Rogue: ${rogue.name}, Health: ${rogue.health}, Level: ${rogue.level}`);

console.log("\n\nBattle Begins!\n\n");

mage.attack(warrior, 15);

warrior.attack(rogue, 10);

rogue.attack(mage, 150);