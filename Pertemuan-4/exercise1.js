const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tanya = (tanya) => {
  return new Promise((resolve, reject) => {
    rl.question(tanya, (data) => {
      resolve(data);
    });
  });
};

function bmi(tinggi, berat) {
  let tinggiBaru = tinggi / 100;
  let hasil = berat / (tinggiBaru * tinggiBaru);
  console.log("Tinggi =" + " " + tinggi);
  console.log("Berat =" + " " + berat);
  hasil = parseInt(hasil);
  console.log("Hasil =" + " " + hasil);
  return hasil;
}

const main = async () => {
  let tggi = await tanya("Masukkan Tinggi : ");
  let berat = await tanya("Masukkan Berat : ");
  const outpt = bmi(tggi, berat);
  console.log(`Hasil BMI : ${outpt}`);
};
main();
// const outpt = bmi(tggi, berat);
// console.log(outpt);
