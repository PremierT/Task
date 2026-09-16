class Patient {
    constructor(
        public patientId: number,
        public name: string,
        public age: number
    ) {}

    showInfo(): void {
        console.log(
            `Patient ID: ${this.patientId}, Name: ${this.name}, Age: ${this.age}`
        );
    }
}

class Doctor {
    constructor(public doctorId: number,public name: string,public specialty: string) {}

    showInfo(): void {
        console.log(
            `Doctor: ${this.name}\nSpecialty: ${this.specialty}`
        );
    }

    examine(patient: Patient): void {
        console.log(`Doctor: ${this.name} Specialty: ${this.specialty}`);
        console.log(
        `   is examining \n   Patient:ID ${patient.patientId} Name: ${patient.name} Age: ${patient.age}.`
        );
    }

    diagnose(patient: Patient, disease: string): void {
        console.log(
            `Doctor: ${this.name} has diagnosed ` +
            `Patient ID: ${patient.patientId}, ` +
            `Name: ${patient.name}, ` +
            `Age: ${patient.age} with ${disease}.`
        );
    }

    prescribeMedicine(patient: Patient, medicine: string): void {
        console.log(
            `Doctor: ${this.name} has prescribed ` +
            `${medicine} to Patient ID: ${patient.patientId}, ` +
            `Name: ${patient.name}, Age: ${patient.age}.`
        );
    }

    calculateTreatmentCost(patient: Patient,fee: number,medicineFee: number): void {
        const totalCost = fee + medicineFee;
        console.log(
            `Doctor: ${this.name} has calculated the treatment ` +
            `cost for Patient ID: ${patient.patientId}, ` +
            `Name: ${patient.name}, Age: ${patient.age}.`
        );

        console.log(`Total cost: ${totalCost}`);
    }
}


const doctorJohn = new Doctor(1,"Dr. John","Cardiology");
const doctorSmith = new Doctor(2,"Dr. Smith","Neurology");

const alice = new Patient(101, "Alice", 30);
const bob = new Patient(102, "Bob", 25);

doctorJohn.examine(alice);
doctorJohn.diagnose(alice, "ไข้หวัด");
doctorJohn.examine(bob);
doctorSmith.diagnose(bob, "เส้นเลือดในสมอง");

doctorJohn.prescribeMedicine(alice, "ยาลดไข้");
doctorSmith.prescribeMedicine(bob, "ยาละลายลิ่มเลือด");

doctorJohn.calculateTreatmentCost(alice,500,200);
doctorSmith.calculateTreatmentCost(bob,300,150);