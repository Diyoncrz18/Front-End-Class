let berat = 60; // Berat badan dalam kg
let tinggi = 1.7; // Tinggi badan dalam meter

// Fungsi untuk menghitung BMI
function hitungBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

// Fungsi untuk menampilkan informasi berat badan
function berat(berat) {
  return "Berat = " + berat + " Kg";
}

// Fungsi untuk menampilkan informasi tinggi badan
function tampilkanTinggi(tinggi) {
  return "Tinggi = " + (tinggi * 100) + " cm"; // Konversi meter ke cm
}

// Fungsi untuk menampilkan hasil BMI
function tampilkanHasilBMI(bmi) {
  return "Hasil BMI = " + bmi.toFixed(2); // Pembulatan dua tempat desimal
}

// Hitung BMI
let bmi = hitungBMI(berat, tinggi);

// Tampilkan informasi
let outputBerat = berat(berat);
let outputTinggi = tampilkanTinggi(tinggi);
let outputHasilBMI = tampilkanHasilBMI(bmi);

// Cetak hasil ke console
console.log(outputBerat);
console.log(outputTinggi);
console.log(outputHasilBMI);
