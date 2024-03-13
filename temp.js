// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1);
//    console.log("inside:", j);
//   }

//   console.log('i = '+JSON.stringify(i));



//   /*
  
//   0 //first
//   0 //second
//   1
//   1
//   2
//   2

//   */



// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'), 1000);
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// /*

// First
// Third
// Second

// */


const fs = require('fs');

  const myPromise = Promise.resolve(Promise.resolve('Promise'));
  const myPromise2 = Promise.resolve(Promise.resolve('Promise2'));
  
  fs.readFile(__dirname + '/.gitignore', (error, result)=>{
    console.log("fs.readfile");
  });

  myPromise2.then(result => {
    console.log(result);

    myPromise.then(result => {
      console.log("second",result);
    });
  });

  setImmediate(()=>{
    console.log("setImmediate");
  });

  setTimeout(()=>{
    console.log("setTimeout");
  });

  var count = 0;
  var intervalId = setInterval(()=>{
    console.log("setInterval");
    if(count >= 0){
      clearInterval(intervalId);
    }
    count++;
  }, 0);
  console.log('intervalId = '+intervalId);

  myPromise.then(result => {
    console.log(result);
  });
  

  process.nextTick(()=>{
    console.log("nextTick");
  });

  console.log("outer");



  function funcOne() {
    setTimeout(() => console.log('Timeout 1!'), 0); //c1
    myPromise.then(res => res).then(res => console.log(`${res} 1!`)); //c2
    console.log('Last line 1!');
  }
  
  async function funcTwo() {
    const res = await myPromise;
    console.log(`${res} 2!`)
    setTimeout(() => console.log('Timeout 2!'), 0);
    console.log('Last line 2!');
  }
  
  // funcOne();
  // funcTwo();  

/*

Last line 1!
Promise 2!
Last line 2!
Timeout 1!
Timeout 2!
Promise 1!

*/

// 1. Next Tick queue
// 2. Promise queue (c2)
// 3. Timer queue (c1)
// 4. I/O queue
// 5. Check queue
// 6. Close queue



// [0,0,1,0,2,0];          
// [0,0,0,1,2,0];
// [0,0,0,1,0,2];




// let array = [0,1,0,0,0,3,4,5,0,0,1,19,0,0,0,1,12,2,0];
// let array = [0,0,1,0,2,0];
// let plastZero = -1;

// for(let i = 0; i < array.length-1; i++){

//     if(array[i] !== 0 && array[i+1] === 0){
//         for(let j = i+1; j > plastZero+1; j--){
//             swap(array, j, j-1);
//         }
//         // swap(array, i, i+1);
//     }
//     if(array[i] === 0){
//         plastZero = i;
//     }
// }

// function swap(array, i, j){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }

// console.log('array = '+JSON.stringify(array));
// let value = array.splice(array.length-1, 1);
// console.log('value = '+JSON.stringify(value));
// array.unshift(0);
// console.log('array = '+JSON.stringify(array));


// for(let i = 0; i < array.length; i++){
//     if(array[i] == 0){
//         array.splice(i, 1);
//         array.unshift(0);
//     }
// }


// console.log('array = '+JSON.stringify(array));










