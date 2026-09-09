class FitnessMember {
    public memberName: string;
    private _points: number;

    constructor(memberName: string, points: number) {
        this.memberName = memberName;
        this._points = points;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        if (value >= 0) {
            this._points = value;
        }else {
            console.log(`คะแนนสะสมไม่สามารถเป็นค่าลบ`);
        }
    }

    addPoints(amount: number) {
        if(amount > 0){
            this._points = this._points + amount;
            console.log(`เพิ่มคะแนน ${amount} คะแนน`);
        }else {
            console.log(`เพิ่มคะแนนต่ำกว่า 1 คะแนนไม่ได้`);
        }
    }

    usePoints(amount: number) {
        console.log(`ใช้คะแนน ${amount} แต้ม`);
        if(amount > 0 && amount <= this._points){
            this._points = this._points - amount;
        }else if(amount > this._points){
            console.log(`คะแนนสะสมไม่พอสำหรับการใช้งาน`);
        }else {
            console.log(`การใช้คะแนนสะสมไม่สามารถเป็นค่าลบ`);
        }
    }

    displayInfo() {
        console.log(`คะแนนสะสม: ${this._points} คะแนน`);
    }
}

const member = new FitnessMember("อนันต์",500);
console.log(`สมาชิก: ${member.memberName}`);

member.displayInfo();
member.addPoints(200);
member.displayInfo();
member.usePoints(100);
member.displayInfo();
member.usePoints(1000);
member.displayInfo();


member.points = -100;
member.displayInfo();
