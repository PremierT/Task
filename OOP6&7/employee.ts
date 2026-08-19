export {}; // Ensure this file is treated as a module
class Employee {
    constructor(public name: string){}
}

class Programmer extends Employee {
    constructor(name: string, public language: string) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name: string, public department: string) {
        super(name);
    }
}


const empl = new Employee("David");
console.log(empl.name); //public property can be accessed directly

const prog = new Programmer("Lucy", "TypeScript");
console.log(prog.name + " is a programmer who uses " + prog.language);

const mgr = new Manager("John", "IT");
console.log(mgr.name + " is a manager of the " + mgr.department + " department.");
