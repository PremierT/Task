
type Category = "Electronics" | "Clothing" | "Food";

interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}

const products: Product[] = [ //product interface structure
    { id: 1, name: "Laptop", category: "Electronics", price: 35000 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 590 },
    { id: 3, name: "Burger", category: "Food", price: 120 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 25000 }
];

function filterProductsByCategory(category: Category){
    const filteredResult = [];
    for (let i:number=0; i<products.length; i++) {
        if(products[i].category === category) {
            filteredResult.push(products[i]);
        }
    }
    return filteredResult;
}
console.log(filterProductsByCategory("Electronics"));
