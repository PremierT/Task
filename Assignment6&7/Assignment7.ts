class Book {
    title: string;
    author: string;
    price: number;
    stock: number;

    constructor(
        title: string,
        author: string,
        price: number,
        stock: number
    ) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.stock = stock;
    }

    sellBook(quantity: number): void {
        if (quantity <= this.stock) {
            this.stock -= quantity;

            const total = this.price * quantity;

            console.log(`Sold ${quantity} book(s).`);
            console.log(`Total: ${total} Baht`);
        } else {
            console.log("Not enough stock.");
        }
    }
}


class EBook extends Book {
    fileSize: number;
    downloadLink: string;

    constructor(
        title: string,
        author: string,
        price: number,
        stock: number,
        fileSize: number,
        downloadLink: string
    ) {
        super(title, author, price, stock);

        this.fileSize = fileSize;
        this.downloadLink = downloadLink;
    }

    override sellBook(quantity: number): void {
        const total = this.price * quantity;

        console.log(`Sold ${quantity} E-Book(s).`);
        console.log(`Total: ${total} Baht`);
        console.log(`Download Link: ${this.downloadLink}`);
    }
}


class PrintedBook extends Book {
    weight: number;
    shippingCost: number;

    constructor(
        title: string,
        author: string,
        price: number,
        stock: number,
        weight: number,
        shippingCost: number
    ) {
        super(title, author, price, stock);

        this.weight = weight;
        this.shippingCost = shippingCost;
    }

    override sellBook(quantity: number): void {
        if (quantity <= this.stock) {
            this.stock -= quantity;

            const bookTotal = this.price * quantity;
            const total = bookTotal + this.shippingCost;

            console.log(`Sold ${quantity} Printed Book(s).`);
            console.log(`Book Total: ${bookTotal} Baht`);
            console.log(`Shipping Cost: ${this.shippingCost} Baht`);
            console.log(`Total: ${total} Baht`);
        } else {
            console.log("Not enough stock.");
        }
    }
}



const book = new Book(
    "JavaScript Basics",
    "John Smith",
    300,
    10
);

const ebook = new EBook(
    "TypeScript Guide",
    "Jane Doe",
    250,
    0,
    5,
    "https://example.com/download"
);

const printedBook = new PrintedBook(
    "Learn Programming",
    "Mike Brown",
    500,
    5,
    1.2,
    50
);


book.sellBook(2);

console.log();

ebook.sellBook(1);

console.log();

printedBook.sellBook(2);

console.log();

console.log("Book stock:", book.stock);
console.log("EBook stock:", ebook.stock);
console.log("Printed Book stock:", printedBook.stock);