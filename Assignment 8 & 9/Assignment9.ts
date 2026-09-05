// Assignment 9: Payroll System
//
// NOTE: The provided spec only showed parts 3 & 4 (HourlyWorker, SalariedWorker).
// The abstract Worker base class and Taxable interface below are reasonable
// standard assumptions to make this file complete — adjust if your earlier
// assignment parts defined them differently.

// ----- Base abstract class -----
abstract class Worker {
  protected name: string;
  protected id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  abstract calculatePay(): number;

  getInfo(): string {
    return `Worker #${this.id} - ${this.name}`;
  }
}

// ----- Interface -----
interface Taxable {
  applyTax(amount: number): number;
}

// ----- 3. HourlyWorker -----
class HourlyWorker extends Worker {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(name: string, id: number, hourlyRate: number, hoursWorked: number) {
    super(name, id);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

// ----- 4. SalariedWorker -----
class SalariedWorker extends Worker implements Taxable {
  private monthlySalary: number;

  constructor(name: string, id: number, monthlySalary: number) {
    super(name, id);
    this.monthlySalary = monthlySalary;
  }

  calculatePay(): number {
    return this.monthlySalary;
  }

  applyTax(amount: number): number {
    // Flat 10% tax rate
    return amount * 0.90;
  }
}

// ----- Demo -----
const worker1 = new HourlyWorker("Alex Chen", 101, 25, 160);
console.log(worker1.getInfo());
console.log(`Pay: $${worker1.calculatePay()}`); // 25 * 160 = 4000

const worker2 = new SalariedWorker("Jordan Lee", 102, 5000);
console.log(worker2.getInfo());
const grossPay = worker2.calculatePay();
console.log(`Gross Pay: $${grossPay}`);
console.log(`Net Pay (after tax): $${worker2.applyTax(grossPay)}`); // 5000 * 0.90 = 4500
