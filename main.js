// ILFE & Colback

// 1. ILFE (Intermediately Invoked Function Expres)

// NO Parameter & args & return value
// (function () {
//    console.log("Hello World")
// })();

// // With parameter & args & return value
// let output = (function (fullName) {
//    return "Hello " + fullName
// })("John doe");

// console.log(output)



// Call back function JS

// NO Parameter & args & return value
// function sayHello(callback) {
//    callback()
// }
// sayHello(function() {
//    console.log("Hello colback function");
// })

// With params & args & return value

function sayHello(callback) {
   let output = callback("John doe");
   return output;
}
let output = sayHello(function (fullName) {
   return "Hellow" + fullName;
})

console.log(output)
