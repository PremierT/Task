let stock: number[] = [15, 8, 20, 5, 30];

function getRestockList(inventory: number[]): number[] {
    const restockList: number[] = []; 
    for (let i: number = 0; i < inventory.length; i++) {
        if (inventory[i] < 10) {
            restockList.push(inventory[i]);
        }
    }
    return restockList;
}

console.log(`สินค้าที่ต้องสั่งเพิ่ม: ${getRestockList(stock)}`);