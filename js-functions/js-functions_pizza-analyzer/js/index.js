console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const outputHeading = document.querySelector('[data-js="output-heading"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let Pi = Math.PI;
  let area1 = Pi * Math.pow(diameter1 / 2, 2); //area formula is 2πr divide diameter by 2
  //console.log("Area 1: ", area1);
  let area2 = Pi * Math.pow(diameter2 / 2, 2);
  //console.log("Area 2: ", area2);
  let calculatedValue = ((area2 - area1) / area1) * 100;
  if (calculatedValue > 0) {
    console.log("Pizza 2 is", calculatedValue, "percent larger than pizza 1");
  } else if (calculatedValue < 0) {
    console.log(
      "Pizza 2 is",
      Math.abs(calculatedValue), //returns number as positive
      "percent smaller than pizza 1"
    );
  } else if (calculatedValue === 0) {
    console.log("Pizzas are the same size");
  }
  output.textContent = Math.round(calculatedValue);
}
// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplaySize = (newSize / 24) * 100 + "px";
  pizzaElement.style.width = newDisplaySize;
}
// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
    outputHeading.textContent = "Loss in Pizza";
  } else if (size2 > size1 || size1 === size2) {
    outputSection.style.backgroundColor = "var(--green)";
    outputHeading.textContent = "Gain in Pizza";
  }
}
