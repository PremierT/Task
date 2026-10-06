import { BaseDAO } from "./BaseDAO.ts";
import { Book } from "./Book.ts";

export class BookDAO extends BaseDAO {

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                isbn TEXT UNIQUE,
                title TEXT,
                author TEXT,
                isAvailable INTEGER
            )
        `);
    }

    public addBook(isbn: string,title: string,author: string): boolean {
        const sql = `INSERT OR IGNORE INTO books(isbn, title, author, isAvailable)VALUES (?, ?, ?, ?)`;
        const result = this.db.prepare(sql).run(isbn, title, author, 1);
        return result.changes > 0;
    }

    public findBookByIsbn(isbn: string): Book | null {
        const sql = `SELECT * FROM books WHERE isbn = ?`;
        const row = this.db.prepare(sql).get(isbn) as any;
        if (!row) {
            return null;
        }
        return new Book(row.id,row.isbn,row.title,row.author,row.isAvailable === 1);
    }

    public updateAvailability(isbn: string,isAvailable: boolean): boolean {
        const sql = `UPDATE books SET isAvailable = ? WHERE isbn = ?`;
        const result = this.db.prepare(sql).run(isAvailable ? 1 : 0, isbn);
        return result.changes > 0;
    }
    public findAll(): Book[] {
        const rows = this.db.prepare(`SELECT * FROM books`).all() as any[];
        return rows.map((row) => {
            return new Book(row.id,row.isbn,row.title,row.author,row.isAvailable === 1);
        });
    }
} 