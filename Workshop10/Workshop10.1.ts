class Engine {
    constructor(private type: string) {}

    start(): void {
        console.log(`เครื่องยนต์ทำงาน`);
    }

    stop(): void {
        console.log(`เครื่องยนต์หยุดทำงาน`);
    }

    showType(): void {
        console.log(`ประเภทเครื่องยนต์: ${this.type}`);
    }
}

class Battery {
    constructor(private capacity: number) {}

    charge(): void {
        console.log(`ขณะนี้แบตเตอรี่มีอยู่ ${this.capacity}%`);
        this.capacity = 100;
        console.log(`ชาร์จแบตเตอรี่เรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}%`);
    }

    showStatus(): void {
        console.log(`ขณะนี้แบตเตอรี่มีอยู่ ${this.capacity}%`);
    }
}

class Car {
    private engine: Engine;
    private battery: Battery;

    constructor(engine:string ,capacity:number) {
        this.engine = new Engine(engine);
        this.battery = new Battery(capacity);
    }

    startCar(): void {
        this.engine.start();
    }

    stopCar(): void {
        this.engine.stop();
    }

    showCarInfo(): void {
        this.engine.showType();
        this.battery.showStatus();
    }

    chargeBattery(): void {
        this.battery.charge();
    }

    drive(): void {
        this.engine.start();
        console.log(`เครื่องยนต์กำลังเดินหน้า`);
    }
}

const car1 = new Car("V8 TwinTurbo", 50);

car1.startCar();
car1.showCarInfo();
car1.drive();
car1.chargeBattery();
car1.stopCar();

console.log(`\n`);

const car2 = new Car("V6 Hybrid", 80);

car2.startCar();
car2.showCarInfo();
car2.drive();
car2.chargeBattery();
car2.stopCar();