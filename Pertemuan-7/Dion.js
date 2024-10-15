const person = {
  firstName: "John",
  weight: 50,
  height: 170,
  calculateBMI: function () {
    let tinggiMeter = this.height / 100;
    let bmi = this.weight / (tinggiMeter * tinggiMeter);

    console.log(`Name: ${this.firstName}`);
    console.log(`Height: ${tinggiMeter} m`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`BMI: ${bmi}`);

    if (bmi < 16.0) {
      console.log("Severely underweight");
    } else if (bmi >= 16.0 && bmi < 18.5) {
      console.log("Underweight");
    } else if (bmi >= 18.5 && bmi < 25.0) {
      console.log("Normal");
    } else if (bmi >= 25.0 && bmi < 30.0) {
      console.log("Overweight");
    } else if (bmi >= 30.0 && bmi < 35.0) {
      console.log("Moderately Obese");
    } else if (bmi >= 35.0 && bmi < 40.0) {
      console.log("Severely Obese");
    } else if (bmi >= 40.0) {
      console.log("Morbidly Obese");
    }
  }
};

person.calculateBMI();
