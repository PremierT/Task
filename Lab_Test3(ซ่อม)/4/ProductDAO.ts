import { BaseDAO } from "./BaseDAO";
import { Product } from "./Product";

export class ProductDAO extends BaseDAO{

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            price REAL NOT NULL,
            stock REAL NOT NULL
            )
            `)
    }

    addProduct(name:string,price:number,stock:number): boolean{
        const sql = `INSERT OR IGNORE INTO products(name, price, stock) VALUES (?, ?, ?)`;
        const result = this.db.prepare(sql).run(name, price, stock);
        return result.changes > 0;
    }

    findProductById(id:number): Product | null{
        const sql = `SELECT * FROM products WHERE id = ?`;
        const row = this.db.prepare(sql).get(id) as any;
        if(!row){return null}
        return new Product(row.id,row.name,row.price,row.stock);
    }

    reduceStock(id:number, amount:number): boolean{
        if(amount > 0){
            const result = this.db.prepare(`UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?`).run(amount,id,amount);
            return result.changes > 0;
        }else {return false}
    }
    findALL(): Product[]{
        const rows = this.db.prepare(`SELECT * FROM products`).all() as {id:number,name:string,price:number,stock:number;}[]
        return rows.map( row => new Product(row.id,row.name,row.price,row.stock));
    }
}