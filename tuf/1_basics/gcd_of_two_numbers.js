let N1 = 300, N2 = 270;

function findGCD(N1, N2){
    let min = Math.min(N1, N2);
    let i = Math.ceil(min/2);
    console.log('min =',min, 'Math.ceil(min/2) =', Math.ceil(min/2));

    while(i > 0){
        console.log(i+' ---> '+'N1 % i =',(N1 % i), 'N2 % i =', (N2 % i));
        if(N1 % i == 0 && N2 % i == 0){
            return i;
        }
        i--;
    }
    return 1;
}

console.log('findGCD = ', findGCD(N1, N2));

