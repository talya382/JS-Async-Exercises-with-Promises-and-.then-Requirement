// // const a=new Promise((resolve,reject)=>
// // {
// //     setTimeout(()=>{
// //         const num = Math.random();
// //         if(num<0.5)
// //        {
// //         resolve(num)
// //        }else{
// //         reject(num)
// //        }
// //     },5000)
// // })

// // a.then((result) => console.log(`Resolved with ${result}`))
// //  a.catch((error) => console.log(`Rejected with ${error}`));

// // function getRandomNumber(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //         const num = Math.random();
// //         if(num<0.5)
// //        {
// //         resolve(num)
// //        }else{
// //         reject(num)
// //        }
// //     },5000)
// //     })

// // }
// //   getRandomNumber()
// //   .then((result) => console.log(`Resolved with ${result}`))
// //   .catch((error) => console.log(`Rejected with ${error}`));

// function g() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve (1);
//     }, 4000);
//   });
// }
// function gString() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve ('talya&noit');
//     }, 4000);
//   });
// }function gBool() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve (true);
//     }, 4000);
//   });
// }
// g().then((num)=>{
//     console.log(num)
//     return gString()
// })
//     .then((Str)=>{
//     console.log(Str)
//     return gBool()
// })
// .then((bool)=>{
//     console.log(bool)
// })
// const { log, error } = require("console");
// const { resolve } = require("dns");
// const fs=require("fs")
// function delayedGreet(name, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`hllow ${name}`);
//     }, delay*1000);
//   });
// }
// delayedGreet("talya",5).then((data)=> console.log(data))


// function readFileContent(path){
//      return new Promise((resolve, reject) => {
// fs.readFile(path,'utf8',(eror,con))
//     setTimeout(() => {
//       resolve(`Content of file.txt:`);
//     });
//   });
// }

// function randomOperation()
// {
//     return new Promise((resolve, reject) => {
//         const num = Math.floor(Math.random()*10);
//         if(num>5)
//        {
//         resolve(`sucsses`)
//        }else{
//         reject(`failure`)
//        }
//     })
// }
// randomOperation()
//     .then((resolve)=> console.log(resolve))
//     .catch((error)=> console.log(error));

// function raceTimers(){
//     return new Promise((resolve) => {
//     setTimeout(() => resolve('Timer A finished!'), 2000);
//     setTimeout(() => resolve('Timer B finished!'), 3000);
//   });
// }
// raceTimers().then((resolve)=>console.log(resolve))


// function waitAll()
// {
//     const p1= new Promise((resolve) => {
//     setTimeout(() => resolve('first!'), 1000)})
//      const p2= new Promise((resolve) => {
//     setTimeout(() => resolve('Second'), 2000)})
//      const p3= new Promise((resolve) => {
//     setTimeout(() => resolve('third'), 3000)})
//  return Promise.all([p1, p2, p3])
// }
// waitAll().then((values) => {
//   console.log(values)
// })
function chainedGreetings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hi');
      resolve();
    }, 1000);
  })                              
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('How are you?');
          resolve();
        }, 2000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Goodbye!');
          resolve();
        }, 1000);
      });
    });
}

chainedGreetings();