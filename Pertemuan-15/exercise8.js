// Nomor 1
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retierment = 60 - age;

  if (retierment > 0) {
    console.log(`${firstName} retires in ${retierment} years`);
  } else {
    console.log(`${firstName} is alredy retired.`);
  }
};
yearUntilRetirement({ year: 1987, firstName: "John" });

// Nomor 2
const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// Nomor 3
const phi = 3.14;
const power = 2;

const calculateArea = ({ radius }) => phi * Math.pow(radius, power);
let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Nomor 4
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};
makeAjaxRequest('www.google.com');