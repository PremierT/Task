export class Product{
    constructor(private id:number,private name:string,private price:number,private stock:number){}
    public getId(): number {return this.id}
    public getName(): string {return this.name}
    public getPrice(): number {return this.price}
    public getStock(): number {return this.stock}

    public setId(id:number):void {this.id = id}
    public setName(name:string):void {this.name = name}
    public setPrice(price:number):void {this.price = price}
    public setStock(stock:number):void {this.stock = stock}

    public isAvailable():boolean{
        if(this.stock > 0){
            return true;
        }else{
            return false;
        }
    }

    public getInfo(): string {
        const status = this.isAvailable() ? "Available" : "Not Available";
        return `ID: ${this.id} Produsct: ${this.name} Value: ${this.price}$ Quantity: ${this.stock}`;
    }
}