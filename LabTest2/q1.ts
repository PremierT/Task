class Student {
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        console.log(`ชื่อ: ${this.name}`);
        console.log(`อายุ: ${this.age} ปี`);
    }
}

const std1 = new Student("สมชาย",20);
std1.displayInfo();