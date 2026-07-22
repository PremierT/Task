class Thermostat {
    private _temperature: number = 25;

    get temperature(): number {
        return this._temperature;
    }

    set temperature(value: number) {
        if (value >= 15 && value <= 30) {
            this._temperature = value;
        } else {
            console.error("Temperature out of range (15-30°C)");
        }
    }
}


const room = new Thermostat();

console.log(room.temperature);

room.temperature = 28;
console.log(room.temperature);

room.temperature = 35;
console.log(room.temperature);