abstract class ShippingCalculator {
    constructor(public p:number) {}

    abstract WeightCalculator(): number;
}

class StandardShipping extends ShippingCalculator{
    constructor(private R:number,p:number,private Kg:number) {super(p)};

    override WeightCalculator(){
        let price:Number;
        return price = (this.p + this.Kg) * this.R;
    }

}
class ExpressShipping extends ShippingCalculator{
    constructor(private R:number,p:number,private Kg:number,private S:number) {super(p)};
    
    override WeightCalculator(){
        let price:Number;
        return price = (this.p + this.Kg) * this.R;
    }

    Total_Price(){
        let total_price 
        return total_price = ((this.p + this.Kg) * this.R) * this.S;
    }
}


const p1 = new ExpressShipping(14,50,5,6);
console.log(`Total Price is ${p1.Total_Price()}`);