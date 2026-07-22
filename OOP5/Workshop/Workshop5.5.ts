class FitnessProfile {
    private _weight: number;
    private _height: number;

    constructor(weight: number, height: number) {
        this._weight = weight;
        this._height = height;
    }

    set weight(value: number) {
        if (value > 0) {
            this._weight = value;
        } else {
            console.error("Weight must be positive.");
        }
    }

    get weight(): number {
        return this._weight;
    }

    set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("Height must be positive.");
        }
    }

    get height(): number {
        return this._height;
    }

    get bmi(): number {
        return this._weight / (this._height * this._height);
    }
}


const user = new FitnessProfile(55, 1.82);

console.log(user.bmi.toFixed(2));

user.weight = 69.9;
console.log(user.bmi.toFixed(2));

user.height = -1;