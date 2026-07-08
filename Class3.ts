class House{
    constructor(public room: number, public bathroom: number, public area: number, public price: number) {

    }

    show():void{
        console.log(`Room: ${this.room}, Bathroom: ${this.bathroom}, Area: ${this.area} sqm, Price: $${this.price}`);
    }
    changePrice(newPrice: number): void {
        this.price = newPrice;
    }
}

const House1 = new House(3, 2, 120, 2500000);
House1.show();
House1.changePrice(2600000);
console.log("After changing price:");
House1.show();