// function calculator() {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log(c);
// }

// calculator();

// const obj={
//     name:"John",
//     show:function(){
//         function test(){
//             console.log(this.name);
//         }
//         test();
//     }
// };
// obj.show();

// iife function: immediately invoked function expression
// (function(){
//     console.log("IIFE");
// })();

// MODULE wrapper function
// (function(exports, require, module, __filename, __dirname){
//     console.log("Module wrapper function");
// })();

// let s = 0;

// const timer = setInterval(() => {
//     s++;
//     console.log(s);

//     if (s===10) {
//         clearInterval(timer);
//         console.log("Stopped");
//     }
// }, 1000);
//------
for ( var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

for ( let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
}
