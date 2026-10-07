interface PaymentMethod{
    creditCard:number;
    Cash:number;

}

class PaymentMethod implements PaymentMethod{
    constructor(public creditCard:number, public Cash:number,private amount:number){}
    
    public PayCredit(){
        console.log(`ชำระเงิน ${this.amount} บาท โดยใช้บัตรเครดิตหมายเลข ${this.creditCard}`);
    }
    public PayCash(){
        console.log(`ชำระเงิน ${this.Cash} บาท`);
    }
}

const pay1 = new PaymentMethod(500045,5000,5000);

pay1.PayCredit();
pay1.PayCash();