class BonusCalculator {
    calculateBonus(salary: number): number {
        if (salary < 20000) {
            return salary * 0.05;
        } else if (salary < 40000) {
            return salary * 0.08;
        } else {
            return salary * 0.10;
        }
    }
}


class TaxCalculator {
    calculateTax(income: number): number {
        if (income <= 20000) {
            return income * 0;
        } else if (income <= 40000) {
            return income * 0.05;
        } else {
            return income * 0.10;
        }
    }
}


class Employee {
    constructor(
        public name: string,
        public basicSalary: number,
        public bonusCalculator: BonusCalculator,
        public taxCalculator: TaxCalculator
    ) {}

    calculateGrossSalary(): number {
        const bonus = this.bonusCalculator.calculateBonus(
            this.basicSalary
        );

        return this.basicSalary + bonus;
    }

    calculateNetSalary(): number {
        const grossSalary = this.calculateGrossSalary();
        const tax = this.taxCalculator.calculateTax(grossSalary);

        return grossSalary - tax;
    }
}


const bonusCalculator = new BonusCalculator();
const taxCalculator = new TaxCalculator();


const employee1 = new Employee(
    "Apinya",
    30000,
    bonusCalculator,
    taxCalculator
);

const employee2 = new Employee(
    "Somchai",
    45000,
    bonusCalculator,
    taxCalculator
);


// Employee 1
const bonus1 = bonusCalculator.calculateBonus(employee1.basicSalary);
const grossSalary1 = employee1.calculateGrossSalary();
const tax1 = taxCalculator.calculateTax(grossSalary1);
const netSalary1 = employee1.calculateNetSalary();

console.log(`Basic Salary of ${employee1.name}: $ ${employee1.basicSalary}`);
console.log(`Bonus: $ ${bonus1}`);
console.log(`Gross Salary: $ ${grossSalary1}`);
console.log(`Tax: $ ${tax1}`);
console.log(`Net Salary: $ ${netSalary1}`);


// Employee 2
const bonus2 = bonusCalculator.calculateBonus(employee2.basicSalary);
const grossSalary2 = employee2.calculateGrossSalary();
const tax2 = taxCalculator.calculateTax(grossSalary2);
const netSalary2 = employee2.calculateNetSalary();

console.log(`Basic Salary of ${employee2.name}: $ ${employee2.basicSalary}`);
console.log(`Bonus: $ ${bonus2}`);
console.log(`Gross Salary: $ ${grossSalary2}`);
console.log(`Tax: $ ${tax2}`);
console.log(`Net Salary: $ ${netSalary2}`);