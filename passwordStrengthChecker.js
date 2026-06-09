let prompt = require("prompt-sync")();
let password = prompt("Enter your Password : ");

function passwordStrengthChecker() {
  let score = 5;

  if (password.length != 8) {
    console.log("password must be 8 characters");
  } else {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/[1-9]/.test(password)) {
    score++;
  }

  if (/[^A-Za-z1-9]/.test(password)) {
    score++;
  }

  if (score <= 8) {
    console.log("Weak");
  } else if (score <= 9) {
    console.log("Medium");
  } else {
    console.log("Strong");
  }
}

passwordStrengthChecker();
