// var a;             
// var a;           

// a = 10;             
// a = 20;            

// console.log("Value of a :", a);

// //-------
// let b;

// b = 12;
// b = 30;

// console.log("Value of b :", b);

// //-------
// const PI = 3.14;

// console.log("Value of PI :", PI);

// // BLOCK SCOPE
// let person = "Ramesh Patel";

// {
//     let person = "Ranjan Mehta";
//     console.log("Inside Block :", person);
// }

// console.log("Outside Block :", person);

// // function scope
// function demoFunction() {

//     var course = "Devops";
//     let duration = "1 Months";
//     const platform = "TutorialsPoint";

//     console.log("\nInside Function");

//     console.log(course);
//     console.log(duration);
//     console.log(platform);

// }

// demoFunction();

//--------
const obj = {

    "first name": "Sushil",
    age: 22,
    address: "Palamu"

};
// Accessing Object Properties
console.log(obj["first name"]);
console.log(obj.age);
console.log(obj.address);

// Traversing an Object

for (let key in obj) {

    console.log("Key   :", key);
    console.log("Value :", obj[key]);

}

// ARRAY METHODS
let arr = [5, 10, 15, 30];

arr.push(50);
arr.push(70);
arr.pop();
arr.shift();
arr.unshift(5);
console.log(arr);



