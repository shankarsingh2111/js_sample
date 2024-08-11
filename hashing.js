let moment = require('moment')

let array = [];
let query = [];
for(let i=0; i < Math.pow(10, 2); i++){
    let random = (Math.random() * 10).toFixed(0);
    array.push(random);
    let queryItem = (Math.random() * 10).toFixed(0);
    query.push(queryItem);
}

bruteForce();
hashing();





function bruteForce() {
    let start = moment();
    let output = [];
    for (let i = 0; i < query.length; i++) {
        output.push(frequency(query[i], array));
    }
    let end = moment();
    let diff = end - start;
    console.log("bruteForce diff = ", diff / 1000, "seconds");
    // console.log('array =',array);
    // console.log('query =',query);
    // console.log('output =',output);

    function frequency(q, array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == q) {
                count++;
            }
        }
        return count;
    }
}


function hashing(){
    let hash = new Array(12);
    for(let i = 0; i < array.length; i++){
        hash[array[i]] = (hash[array[i]] || 0) + 1;
    }
    // console.log('hash =',JSON.stringify(hash));
    
    let start = moment();
    let output = [];
    for(let i = 0; i < query.length; i++){
        output.push(hash[query[i]] || 0);
    }
    let end = moment();
    let diff = end - start;
    console.log("hashing diff = ", diff/1000, "seconds");
    // console.log('array =',array);
    // console.log('query =',query);
    // console.log('output =',output);    
}




