let prompt = require("prompt-sync")();
let number = Number(prompt("Enter any number : "));

function divideOddEven() {
  if (number % 2 == 0 && number % 3 == 0) {
    console.log("Divisible by 2 and 3");
  } else if (number % 2 == 0) {
    console.log("Divisible by 2");
  } else if (number % 3 == 0) {
    console.log("Divisible by 3");
  } else {
    console.log("Not divisible by 2 or 3");
  }
}

divideOddEven();
