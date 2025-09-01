let N = 14355341;

function checkIfPalindrome(N){
    if(N < 0){
        return false;
    }
    let str = new String(N);
    if(str.length < 2){
        return true;
    }
    let strC = '';
    while(N > 0){
        strC += (N % 10);
        N = Math.floor(N / 10);
        console.log(' -- rem =',N, 'strC =', strC);
        if(strC.length == Math.floor(str.length/2)){
            break;
        }
    }
    return str.startsWith(strC);
}

console.log("checkIfPalindrome ? = ", checkIfPalindrome(N));