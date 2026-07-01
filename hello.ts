function hello(name: string):string{
    return `Hello welcome ${name} to NPRU`;
}
function vat(amount: number):number{
    return amount*0.07;  
}
let message1: string = hello('Subaru');
let message2: string = hello('Emilia');
let price1: number = 8000;
let vat1: number = vat(price1);


console.log(message1);
console.log(message2);
console.log(`Price: ${price1} Vat: ${vat1}`);