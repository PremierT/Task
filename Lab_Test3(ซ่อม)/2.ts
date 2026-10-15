abstract class ShippingCalculator {
    protected BasePrice:number;
    constructor(BasePrice:number) {this.BasePrice = BasePrice}

    abstract PriceAndWeight():number;
}

class StandardShipping extends ShippingCalculator{
    private Weight:number;
    private RatePricePerKG:number;
    constructor(BasePrice:number,RatePricePerKG:number,Weight:number){super(BasePrice),this.Weight = Weight,this.RatePricePerKG = RatePricePerKG}
    PriceAndWeight(): number {
        return this.BasePrice + this.Weight * this.RatePricePerKG;
    }
}

class ExpressShipping extends ShippingCalculator{
    private Weight:number;
    private speed:number;
    constructor(BasePrice:number,Weight:number,speed:number){super(BasePrice),this.Weight = Weight,this.speed = speed}
    PriceAndWeight(): number {
        return this.BasePrice + this.Weight * 20 * this.speed;
    }
}

const p1 = new ExpressShipping(150,11,3);
console.log(`Total_price is ${p1.PriceAndWeight()}.`);

const p2 = new StandardShipping(150,20,80);
console.log(`Total_price is ${p2.PriceAndWeight()}.`);