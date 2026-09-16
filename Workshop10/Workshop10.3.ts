class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    getSubtotal(): number {
        return this.price * this.quantity;
    }

    showInfo(): void {
        console.log(
            `${this.name} ราคา ${this.price} บาท × ${this.quantity} ชิ้น`
        );
    }
}


class Order {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`เพิ่มสินค้า: ${product.name} ราคา ${product.price} บาท จำนวน ${product.quantity} ชิ้น`);
    }

    calculateTotal(): number {
        let total = 0;

        for (const product of this.products) {
            total += product.getSubtotal();
        }

        return total;
    }

    showProducts(): void {
        for (const product of this.products) {
            product.showInfo();
        }
    }

    calculateDiscount(percent: number): number {
        const total = this.calculateTotal();
        const discount = total * percent / 100;
        console.log(`ส่วนลด ${percent}%: ${discount} บาท`);
        return discount;
    }

    calculateNetTotal(discountPercent: number): number {
        const total = this.calculateTotal();
        const netTotal = total - discount;
        console.log(`ราคาสุทธิ: ${netTotal} บาท`);
        return netTotal;
    }
}


const product1 = new Product("Notebook", 50, 3);
const product2 = new Product("Mouse", 200, 2);
const product3 = new Product("Keyboard", 500, 1);



const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.addProduct(product3);


console.log("========== รายการสินค้า ==========");

order1.showProducts();
const total = order1.calculateTotal();

console.log("\n========== สรุปราคา ==========");
console.log(`ราคารวม: ${total} บาท`);
const discountPercent = 10;
const discount = order1.calculateDiscount(discountPercent);
const netTotal = order1.calculateNetTotal(discountPercent);
