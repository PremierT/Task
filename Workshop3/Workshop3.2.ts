const calculatePrice = (price: number, discountPercent: number):number  => 
    price - (price * (discountPercent / 100)) < 0 ? 0 : price - (price * (discountPercent / 100));
console.log(calculatePrice(1000, 10));
