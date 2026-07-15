let memberGym:[name:string, age:number, boolean][] = [
    ["อนันต์",25,false],
    ["เจนจิรา",35,true],
    ["ชาคริต",42,true],
    ["รุ่งโรจน์",49,false],
    ["สามารถ",27,false],
];

for(let i:number=0;i<memberGym.length;i++){
    if(memberGym[i][2] === false){
        console.log(`${memberGym[i][0]} อายุ ${memberGym[i][1]} ยังไม่ชำระเงิน`);
    }
}
