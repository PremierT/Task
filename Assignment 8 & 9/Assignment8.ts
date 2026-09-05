// Assignment 8: Monster Battle
// Demonstrates polymorphism with a base class and multiple subclasses.

// ----- Base Class -----
class Monster {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  // Base attack, meant to be overridden by subclasses
  attack(): void {
    console.log(`${this.name} attacks with a basic move!`);
  }
}

// ----- Subclasses -----
class FireMonster extends Monster {
  attack(): void {
    console.log(`${this.name} breathes a scorching flame! 🔥 Enemy is burned!`);
  }
}

class WaterMonster extends Monster {
  attack(): void {
    console.log(`${this.name} unleashes a crashing tidal wave! 🌊 Enemy is soaked!`);
  }
}

class GrassMonster extends Monster {
  attack(): void {
    console.log(`${this.name} whips out thorny vines! 🌿 Enemy is entangled!`);
  }
}

// ----- Battle Arena -----
function battleArena(monsters: Monster[]): void {
  console.log("=== Battle Arena: FIGHT! ===");
  monsters.forEach((monster) => {
    monster.attack(); // Polymorphism: calls the correct overridden attack()
  });
  console.log("=== Battle Arena: End of Round ===");
}

// ----- Demo -----
const flamewing = new FireMonster("Flamewing", 100);
const aquafin = new WaterMonster("Aquafin", 100);
const thornbite = new GrassMonster("Thornbite", 100);

const monsterSquad: Monster[] = [flamewing, aquafin, thornbite];

battleArena(monsterSquad);
