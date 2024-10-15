// Tanpa rest parameter
const funct1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};

funct1("A", "B", "C", "D", "E");
// Dengan rest parameter
const funct2 = (...params) => {
  console.log(params);
};
funct2("A", "B", "C", "D", "E", "F");

// Rest paramenter harus nerada di terakhir dalam parameter list
const funct3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
funct3("A", "B", "C", "D", "E", "F");


const penjumlahan = (...tambah) => {
   let hasil = 0;
   tambah.forEach((item) => (hasil += item))
   return hasil
}
console.log(penjumlahan(1,2,3,4,5,6))

// const penjumlahan = (...tambah) => {
//    return tambah.reduce((hasil, item) => hasil + item, 0);
// }

// console.log(penjumlahan(1, 2, 3, 4, 5, 6)); // Output: 21



// 2. SPREAD OPERATOR
let numbers = [1,2,3,4,5]
console.log(numbers)
console.log(...numbers)

// 1. Dupliksi Array
let numbers2 = [...numbers];
numbers.push(6)
console.log(numbers)
console.log(numbers2)

// 2. Menggabungkan Array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let numbers3 = arr1.concat(arr2,arr3);
let numbers4 = [...arr1, ...arr2, ...arr3];
console.log(numbers3)
console.log(numbers4)

// Object
const john = {
   fullName: "John Doe",
   age: 30,
}
const john2 = { ...john, address: "Mabado"}
console.log(john2)

// 2. Menggabungkan Object
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};
   