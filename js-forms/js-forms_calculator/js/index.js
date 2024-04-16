console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.getElementById("number-a");
const numberB = document.getElementById("number-b");
const operator = document.getElementsByName("operator");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numA = Number(numberA.value);
  const numB = Number(numberB.value);
  if (operator[0].checked) {
    console.log("Add");
    result = add(numA, numB);
  } else if (operator[1].checked) {
    console.log("Subtract");
    result = subtract(numA, numB);
  } else if (operator[2].checked) {
    console.log("Multiply");
    result = multiply(numA, numB);
  } else if (operator[3].checked) {
    console.log("Divide");
    result = divide(numA, numB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
