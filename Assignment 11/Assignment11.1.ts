abstract class TravelPackage {
    private _packageId: string;
    private _packageName: string;
    private _destination: string;
    protected _basePrice: number;

    constructor(
        packageId: string,
        packageName: string,
        destination: string,
        basePrice: number
    ) {
        this._packageId = packageId;
        this._packageName = packageName;
        this._destination = destination;
        this._basePrice = basePrice;
    }

    get packageId(): string {
        return this._packageId;
    }

    get packageName(): string {
        return this._packageName;
    }

    get destination(): string {
        return this._destination;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    abstract calculatePrice(numberOfPeople: number): number;
}



class OneDayTrip extends TravelPackage {

    constructor(
        packageId: string,
        packageName: string,
        destination: string,
        basePrice: number
    ) {
        super(
            packageId,
            packageName,
            destination,
            basePrice
        );
    }

    calculatePrice(numberOfPeople: number): number {

        let total = this._basePrice * numberOfPeople;

        if (numberOfPeople >= 5) {
            total = total * 0.90;
        }

        return total;
    }
}



class OvernightTrip extends TravelPackage {

    private _numberOfNights: number;

    constructor(
        packageId: string,
        packageName: string,
        destination: string,
        basePrice: number,
        numberOfNights: number
    ) {
        super(
            packageId,
            packageName,
            destination,
            basePrice
        );

        this._numberOfNights = numberOfNights;
    }

    get numberOfNights(): number {
        return this._numberOfNights;
    }

    calculatePrice(numberOfPeople: number): number {

        let total =
            this._basePrice *
            numberOfPeople *
            this._numberOfNights;

        if (this._numberOfNights >= 3) {
            total = total * 0.85;
        }

        return total;
    }
}



class Customer {

    private _customerId: string;
    private _name: string;
    private _phone: string;

    constructor(
        customerId: string,
        name: string,
        phone: string
    ) {
        this._customerId = customerId;
        this._name = name;
        this._phone = phone;
    }

    get customerId(): string {
        return this._customerId;
    }

    get name(): string {
        return this._name;
    }

    get phone(): string {
        return this._phone;
    }
}



class BookingDetail {

    private travelers: {
        name: string;
        age: number;
    }[];

    constructor() {
        this.travelers = [];
    }

    addTraveler(name: string, age: number): void {
        this.travelers.push({
            name: name,
            age: age
        });
    }

    getTravelers(): {
        name: string;
        age: number;
    }[] {
        return this.travelers;
    }

    showTravelers(): void {

        console.log("Travelers:");

        let number = 1;

        for (const traveler of this.travelers) {

            console.log(
                `${number}. Traveler Name: ${traveler.name}, Age: ${traveler.age}`
            );

            number++;
        }
    }

    getNumberOfPeople(): number {
        return this.travelers.length;
    }
}


class Booking {

    private bookingId: string;
    private customer: Customer;
    private travelPackage: TravelPackage;
    private bookingDetail: BookingDetail;

    constructor(
        bookingId: string,
        customer: Customer,
        travelPackage: TravelPackage
    ) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.travelPackage = travelPackage;

        // Composition
        this.bookingDetail = new BookingDetail();
    }

    addTraveler(name: string, age: number): void {

        this.bookingDetail.addTraveler(
            name,
            age
        );
    }

    showBooking(): void {

        console.log("===== Booking Detail =====");

        console.log(
            `Booking ID: ${this.bookingId}`
        );

        console.log(
            `Customer ID: ${this.customer.customerId}, ` +
            `Name: ${this.customer.name}, ` +
            `Phone: ${this.customer.phone}`
        );

        console.log(
            `Travel Package: ${this.travelPackage.packageId}, ` +
            `Name: ${this.travelPackage.packageName}, ` +
            `Destination: ${this.travelPackage.destination}`
        );

        const numberOfPeople =
            this.bookingDetail.getNumberOfPeople();

        console.log(
            `Number of People: ${numberOfPeople}`
        );

        this.bookingDetail.showTravelers();

        const total =
            this.travelPackage.calculatePrice(
                numberOfPeople
            );

        console.log(
            `Total Price: ${total.toFixed(2)} Baht`
        );
    }
}



class TravelAgency {

    private name: string;
    private packages: TravelPackage[];

    constructor(
        name: string,
        packages: TravelPackage[]
    ) {
        this.name = name;
        this.packages = packages;
    }

    addPackage(
        travelPackage: TravelPackage
    ): void {

        this.packages.push(travelPackage);
    }

    showPackages(): void {

        console.log(
            `Travel Packages offered by ${this.name}:`
        );

        let number = 1;

        for (const pkg of this.packages) {

            console.log(
                `${number}. Package ID: ${pkg.packageId}, ` +
                `Name: ${pkg.packageName}, ` +
                `Destination: ${pkg.destination}, ` +
                `Base Price: ${pkg.basePrice.toFixed(2)} Baht`
            );

            number++;
        }
    }

    getPackages(): TravelPackage[] {
        return this.packages;
    }
}



const package1 = new OneDayTrip(
    "P001",
    "Bangkok City Tour",
    "Bangkok",
    1500
);

const package2 = new OvernightTrip(
    "P002",
    "Chiang Mai Trip",
    "Chiang Mai",
    2500,
    3
);



const agency = new TravelAgency(
    "Sunset Travel",
    [package1, package2]
);

agency.showPackages();



const alice = new Customer(
    "C001",
    "Alice",
    "0812345678"
);



const booking1 = new Booking(
    "B001",
    alice,
    package1
);


booking1.addTraveler("Alice", 30);
booking1.addTraveler("Bob", 28);
booking1.addTraveler("Charlie", 35);
booking1.addTraveler("David", 32);
booking1.addTraveler("Eve", 25);



booking1.showBooking();



console.log("===== Polymorphic Execution =====");

console.log(
    `OneDayTrip Price: ${package1.calculatePrice(5).toFixed(2)} Baht`
);

console.log(
    `OvernightTrip Price: ${package2.calculatePrice(5).toFixed(2)} Baht`
);