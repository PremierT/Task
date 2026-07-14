class Student {
    constructor(public name: string, public id: string, public scores: number[]) {}

    addScore(score: number): void {
        this.scores.push(score);
    }

    getAverage(): void {
        let total = 0;
        let avg: number | string;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        avg = ((total / this.scores.length).toFixed(2));
        console.log(`Average score for ${this.name} (ID: ${this.id}): ${avg}`);
    }
}

const student1 = new Student("Devid", "6842450xx", [55]);

student1.addScore(84);
student1.addScore(91);
student1.addScore(79);

student1.getAverage();