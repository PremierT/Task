class Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number){
        this.brand = brand;
        this.speed = speed;
    }

    displayInfo(){
        console.log(`ยี่ห้อ: ${this.brand}`);
        console.log(`ความเร็ว: ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    doors: number;

    constructor(brand: string, speed: number, doors: number){
        super(brand,speed);
        this.doors = doors;
    }

    override displayInfo(){
        console.log(`ยี่ห้อ: ${this.brand}`);
        console.log(`ความเร็ว: ${this.speed} km/h`);
        console.log(`จำนวน: ${this.doors} ประตู`);
    }
}

const car1 = new Car("Toyota", 120 , 4);
car1.displayInfo();