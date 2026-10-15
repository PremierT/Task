import { ProductDAO } from "./ProductDAO";

const product1 = new ProductDAO();
product1.addProduct("Keyboard",1200,5);

const success = product1.reduceStock(1,2);
const prod = product1.findProductById(1);
console.log(`Stock product Id:1 is available true or false : ${prod?.isAvailable()}`);


if(success){
    console.log(`Reduce stock successfully!`);
}else{
    console.log(`Cannot reduce stock!`);
}

const products2 = product1.findALL();

for (const product of products2) {
    console.log(product.getInfo());
}