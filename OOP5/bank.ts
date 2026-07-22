class BankAccount {
    public readonly accountNumber: string = "";
    private balance : number = 0;

    constructor(accno:string){
        this.accountNumber = accno;

    }

    public deposit(amount: number){
        if(amount > 0){
        this.balance = this.balance + amount;
        console.log(`Deposit ${amount} bath to ${this.accountNumber} account, Amount ${this.balance} bath.`);
        }else{
            console.error("Wrong cash amount.");
        }
    } 
    
    public withdraw(amount :number){
        if(amount <= this.balance){
        this.balance = this.balance - amount;
        }else{
            console.log(`Not enough cash.`);
        }
        console.log(`Withdraw ${amount} bath in ${this.accountNumber}. account, Amount ${this.balance} bath.`);
    }

    public showBal(){
        return this.balance;
    }
}

const account1 = new BankAccount("123456789");
account1.deposit(500);
console.log(account1.accountNumber);
console.log(account1.showBal());

const account2 = new BankAccount("987654321");
account2.deposit(2000);
account2.withdraw(500);
console.log(account2.accountNumber);
console.log(account2.showBal());
