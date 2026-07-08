
//level 1 & 2
class BankAccount2 {
    ownerName: string;
    balance: number;
    constructor(ownerName: string, Amount: number) {
        this.ownerName = ownerName;
        this.balance = Amount;
    }
    displayBalance(): void {
        console.log(`Owner: ${this.ownerName}, Balance: $${this.balance}`);
    }
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
}

const account2 = new BankAccount2("Nicole", 1500);
account2.displayBalance();
account2.withdraw(200);
account2.deposit(500);

