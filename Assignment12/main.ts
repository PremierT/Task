import { BookDAO } from "./BookDAO.ts";
import { BorrowRecordDAO } from "./BorrowRecordDAO.ts";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();


bookDAO.addBook(`ISBN-101`,`Bible`,`Jesus Christ`);
bookDAO.addBook(`ISBN-102`,`Dojin`,`Yoko tara`);
console.log(`--- All Books ---`);
const books = bookDAO.findAll();
for (const book of books) {
    console.log(book.getInfo());
}

bookDAO.updateAvailability(`ISBN-101`, true);

console.log(`--- Borrow Book ---`);
const borrow1 = borrowRecordDAO.borrowBook("Ricado Martinez", "ISBN-101");
console.log(`Borrowing ISBN-101 by Ricado Martinez: ${borrow1 ? "Success" : "Failed"}`);
