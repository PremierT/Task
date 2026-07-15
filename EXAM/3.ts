let dailySales:number[] = [15000,5500,4200,8900,7300,9600,12500];
let GoodsellDays:number =0;
let total:number = 0;


for(let i:number=0;i<dailySales.length;i++){
    if(dailySales[i]>=10000){
        GoodsellDays += 1;
    }
}
for(let i:number=0;i<dailySales.length;i++){
    total += dailySales[i];
}



console.log(`ยอดขายในแต่ละวันในสัปดาห์นี้ วันที่ 1:${dailySales[0]}, วันที่ 2:${dailySales[1]}, วันที่ 3:${dailySales[2]}, วันที่ 4:${dailySales[3]}, วันที่ 5:${dailySales[4]}, วันที่ 6:${dailySales[5]}, วันที่ 7:${dailySales[6]}`);
console.log(`จำนวนวันที่ขายดีเยี่ยม: ${GoodsellDays}`);
console.log(`ยอดขายเฉลี่ยในสัปดาห์นี้: ${total/dailySales.length}`);