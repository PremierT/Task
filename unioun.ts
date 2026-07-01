let result: string | number;
result = 'Done';
console.log(result);
result = 20;
console.log(result);

enum Status {
    Active,
    Probation,
    Inactive
}
let studentStatus: Status = Status.Inactive;
console.log(studentStatus);

type ID = string | number;
type User = {
    id: ID,
    name: string
}
let admin: User = {id: "007",name: "Jesus"};
console.log(admin);

interface Product{
    readonly barcode: string;
    name: string;
    price: number;
    discount?: number;
}
const product: Product[] = [
    {barcode:"8854506200019", name:"Laptop", price: 25000},
    {barcode:"8854506200029", name:"Printer", price: 8000, discount:0.05},
    {barcode:"8854506200039", name:"Keybroad", price: 3500},
    {barcode:"8854506200039", name:"Mouse", price: 1500, discount:0.08}
];

function showProduct(product: Product): void{
    console.log(`
    Barcode: ${product.barcode}
    Name: ${product.name}
    Price: ${product.price}
    Discount: ${product.discount}
    -----------------------------
    `);
}
for(const p of product){
    showProduct(p);
}

//Lab Practice 3.5: User Roles

enum Role{
    Admin,
    Editor,
    Viewer
}
interface User{
    name: string;
    email: string;
    role: Role;
}
const user: User[] = [
    {name:"Jesus", email:"Jesus@gmail.com", role: 2},
];
function checkAccess(user:User) {
    if(user.role === Role.Admin){
        console.log(`Name: ${user.name}, Hello Master`);
    }else if(user.role === Role.Editor){
        console.log(`Name: ${user.name}, Hello Editor`);
    }else{
        console.log(`Name: ${user.name}, Hello`);
    }
}
const user1: User = {name: "Jesus", email:"Jesus@gmail.com",role:Role.Admin};
const user2: User = {name: "Adam", email:"Adam@gmail.com",role:Role.Editor};
checkAccess(user1);
checkAccess(user2);