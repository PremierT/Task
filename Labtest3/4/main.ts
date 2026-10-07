import { ProductDAO } from "./ProductDAO.ts";

const productDAO = new ProductDAO();

productDAO.addProduct("Keyboard",1200,8);
productDAO.addProduct("Mouse",3000,6);
productDAO.addProduct("Headphone",5000,50);

const prods = productDAO.findALL();
for (const prod of prods){
    console.log(prod.getInfo());
}

console.log(`AfterUpdate`);
console.log(productDAO.reduceStock(1,0));

const prodsd = productDAO.findALL();
for (const prod of prodsd){
    console.log(prod.getInfo());
}
