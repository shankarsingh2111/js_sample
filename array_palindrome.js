// let arr = [1,3,4,5,4,3];
let arr = [1,2,3,2,1,4,3,5,3,4,1,2,1,4];

let l = 0, r = 0;
let start = 0, maxSize = 0, subArr;

let i = 0;
while(l < arr.length){
    console.log(`arr[${l}] =`, arr[l], `arr[${r}] =`, arr[r]);
    if(l != r && arr[l] == arr[r]){
        subArr = arr.slice(l, r+1);
        let isPa = isPalindrome(subArr);
        console.log('isPa =',isPa);
        if(isPa && maxSize < subArr.length){
            start = l;
            maxSize = subArr.length;
            console.log('start =', start, 'maxSize =',maxSize);
        }
    }
    if(r < arr.length){
        r++;
    }
    else {
        l++;
        r = l;
    }
}


console.log('Final start =', start, 'maxSize =',maxSize);

// let isPa = isPalindrome(arr.slice(1, 10));
// console.log('isPa =',JSON.stringify(isPa)); 


function isPalindrome(array){
    console.log('array =',JSON.stringify(array));
    let size = array.length;
    let mid = size/2 - ((size % 2 == 0) ? 1 : 0);
    for(let i = 0; i <= mid; i++){
        if(array[i] != array[size-1-i]){
            return false;
        }
    }
    return true;
}