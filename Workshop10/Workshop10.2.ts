class CPU {
    constructor(
        private brand: string,
        private cores: number
    ) {}

    process(): void {
        console.log(
            `CPU ${this.brand} with ${this.cores} cores is processing.`
        );
    }

    showInfo(): void {
        console.log(
            `CPU Info: Brand - ${this.brand}, Cores - ${this.cores}`
        );
    }
}


class RAM {
    constructor(
        private capacity: number
    ) {}

    load(): void {
        console.log(
            `RAM ${this.capacity} GB is loading data.`
        );
    }

    showInfo(): void {
        console.log(
            `RAM Info: Capacity - ${this.capacity} GB`
        );
    }
}


class Storage_ {
    constructor(
        private type: string,
        private capacity: number
    ) {}

    readData(): void {
        console.log(
            `Storage ${this.type} with ${this.capacity} GB is reading data.`
        );
    }

    showInfo(): void {
        console.log(
            `Storage Info: Type - ${this.type}, Capacity - ${this.capacity} GB`
        );
    }
}


class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage_;

    constructor(
        cpuBrand: string,
        cpuCores: number,
        ramCapacity: number,
        storageType: string,
        storageCapacity: number
    ) {
        this.cpu = new CPU(cpuBrand, cpuCores);
        this.ram = new RAM(ramCapacity);
        this.storage = new Storage_ (storageType, storageCapacity);
    }

    boot(): void {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();

        console.log("Computer is booting up.");
    }

    showComputerInfo(): void {
        console.log("Computer information:");

        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}


const computer = new Computer("Intel",8,16,"SSD",512 );



computer.boot();
console.log("\n");
computer.showComputerInfo();
