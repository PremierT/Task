class Rectangle {
    width: number;
    height: number; 
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    show(): void {
        console.log(`Area: ${this.getArea()}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
    }

}

const rectangle = new Rectangle(5, 10);
const area = rectangle.getArea();
const perimeter = rectangle.getPerimeter();

rectangle.show();

