class WeatherStation {
    private _celsius: number;

    constructor(celsius: number = 0) {
        this._celsius = celsius;
    }

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            console.error("Temperature cannot be below absolute zero.");
        }
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9 / 5) + 32;
    }

    set fahrenheit(value: number) {
        const celsius = (value - 32) * 5 / 9;

        if (celsius < -273.15) {
            console.error("Temperature cannot be below absolute zero.");
        }

        this._celsius = celsius;
    }
}

const weather = new WeatherStation(32);
console.log(`Celsius: ${weather.celsius}, Fahrenheit: ${weather.fahrenheit}`);

weather.celsius = 45;
console.log(`Celsius: ${weather.celsius}, Fahrenheit: ${weather.fahrenheit}`);

weather.fahrenheit = 122;
console.log(`Celsius: ${weather.celsius}, Fahrenheit: ${weather.fahrenheit}`);

weather.fahrenheit = -500;
