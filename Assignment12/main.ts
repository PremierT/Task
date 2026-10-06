import { BookDAO } from "./BookDAO";
import { BorrowRecordDAO } from "./BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();

console.log(`--- Add Books ---`);

bookDAO.addBook(`ISBN-101`,`Clean Code`,`Robert C. Martin`);
bookDAO.addBook(`ISBN-102`,`The Pragmatic Programmer`,`David Thomas`);
bookDAO.addBook(`ISBN-103`,`Design Patterns`,`Erich Gamma`);
console.log(`--- All Books ---`);
const books = bookDAO.findAll();
for (const book of books) {
    console.log(book.getInfo());
}

bookDAO.updateAvailability(`ISBN-101`, true);

console.log(`--- Borrow Book ---`);
const borrow1 = borrowRecordDAO.borrowBook("Alice", "ISBN-101");
console.log(`Borrowing ISBN-101 by Alice: ${borrow1 ? "Success" : "Failed"}`);
