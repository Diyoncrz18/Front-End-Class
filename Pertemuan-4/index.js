// // JavaScript function
// // cxara 1

// function greetings1() {
//   console.log("Hello world");
// }

// greetings1(); // Call function

// // Cara 2
// let greetings2 = function () {
//   console.log("Hello world");
// };

// Parameter & Argumen
// engan input (Parameter) dan output (Return)

// cara 1
// //                 Parameter
// function greetings1(fullName) {
//    return "Hello" + fullName
// }
// //                       Argumen
// let output = greetings1("John doe")
// console.log(output);

// // Cara 2
// let greetings2 = function(fullName) {
//    return "Hello" + fullName;
// };
// let output2 = greetings2("John Doe")
// console.log(output2)

// Global & Local scope

let x = 10; //Global

function foo() {
   let y = 20; //Local (function)
   let z = 30;
   console.log(x)
   console.log(y)
   if (z > x) {
      let a = 40; //Blck scope
      console.log(a)
   }
   console.log(a) //Eror
}
foo();
