let prompt = require("prompt-sync")();

let expense = [];

while (true) {
  let choice = Number(
    prompt(`
        1. Add Expense.
        2. Remove Expense.
        3. Get Total Expense.
        4. Exit
        `),
  );

  if (choice === 1) {
    addExpense();
  } else if (choice === 2) {
    removeExpense();
  } else if (choice === 3) {
    getTotalExpense();
  } else if (choice === 4) {
    break;
  } else {
    console.log("Invalid Choice");
  }
}

function addExpense() {
  let title = prompt("Title : ");
  let amount = Number(prompt("Amount : "));

  let dailyExpense = {
    title: title,
    amount: amount,
  };

  expense.push(dailyExpense);

  console.log(expense);
}

function removeExpense() {
  let remove = prompt(`Enter title which you want remove expense : `);

  expense = expense.filter((rmExp) => rmExp.title !== remove);

  console.log(expense);
}

function getTotalExpense() {
    let totalExpnese = 0;

    for(let total of expense){
        totalExpnese += total.amount;
    }

    console.log(totalExpnese);
}
