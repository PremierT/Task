class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value: number) {
        if (value > 0) {
            this._price = value;
            console.log("Price updated to " + this._price + ".");
        } else {
            console.error("Error: Invalid price.");
        }
    }
}

const product1 = new Product(100);

console.log("Current price: " + product1.price);

product1.price = 200;
console.log("Updated price: " + product1.price);

product1.price = -50;
console.log("Final price: " + product1.price);
