class Employee{
    private _firstname: string;
    private _lastname: string;

    constructor(firstname:string, lastname:string){
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get fullname():string{
        return `${this._firstname} ${this._lastname}`;
    }

    set fullname(fullname: string) {
        const [fname,lname] = fullname.split(" ");
        this._firstname = fname;
        this._lastname = lname;
    }
}

const empl = new Employee("พีรพัฒน์", "เทศสวัสดิ์วงศ์");
console.log(empl.fullname);

empl.fullname = "ก้องภพ อ่อนคำ";
console.log(empl.fullname);