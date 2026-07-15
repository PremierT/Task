let total:number = 0;
for(let i:number=1;i<=30;i++){
    total += i;
    if(i<=30){
        console.log(`วันที่ ${i}:ยอดเงิน = ${total} บาท`);
    }
}

    console.log(`ขอแสดงความยินดี เดือนนี้คุณออมเงินได้ ${total}`);
