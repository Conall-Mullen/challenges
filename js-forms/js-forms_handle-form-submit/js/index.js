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
  let complaintFile = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    email: emailInput.value,
    complaint: complaintInput.value,
    details: detailsInput.value,
    rating: badnessInput.value,
    date: dateInput.value,
  };

  console.log(complaintFile);
});
