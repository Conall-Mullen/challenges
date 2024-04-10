console.log("is running");

let startingBalance = 1000;
let monthlyContribution = 100;
let months = 12;

let totalSavings = startingBalance + monthlyContribution * months;
console.log(
  "After " +
    months +
    " months of savings, you will have " +
    "$" +
    totalSavings +
    " in your account."
);
