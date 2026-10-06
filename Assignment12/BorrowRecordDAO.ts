import { BaseDAO } from "./BaseDAO.ts";
import { BookDAO } from "./BookDAO.ts";

export class BorrowRecordDAO extends BaseDAO {

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS borrow_records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                borrowerName TEXT,
                bookIsbn TEXT,
                borrowDate TEXT
            )
        `);
    }

    public borrowBook(borrowerName: string, isbn: string): boolean {
        const bookDAO = new BookDAO();
        const book = bookDAO.findBookByIsbn(isbn);

        if (!book) {
            console.log(`Book not found.`);
            return false;
        }

        if (!book.getIsAvailable()) {
            console.log(`Book is not available.`);
            return false;
        }
        const borrowDate = new Date().toISOString();
        const transaction = this.db.transaction(() => {
        const sql = `INSERT INTO borrow_records(borrowerName, bookIsbn, borrowDate)VALUES (?, ?, ?)`;
        this.db.prepare(sql).run(borrowerName, isbn, borrowDate);
        const updateSql = `UPDATE books SET isAvailable = ? WHERE isbn = ?`;
        const result = this.db.prepare(updateSql).run(0, isbn);
        return result.changes > 0;
        });
        return transaction();
    }
}