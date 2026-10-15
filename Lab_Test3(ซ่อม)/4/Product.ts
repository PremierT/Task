export class Product{
    constructor(private _id:number, private _name:string, private _price:number, private _stock:number){}
    get id():number {return this._id}
    get name():string {return this.name}
    get price():number {return this._price}
    get Stock():number {return this.stock}

    set id(id:number) {if (id < 0){throw new Error("ID cannot be negative");} this._id = id}
    set name(name:string) {this._name = name}
    set price(amount:number) {if (amount < 0){throw new Error("Price cannot be negative");} this._price = amount}
    set stock(quantity:number) {if (quantity < 0){throw new Error("Stock cannot be negative");} this._stock = this.stock}
    getStock():number {return this._stock}

    isAvailable():boolean{
        if(this._stock > 0){
            return true
        }else{return false}
    }

    getInfo(): string{
        return `${this._id}: ${this._name} - ${this._price} THB, Stock: ${this._stock}`;
    }

}