//Level 3: Interaction Between Objects 
class Hero{
    name: string;
    hp: number;
    attackPower: number;
    constructor(name: string, hp: number, attackPower: number){
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }
    attack(hero: Hero, target: Hero, attackPower: number): void {
        target.hp -= attackPower;
        console.log(`${this.name} attacks ${target.name} for ${attackPower} damage!.`);
        if (target.hp <= 0) {
            console.log(`${target.name} has failed!.`);
        }
    }
}

const hero1 = new Hero("Archer", 100, 50);
const hero2 = new Hero("Knight", 120, 200);

hero1.attack(hero1, hero2, hero1.attackPower);
hero2.attack(hero2, hero1, hero2.attackPower);