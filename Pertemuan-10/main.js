// String Literals, Arrow Function, Default prameter

// 1. Stringl litereal
let fullName = "John Doe";
let age = 33;
let address = "Manado";

let kalimat =
  "Halo nama saya" +
  fullName +
  ",Umur saya" +
  age +
  " Tahun Dan saya tinggal di" +
  address +
  ".";

console.log(kalimat);

let kalimat2 = `Hallo nama saya ${fullName} Usia saya ${age} Tahun Daan saya tinggal di ${address}.`;
console.log(kalimat2);

// 2. Arrow Function
function syGreetings(fullName) {
  return `Hello ${fullName}`;
}
console.log(syGreetings("John Doe"));

// const syGreetings2 = (fullName) => {
//   return `Hallo ${fullName}`;
// };

// console.log(syGreetings2("John Doe"))

// Implicit return value
const syGreetings2 = (fullName) => `Hallo ${fullName}`;

// Arrow Function pada IIFE
let output1 = () => `Hello`();
console.log(output1);

// Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter
const syGreetings3 = (fullName, age) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  if (age === undefined) {
    age = 19
  }
  }
  console.log(`Hallo Nama saya ${fullName} Umur saya ${age}`);
};
syGreetings3();




const syGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(`Hallo Nama saya ${fullName} Umur saya ${age} Tahun, dan saya tinggal di ${address}`);
};
syGreetings4();
