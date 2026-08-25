class Product {
    private _name: string;
    private _price: number;
    private _stock: number;

    constructor(name: string, price: number, stock: number) {
        this._name = name;
        this._price = price;
        this._stock = stock;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("Warning: Price must be greater than 0.");
        }
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        if (value >= 0) {
            this._stock = value;
        } else {
            console.log("Warning: Stock cannot be negative.");
        }
    }

    get inventoryValue(): number {
        return this._price * this._stock;
    }
}



const product = new Product("Laptop", 25000, 5);

product.price = -1000;

console.log("Product:", product.name);
console.log("Price:", product.price);
console.log("Stock:", product.stock);
console.log("Total Inventory Value:", product.inventoryValue);