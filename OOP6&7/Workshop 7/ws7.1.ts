class Staff{
    constructor(public name:string,public salary:number){}

    getDetails():string{
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}

class Manager extends Staff{
    constructor(name:string, salary:number, public department:string){
        super(name, salary);
    }

    getDetails():string{
        return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}

const staff = new Staff("Alice", 50000);
console.log(staff.getDetails());

const manager = new Manager("Bob", 80000, "Sales");
console.log(manager.getDetails());