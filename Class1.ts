class Laptop{
    brand: string;
    price: number;
    cpu: string;

    constructor(b: string, p:number, c:string){
        this.brand = b;
        this.price = p;
        this.cpu = c;
    }


    show():void{
        console.log(`Brand: ${this.brand}, Price: ${this.price}, CPU: ${this.cpu}`);
    }
}

const Laptop1 = new Laptop("Asus", 15000, "Intel i7");
const Laptop2 = new Laptop("Dell", 12000, "AMD Ryzen 5");
Laptop1.show();
Laptop2.show();
