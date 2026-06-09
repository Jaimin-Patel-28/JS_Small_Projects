function generateOtp() {
  let random = Math.random();

  let fourDigit = Math.floor(random * 9000 + 1000);

  console.log(fourDigit);
}

generateOtp();
