console.clear();
const numbers = [1, 2, 3, 4, 5];
function double(number) {
  return number * 2;
}

function myMap(numbers, double) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    results.push(double(numbers[i]));
  }
  return results;
}

myMap(numbers, double);
