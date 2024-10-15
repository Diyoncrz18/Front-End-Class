// // Array Exercise

// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// people.forEach(function (name) {
//   console.log(name);
// });

// people.shift();
// console.log(people);

// people.pop();
// console.log(people);

// people.unshift("Matt");
// console.log(people);

// people.push("Dion");
// console.log(people);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }

// let filteredCopy = people.filter(
//   (person) => person !== "Mary" && person !== "Matt"
// );
// console.log(filteredCopy);

// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// let withBob = people.concat("Bob");
// console.log(withBob);


// Object Exercise
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChalenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//1 tambahkan perintah bahasa go ke akhir array bahasa
programming.languages.push("Go");
console.log(programming.languages);

//2. notasi braket untuk mengubah difficulty ke 7
programming["difficulty"] = 7;
console.log(programming);

//3. hapus jokes
delete programming.jokes;
console.log(programming);

//4. notasi titik untuk menambah isFun ke object
programming.isFun = true;
console.log(programming);

//5. menggunakan map

programming.languages.map(function (v, i) {
  console.log(i + "-" + v);
});
