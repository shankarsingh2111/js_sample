let n = 12345;

let rem = n;
let digits = 0;
while(rem > 0){
    rem = Math.round(rem / 10);
    digits++;
    console.log(digits+' rem =',rem);
}
console.log('digits =',digits);


let dig = Math.floor(Math.log10(n)+1);
console.log('dig =',dig);