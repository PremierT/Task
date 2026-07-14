// ===== Part 1: Stock Filtering Utility =====
const getLowStockList = (stockQuantities: number[], minRequired: number): number[] => {
    const anyBelowThreshold = stockQuantities.some(qty => qty < minRequired);
    return anyBelowThreshold ? stockQuantities.filter(qty => qty < minRequired) : [];
};

console.log(getLowStockList([15, 5, 9, 8, 2], 10)); // Output: [5, 9, 8, 2]
console.log(`\n----------------------------------------------------------------------------------------\n`);

// ===== Part 2: Product Entity =====
class InventoryItem {
    readonly sku: string;
    itemName: string;
    unitPrice: number;
    stockCount: number;

    constructor(sku: string, itemName: string, unitPrice: number, stockCount: number) {
        this.sku = sku;
        this.itemName = itemName;
        this.unitPrice = unitPrice;
        this.stockCount = stockCount;
    }

    sell(orderQty: number): void {
        const isStockSufficient = orderQty <= this.stockCount;

        if (!isStockSufficient) {
            console.log(`⚠️ Cannot fulfill order: "${this.itemName}" only has ${this.stockCount} unit(s) left.`);
            return;
        }

        this.stockCount -= orderQty;
        console.log(`✅ Order complete — ${orderQty}x "${this.itemName}" sold. ${this.stockCount} unit(s) left in stock.`);
    }

    restock(incomingQty: number): void {
        this.stockCount += incomingQty;
        console.log(`📦 "${this.itemName}" restocked with ${incomingQty} unit(s). Total on hand: ${this.stockCount}.`);
    }
}

const appleWatch = new InventoryItem("A001", "Apple Watch", 1200, 8);
appleWatch.sell(5);
appleWatch.restock(10);

console.log(`\n----------------------------------------------------------------------------------------\n`);
// ===== Part 3: Character & Combat System =====
class Character {
    currentHp: number;

    constructor(
        public characterName: string,
        startingHp: number,
        public backpack: InventoryItem[]
    ) {
        this.currentHp = startingHp;
    }

    pickUp(item: InventoryItem): void {
        this.backpack.push(item);
    }

    consume(itemName: string): void {
        const foundItem = this.backpack.find(entry => entry.itemName === itemName);

        if (!foundItem || foundItem.stockCount <= 0) {
            console.log(`❌ ${this.characterName} has no "${itemName}" left to use.`);
            return;
        }

        this.currentHp += 25;
        foundItem.stockCount -= 1;
        console.log(`💊 ${this.characterName} drank "${itemName}" and recovered 25 HP! (HP now: ${this.currentHp}, remaining: ${foundItem.stockCount})`);

        if (foundItem.stockCount === 0) {
            this.backpack = this.backpack.filter(entry => entry !== foundItem);
            console.log(`🗑️ "${itemName}" is out of stock and was removed from ${this.characterName}'s backpack.`);
        }
    }

    receiveDamage(damageAmount: number): void {
        if (this.currentHp <= 0) {
            console.log(`💀 GAME OVER!\n${this.characterName} has fallen in battle!`);
            return;
        }

        this.currentHp -= damageAmount;
        console.log(`🛡️ ${this.characterName} took ${damageAmount} damage — HP remaining: ${this.currentHp}.`);
    }
}

const healingPotion = new InventoryItem("P001", "Potion [S]", 200, 1);
const Archer = new Character("Archer", 200, []);

Archer.pickUp(healingPotion);
Archer.receiveDamage(150);
Archer.consume("Potion [S]");