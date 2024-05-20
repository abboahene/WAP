// console.log("start");
// const result = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("Whoops!");
//   console.log(2);
// }).then(d => console.log(d))
// console.log(result);
// console.log("end");

// async function f() {
//     console.log(3);
//   return 1;
// }
// console.log(f());
// f().then(console.log); // 1
// console.log(2);

// console.log('start');

// async function foo(){
//     console.log('inside foo... 1');
//     return 1; //return new Promise(resolve => resolve(1)), return Promise.resolve(1)
// }

// const result = foo();
// console.log(result);
// result.then(data => console.log('data: ', data));
// console.log('end');

// console.log("start");
// async function foo() {
//   console.log("inside foo...");
//   return "hello";
// }
// async function bar() {
//   console.log("inside bar start");
//   console.log(await foo());
// //const result = await foo(); //paused
//   //console.log(result);
//   console.log("inside bar end");
// }
// bar();

// console.log("end");

// var message = 'Hello World';

// function logMessage() {
//     global.message = "me"
//     console.log(this === globalThis);
//     function f(){
//         console.log(this===global);
//     }
//     return {f: f};
// }


// const fs = require("fs")

// fs.createReadStream("path"
// fs.createWriteStream("path")

// fs.readFile("path",(err, data) =>{})
// fs.writeFile("path", "fjdsl", (err, data) => {})


// console.log('start');
// const promise = new Promise((resolve, reject) => {
//     resolve('done');
// });

// function firstOne() {
//     promise.then(console.log);
//     console.log('first');
// }

// async function secondOne() {
//     console.log(await promise);
//     console.log('second');
// }

// firstOne();
// secondOne();
// console.log('end');


console.log('start');
const result = new Promise((resolve, reject) => {
console.log(1);
setTimeout(() => reject('Whoops!'), 1000);
console.log(2);
})
.then(res => res)
.catch(error => 'Error Happens');
console.log(result);
console.log('end');