class Wallet {
    private _balance: number = 0;

    constructor(balance: number) {
        if(balance > 0){
            this._balance = balance;
        }else{
            console.error("Balance cannot be negative.");
        }
    }

    get formattedBalance(): string {
        return `${this._balance} dollars.`;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value >= 0) {
            this._balance = value;
        } else {
            console.error("Balance cannot be negative.");
        }
    }

    get balanceInTHB():number{
        return this.balance * 33.5;
    }
}

const wallet1 = new Wallet(150);

console.log(wallet1.formattedBalance);
console.log(wallet1.balanceInTHB+" THB.");

wallet1.balance = 200;

console.log(wallet1.formattedBalance);
console.log(wallet1.balanceInTHB+" THB.");

wallet1.balance = -50;