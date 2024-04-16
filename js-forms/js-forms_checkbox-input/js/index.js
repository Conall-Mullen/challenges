console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const isChecked = tosCheckbox.checked;
  if (isChecked) {
    console.log("Is box checked?", tosCheckbox.checked);
    alert("Form submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

tosCheckbox.addEventListener("click", (e) => {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    hideTosError();
  } else {
    showTosError();
  }
});
