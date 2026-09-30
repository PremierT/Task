import { Product } from "./Product.ts";
import { BaseDAO } from "./BaseDAO.ts";
import { ProductDAO } from "./ProductDAO.ts";

export class OrderDAO extends BaseDAO {

    protected iniTable(): void {

        this.db.exec(`
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                productname TEXT NOT NULL,
                quantity NUMERIC NOT NULL,
                totalprice NUMERIC NOT NULL
            )
        `);
    }

    public createOrder(product: Product, quantity: number): boolean {

        const productDAO = new ProductDAO();

        const prod = productDAO.findProductById(product.getId());

        if (!prod) {
            console.log("ไม่พบสินค้ารายการนี้");
            return false;
        }

        if (quantity <= 0) {
            console.log("จำนวนสินค้าต้องมากกว่า 0");
            return false;
        }

        if (prod.getStock() >= quantity) {

            const total = prod.getPrice() * quantity;

            const stmt = this.db.prepare(`
                INSERT INTO orders(productname, quantity, totalprice)
                VALUES (?, ?, ?)
            `);

            const result = stmt.run(
                prod.getName(),
                quantity,
                total
            );

            if (result.changes > 0) {

                const updated = productDAO.updateStock(
                    prod.getId(),-quantity
                );

                if (!updated) {
                    console.log("ไม่สามารถอัปเดต stock ได้");
                    return false;
                }

                console.log(
                    `สร้าง Order ${quantity} * ${prod.getName()} = ${total} เรียบร้อยแล้ว`
                );

                return true;

            } else {

                console.log("ไม่สามารถสร้าง Order ได้");
                return false;
            }

        } else {

            console.log(
                `สินค้า ${prod.getName()} มีไม่เพียงพอ ` +
                `ต้องการ ${quantity} ชิ้น ` +
                `แต่เหลือเพียง ${prod.getStock()} ชิ้น`
            );

            return false;
        }
    }
}