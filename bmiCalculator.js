let prompt = require("prompt-sync")();
let height = Number(prompt("Enter Your Height (in cm.) : "));
let weight = Number(prompt("Enter Your Weight (in kg.) : "));

function calculateBmi() {
  let heightInCm = height / 100;
  let bmi = weight / heightInCm ** 2;

  if (bmi < 18.5) {
    console.log(`BMI-${bmi.toFixed(2)}, Underweight`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`BMI-${bmi.toFixed(2)}, Normal`);
  } else if (bmi > 25 && bmi < 29.9) {
    console.log(`BMI-${bmi.toFixed(2)}, Overweight`);
  } else {
    console.log(`BMI-${bmi.toFixed(2)}, Obese`);
  }
}

calculateBmi();
