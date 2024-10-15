// IIFE

const output = (function (tinggi, berat, callback) {
  let tinggiMeter = tinggi / 100;
  let bmi = berat / (tinggiMeter * tinggiMeter);
  console.log(`TINGGI  : ${tinggiMeter}`);
  console.log(`BERAT   : ${berat}`);
  return bmi;
})(170, 50);

console.log(`BMI   : ${bmi}`);
