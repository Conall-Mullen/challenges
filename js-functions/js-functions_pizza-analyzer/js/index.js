console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let Pi = Math.PI;
  let area1 = 2 * Pi * (diameter1 / 2);
  //console.log("Area 1: ", area1);
  let area2 = 2 * Pi * (diameter2 / 2);
  //console.log("Area 2: ", area2);
  let precentageIncrease = Math.round(((area2 - area1) / area1) * 100);
  if (precentageIncrease > 0) {
    console.log(
      "Pizza 2 is",
      precentageIncrease,
      "percent larger than pizza 1"
    );
  } else if (precentageIncrease < 0) {
    console.log(
      "Pizza 2 is",
      Math.abs(precentageIncrease),
      "percent smaller than pizza 1"
    );
  } else if (precentageIncrease === 0) {
    console.log("Pizzas are the same size");
  }
  return precentageIncrease;
}
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
