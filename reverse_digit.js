
let x = 1534236469;

let rev = '';
    let negative = x < 0;
    x = negative ? -x : x;
    
    while(x > 0){
        let digit = Math.trunc(x % 10);
        x = Math.trunc(x / 10);
        rev += digit;
    }
    rev = rev || '0';
    rev = parseFloat(rev);
    if(rev > Math.pow(2,32)){
        console.log('out of 32 =');
        rev = 0;
    }
    rev = negative ? -rev : rev

    console.log('rev =',rev);