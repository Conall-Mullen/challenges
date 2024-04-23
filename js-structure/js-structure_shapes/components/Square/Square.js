import { getRandomColor as randomColor } from "../../utils/randomColor.js";

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = randomColor();
  });
  return square;
}
export let squareElement = Square();
