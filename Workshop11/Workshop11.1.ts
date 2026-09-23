class MenuItem {
    private _price: number;
    private _name: string;
    private _category: string;

    constructor(name: string,price: number,category: string) {
        this._name = name;
        this._price = price;
        this._category = category;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get category(): string {
        return this._category;
    }
}

class Restaurant {
    private menu: MenuItem[];
    private name: string;

    constructor(name: string, menu: MenuItem[]) {
        this.menu = menu;
        this.name = name;
    }

    showMenu(): void {
        console.log(`========== ${this.name} Menu ==========`);
        for (const item of this.menu) {
            console.log(
                `${item.name} - ${item.price.toFixed(2)} Baht - ${item.category}`
            );
        }
        console.log("=====================================");
    }

    getMenu(): MenuItem[] {
        return this.menu;
    }
}

class Order_ {

    private items: {
        item: MenuItem;
        quantity: number;
    }[];

    constructor() {
        this.items = [];
    }

    addItem(item: MenuItem, quantity: number): void {
        this.items.push({item: item, quantity: quantity});
    }

    calculateTotal(): number {
        let total = 0;

        for (const orderItem of this.items) {
            total +=
                orderItem.item.price *
                orderItem.quantity;
        }

        return total;
    }

    showOrder(): void {
        console.log("Order Details:");

        for (const orderItem of this.items) {
            const subtotal =
                orderItem.item.price *
                orderItem.quantity;

            console.log(
                `${orderItem.quantity} x ${orderItem.item.name} - ` +
                `${orderItem.item.price.toFixed(2)} - ` +
                `${orderItem.item.category} = ` +
                `${subtotal.toFixed(2)} Bath`
            );
        }
        console.log("-------------------------------------");
        const total = this.calculateTotal();
        console.log(`Total: $${total.toFixed(2)}`);
        let discount = 0;
        if (total >= 500) {
            discount = total * 0.01;
        }
        const netPrice = total - discount;
        console.log(
            `Net Price (1% Disc): ${netPrice.toFixed(2)} Bath`
        );
    }
}


class Customer {
    constructor(
        private name: string
    ) {}
    placeOrder(order: Order_): void {
        console.log(
            `${this.name} placed an order for:`
        );
        order.showOrder();
    }
}


const pizza = new MenuItem("Pizza",250,"Main Course");
const salad = new MenuItem("Salad",150,"Appetizer");
const pasta = new MenuItem("Pasta",200,"Main Course");

const restaurant = new Restaurant("Mcdonal",[pizza,salad,pasta]);

restaurant.showMenu();

const order1 = new Order_();
order1.addItem(pizza, 2);
order1.addItem(salad, 1);

const alice = new Customer("Alice");
alice.placeOrder(order1);