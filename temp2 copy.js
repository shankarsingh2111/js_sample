
// var array = [9,7,5,4,24,3,16,6,5,13,28,24,29];
// // var array = [9,7,5,4,24,3,16,6,5,13,28,24,29];

// let currentMaxDiff = 0;
// let currentGap = 0;

// for(let i =0; i < array.length-1; i++){
//     let diff = array[i+1] - array[i];
    
//     if(diff <= 0){
//         currentGap = 0;
//         continue;
//     }
//     currentGap = currentGap + diff;
//     currentMaxDiff = Math.max(currentGap, currentMaxDiff);

// }

// console.log('currentMaxDiff = '+JSON.stringify(currentMaxDiff));

// console.log(array[i], array[i+1], 'diff = '+JSON.stringify(diff));
    // console.log('currentGap = '+JSON.stringify(currentGap));



const Promise = require('bluebird');

async function main() {
    //1-100

    async function produce(thread, product) {
        // product = product + 1;
        console.log('P' + thread + ' - ' + product);
    }

    async function consume(thread, product) {
        // product = product - 1;
        console.log('C' + thread + ' - ' + product);


        let randomWait = Number(Math.random() * 100).toFixed(0);
        await Promise.delay(randomWait);
    }

    var product = 0;

    for (var i = 0; i < 10; i++) {
        product = i+1;

        await produce('T1', product);

        await consume('T1', product);
        await consume('T2', product);
        await consume('T3', product);
    }

}

main();



