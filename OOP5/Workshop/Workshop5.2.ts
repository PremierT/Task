class Book {
    public readonly isbn: string;
    public title: string;
    private isBorrowed: boolean;

    constructor(isbn: string, title: string,isBorrowed:boolean) {
        this.isbn = isbn;
        this.title = title;
        this.isBorrowed = isBorrowed;
    }

    public borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("Successfully borrowed.");
        } else {
            console.log("Book is unavailable.");
        }
    }

    public returnBook() {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("Book returned successfully.");
        } else {
            console.log("Book was not borrowed.");
        }
    }
}

const book1 = new Book("9780132350884", "Clean Code",false);

book1.borrowBook();
book1.borrowBook();
book1.returnBook();
book1.returnBook();

