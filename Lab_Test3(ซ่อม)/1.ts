interface PaymentMethod{
    CreditCard: string;
    pay(amount:number): string;
}

class CreditCardPay implements PaymentMethod{
    public CreditCard:string;
    constructor(CreditCardNumber:string){this.CreditCard = CreditCardNumber}

    pay(amount: number): string {
        return `ชำระเงิน ${amount} บาท โดยใช้บัตรเครดิตหมาเลข ${this.CreditCard}`;
    }
}

const pay1 = new CreditCardPay("5544-8874-6548");
console.log(pay1.pay(550));