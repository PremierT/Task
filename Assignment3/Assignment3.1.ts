interface Product{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let myInventory : Product[] = [
    {id:1, name:"Laptop", price: 25000, quantity: 20},
    {id:2, name:"Keyboard", price: 3500, quantity: 47},
    {id:2, name:"Headphone", price: 1700, quantity: 34},
];

function updateStock(producId:number,amountSold:number) {
    for (let i:number =0; i < myInventory.length; i++) {
        if (myInventory[i].id === producId) {
            if (myInventory[i].quantity < amountSold) {
                console.log("Not enough stock for " + myInventory[i].name);
            } else {
                myInventory[i].quantity -= amountSold;
                console.log("Stock updated for " + myInventory[i].name + ". New quantity: " + myInventory[i].quantity);
            }
            break;
        }
    }
}

updateStock(1, 5);
updateStock(2, 50);