function calculateArea(width:number, height:number):number{
    return width*height;
}
let area=calculateArea(8,10);
console.log(`Area: ${area}`);

const showResult = (width:number,height:number):number => width * height;
console.log(`Area: ${showResult(10,5)}`);