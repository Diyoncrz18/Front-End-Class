// Array & OBject
//1. Array
// Deklarasi variable array
// Cara 1. Array Literal
// let number = [1,2,3,4,5];
// console.log(number)

// cara 2. gunakan kata kunci new
// let number2 = new Array[6,7,8,9,10]
// console.log(number2)

// Tipe data dalam Array
// let numbers = [1,2,3,4,5]; // numbers
// let students = ["john","jane","Adit","Jordan"] //String
// let john = ["John",30,true,[80,90,100]] //Campuran
// console.log(john)

// Array length
// console.log(numbers.length)
// console.log(students.length)
// console.log(john.length)

// Mengakses elemen tertentu di dalam array
// Index selalu dimulai dari 0
// console.log(john[3][1])

// Mengakses element terakhir di dalam array
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers[numbers.length-1])

// Mengubah type menjadi string
// let array = [1, 2, 3, "halo", false, true];
// console.log(array.toString()); // Output: 1,2,3,halo,false,true
// // toString
// console.log(array.join(" "))
// // Join()
// console.log(array.join("-"))
// // pop()
// array.pop()
// console.log(array)
// // push()
// array.push()
// console.log(array)
// // shift()
// array.shift()
// console.log(array)
// // unshift
// array.unshift()
// console.log(array)

// Menambahkan elemen ke dalam array
// let array = [1, 2, 3, "halo", false, true];
// array.splice(3,0,4,5)
// console.log(array)

// Menggabungkan semua elemen array & Mengambil Element Array dengan slice()
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);
// let gurih = makanan.slice(0,3)
// let manis = makanan.slice(3)
// console.log(gurih)
// console.log(manis)

// // Mengambil Element Array dengan slice()
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 2);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]


// ---- BELAJAR OBJECT JAVA SCRIPT
