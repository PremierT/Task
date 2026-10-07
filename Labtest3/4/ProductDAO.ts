import { BaseDAO } from "./BaseDAO.ts";
import { Product } from "./Product.ts";

export class ProductDAO extends BaseDAO {

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT UNIQUE,
                price REAL,
                stock REAL
            )        
        `);
    }

    public addProduct(name:string, price:number, stock:number):boolean{
        const sql = `INSERT OR IGNORE INTO products(name, price, stock)VALUES (?,?,?)`;
        const result = this.db.prepare(sql).run(name,price,stock);
        return result.changes > 0;
    }

    public findProductById(id:number): Product | null{
        const sql = `SELECT * FROM products WHERE id = ?`;
        const row = this.db.prepare(sql).get(id) as any;
        if(!row){
            return null;
        }
        return new Product(row.id,row.name,row.price,row.stock);
    }

    public findALL(){
        const rows = this.db.prepare(`SELECT * FROM products`).all() as any[];
        return rows.map((row) => {return new Product(row.id,row.name,row.price,row.stock)});
    }


    public reduceStock(id:number, amount:number): boolean{
        const sql = `SELECT * FROM products WHERE id = ?`;
        const row = this.db.prepare(sql).get(id)as any;
        if(!row){
            console.log(`สินค้านี้ไม่มีอยู่`)
            return false;
        }else{
            const sql = `UPDATE products SET stock = ? WHERE id = ?`
            const result = this.db.prepare(sql).run(amount,id);
            return result.changes > 0;
        }
    }

}
