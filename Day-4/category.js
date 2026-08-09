// synchronous functions

// console.log("start");
// const add=(a,b)=>{
//     return a+b;
// }
// const sub=(a,b)=>{
//     return a-b;
// }
// console.log(add(10,20));
// console.log(sub(20,10));

// console.log("end");

// asynchronous functions
// console.log("line 1");
// setTimeout(()=>{
//     console.log("line 2"); },3000);
//     setInterval(()=>{
//         console.log("hii");},2000); //continuously print hii after every 2 seconds
//         clearInterval(flag); //stop the interval
// console.log("line 3");

// user defined asynchronous function
console.log("line5");
async function sum(){
    console.log("line1");
    console.log("line2");
    await console.log("line3");
    console.log("line4");
}
sum();
console.log("line6");
console.log("line7");