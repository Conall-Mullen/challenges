console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const complaintInput = document.getElementById("complaint");
const detailsInput = document.getElementById("details");
const badnessInput = document.getElementById("badness");
const dateInput = document.getElementById("order-date");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const agaBadnessSum = data.age + data.badness;
  console.log(data);
  console.log(`The age-badness-sum of ${data.firstName} is ${agaBadnessSum}`);
});
