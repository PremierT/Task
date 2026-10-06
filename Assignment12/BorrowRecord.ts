export class BorrowRecord {
    constructor(private id: number,private borrowerName: string,private bookIsbn: string,private borrowDate: string) {}

    public getId(): number {return this.id;}
    public getBorrowerName(): string {return this.borrowerName;}
    public getBookIsbn(): string {return this.bookIsbn;}
    public getBorrowDate(): string {return this.borrowDate;}


    public setId(id: number): void {this.id = id;}
    public setBorrowerName(borrowerName: string): void {this.borrowerName = borrowerName;}
    public setBookIsbn(bookIsbn: string): void {this.bookIsbn = bookIsbn;}
    public setBorrowDate(borrowDate: string): void {this.borrowDate = borrowDate;}
}