class Cars{
    brand: string;
    model: string;
    type: string;
    doors: number;
    engine: string;
    constructor(b: string, m: string, t: string, d: number, e: string){
        this.brand = b;
        this.model = m;
        this.type = t;
        this.doors = d;
        this.engine = e;
    }

    show():void{
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Type: ${this.type}, Doors: ${this.doors}, Engine: ${this.engine}`);
    }
    changeEngine(newEngine: string): void {
        this.engine = newEngine;
    }
}

const Car1 = new Cars("Toyota", "Camry", "Sedan", 4, "V6");
const Car2 = new Cars("BMW", "M4", "Sports", 4, "V6");
const Car3 = new Cars("Ferrari", "458 Italia", "Supercar", 2, "V6");
Car1.show();
Car2.show();
Car3.show();

Car1.changeEngine("V8");
console.log("After changing engine:");
Car1.show();