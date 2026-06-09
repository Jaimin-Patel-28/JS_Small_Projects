let prompt = require("prompt-sync")();

const cart = [];

while (true) {
  let choice = Number(
    prompt(`
        1. Add Product In Cart
        2. Exit  
        `),
  );

  if (choice === 1) {
    let productName = prompt("Enter Product Name : ");
    let price = Number(prompt("Enter Price : "));
    let qty = Number(prompt("Enter Quantity : "));

    let createCart = {
      name: productName,
      price: price,
      qty: qty,
    };

    cart.push(createCart);

    console.log("Product Added");
    console.log(cart);
  } else if (choice === 2) {
    break;
  } else {
    console.log("Invalid Choice");
  }
}

function cartTotal() {
  let subTotal = 0;

  for (let item of cart) {
    subTotal = item.price * item.qty;
  }

  let gst = (subTotal * 18) / 100;

  let finalTotal = subTotal + gst;

  console.log(`Sub total is : ${subTotal}`);
  console.log(`Gst is : ${gst}`);
  console.log(`Final total is : ${finalTotal}`);
}

cartTotal();