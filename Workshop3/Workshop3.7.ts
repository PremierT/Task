interface Product {
    id: number;
    name: string;
    price: number;
}
type Status = "Available" | "Out of Stock";

function printProductSummary(product: Product, status: Status): void {
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Status: ${status}`);
}

const sampleProduct: Product = {
    id: 101,
    name: "Wireless Headphones",
    price: 79.99
};

printProductSummary(sampleProduct, "Available");