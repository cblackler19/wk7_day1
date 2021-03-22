const __smallNum=1000; // 8 = 8192 if isHDD == FALSE. 8 = 8000 if isHDD == TRUE.
const isHDD=true // BOOLEAN: TRUE or FALSE.
let bigNumber=0; // __smallNum in its big byte form.

const realNumbers=(a)=>{
    if(isHDD){
        let bytes=__smallNum*1000000000;
        bigNumber=bytes/(1024*1024*1024);
        console.log('HDD SIZE: ',bigNumber.toFixed(2),'GB');
    }else{
        bigNumber=a*1024;
        console.log('MEMORY SIZE: ',bigNumber,'MB')
    }
};realNumbers(__smallNum);