let number = 371;

function isArmstrong(number){
    
    let digitCount = 0;
    let div = number;
    let digits = [];
    while(div > 0){
        let remainder = div % 10;
        div = Math.trunc(div / 10);
        digits.push(remainder);
        digitCount++;
    }

    let sum = 0;
    sum = digits.reduce((sum, digit) => sum + Math.pow(digit, digitCount), sum);

    return sum == number;

}

let isArms = isArmstrong(number);
console.log('isArms =',isArms); 