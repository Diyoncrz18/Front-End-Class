// IIFE

(function () {
   let tinggi = 170
   let berat = 50
   let tinggiMeter = tinggi / 100;
   let bmi = berat / (tinggiMeter * tinggiMeter);
 
   
 
   console.log(`tinggi = ${tinggiMeter} m`);
   console.log(`Berat = ${berat} kg`);
   console.log(`BMI = ${bmi}`);
})();

// Callback
function BMI(tinggi, berat, callback) {
   let tinggiMeter = tinggi / 100;
   let bmi = berat / (tinggiMeter * tinggiMeter);
   callback(tinggiMeter, berat, bmi);
}

function handleResult(tinggiMeter, berat, bmi) {
   console.log(`tinggi = ${tinggiMeter} m`);
   console.log(`Berat = ${berat} kg`);
   console.log(`BMI = ${bmi}`);
}

(function () {
   let tinggi = 170;
   let berat = 50;

   BMI(tinggi, berat, handleResult);
})();

// Buatlah object dengan properti:
// 1. firstName,
// 2. weight
// 3. height
// 3. function calculateBMI
// Gunakan if else di dalam fungsi untuk menampilkan if BMI <16.0 maka dia adalah kategoty severaly underweight