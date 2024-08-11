function transpose(matrix) {
    let transp = [];
    let length = matrix.length;
    let breadth = matrix[0].length;

    let array = [];
    let i = 0, j = 0;
    while(array.length < (length*breadth)){
        
        if(!transp[j]){
            transp[j] = [];
        }
        if(i < length){
            transp[j][i] = matrix[i][j];
            i++;
        }
        else {
            i = 0;
            j++;
        }
    }
    
    console.log(transp);
    return transp;
    
};






// List of numbers integers
// []
//sub list of largest sum

var arr = [1, -9, -3, 1, 3, -1, 3, 5, 6, -7, 9, -9, 12]; //4, 3

var maxSum = arr[0], l = 0, r = 0, pl = 0;
var currentSum = arr[0];

for(let i = 1; i < arr.length; i++){
    if(currentSum >= 0){
        currentSum += arr[i];
    }   
    else {
        currentSum = arr[i];
        l = i
        pl = l;
    }
    if(maxSum < currentSum){
        maxSum = currentSum;
        r = i;
    }
}

console.log('currentSum = '+JSON.stringify(currentSum));
console.log('maxSum = '+JSON.stringify(maxSum));
console.log('l = '+l, 'pl = '+pl, "r = "+r);








// 12121 verify palindrome
// sub unique palindrome

// let string = '441212144'; 

// function checkPalindrome(string){
//     var sLength = string.length;
//     var selfPalindrome = true;
//     for(let i = 0; i < sLength/2; i++){
//         if(string[i] != string[sLength-i-1]){
//             selfPalindrome = false;
//             break;
//         }
//     }
//     return selfPalindrome;
// }

// console.log('main string palindrome = '+checkPalindrome(string));

// var palindromeMap = {};
// for(let i = 0; i < string.length; i++){

//     for(let j = i; j < string.length; j++){
//         let substr = string.substring(i, j+1);
//         // console.log('substr = '+JSON.stringify(substr));
//         if(palindromeMap[substr] == undefined && checkPalindrome(substr)){
//             palindromeMap[substr] = 1;
//         }
//     }

// }

// let uniquePalindromes = Object.keys(palindromeMap);

// console.log('uniquePalindromes = '+JSON.stringify(uniquePalindromes));





var a = '11'; //7
var b = '1'; //3 10 = 1010

let i = Math.max(a.length, b.length)-1;
let ai = a.length-1, bi = b.length-1;
let c = '';
let carry = 0;

while(i >= 0){
    let aai = (ai >= 0) ? parseInt(a[ai]) : carry;
    let bbi = (bi >= 0) ? parseInt(b[bi]) : carry;

    if(ai < 0 || bi < 0){
        carry = 0;
    }
    
    let sum = (aai || 0) + (bbi || 0);
    
    let bit = 0;
    if(carry){
        if(sum > 1){
            bit = 1;
        }
        else if(sum == 1){
            bit = 0;
        }
        else {
            bit = 1;
            carry = 0
        }
    }
    else {
        if(sum > 1){
            carry = 1;
            bit = 0;
        }
        else {
            bit = sum;
            carry = 0;
        }
    }
    c = bit + c;

    console.log(aai, bbi, sum, carry, c);

    i--;
    ai--;
    bi--;
}
if(carry){
    c = carry + c;
}

console.log('c =',JSON.stringify(c));







var arr1 = [1,2,3];
var arr2 = [2,4];

var map1 = {};
for(let i = 0; i < arr1.length; i++){
    map1[arr[i]] = 1;
}

for(let i=0; i<arr2.length; )