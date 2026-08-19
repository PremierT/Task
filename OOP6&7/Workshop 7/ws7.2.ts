class Shape{
    constructor(public color:string){}
}

class Circle extends Shape{
    constructor(color:string, public radius:number){
        super(color);
    }

    getArea():number{
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape{
    constructor(color:string, public sideLength:number){
        super(color);
    }

    getArea():number{
        return this.sideLength * this.sideLength;
    }
}

const circle = new Circle("red", 5);
console.log(`Circle Color: ${circle.color}, Area: ${circle.getArea()}`);

const square = new Square("blue", 4);
console.log(`Square Color: ${square.color}, Area: ${square.getArea()}`);