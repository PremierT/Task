import { OrderDAO } from "./OrderDAO.ts";
import { ProductDAO } from "./ProductDAO.ts";

const productDAO = new ProductDAO();
const orderDAO = new OrderDAO();

productDAO.addProduct("Keyboard", 1500, 26);
productDAO.addProduct("RTX 5090", 50000, 50);
productDAO.addProduct("Mouse", 2000, 80);
productDAO.addProduct("Head Set", 1000, 40);

console.log("=== Products ===");

const products = productDAO.findAll();

products.forEach(p => {
    console.log(p.getInfo());
});

console.log("=====================");

const product = productDAO.findProductById(3);

if (product) {

    console.log("\n=== สั่งซื้อ ===");

    const success = orderDAO.createOrder(product, 5);

    if (success) {
        console.log("สั่งซื้อสำเร็จ");
    } else {
        console.log("สั่งซื้อไม่สำเร็จ");
    }

} else {
    console.log("ไม่พบสินค้า");
}

// แสดง Stock หลังสั่งซื้อ
const updatedProduct = productDAO.findProductById(3);

if (updatedProduct) {
    console.log(`หลังสั่งซื้อ: ${updatedProduct.getInfo()}`);
}