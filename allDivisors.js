function sumOfDivisors(N) {

    let mainSum = 0;
    let x = 1;
    while(x <= N){
        let sum = x;
        for (let i = 1; i <= Math.trunc(x/2); i++) {
            if (x % i == 0) {
                sum += i;
            }
        }
        mainSum += sum;
        x++;
        // console.log(x, 'sum =',sum);
    }
    return mainSum;


    // return findDivisorSum(1, N, 0);
}


let mainSum = sumOfDivisors(66600);
console.log('mainSum =',JSON.stringify(mainSum));