let prompt = require("prompt-sync")();

let age = Number(prompt("Enter age : "));
let hasLicense = prompt("Do you have license ? (Yes / No) : ");

function canDrive() {
  if (age > 18 && hasLicense.toLowerCase() === "yes") {
    console.log("Can Drive");
  } else {
    console.log("Can't Drive");
  }
}

canDrive();
