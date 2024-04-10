console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  console.log("Dark Mode enabled");
  bodyElement.classList.add("dark");
});

lightModeButton.addEventListener("click", () => {
  console.log("Light Mode enabled");
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  console.log("Toggling");
  bodyElement.classList.toggle("dark");
});
