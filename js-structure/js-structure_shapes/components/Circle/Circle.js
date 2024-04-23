import { getRandomColor as randomColor } from "../../utils/randomColor.js";

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = randomColor();
  });
  return circle;
}
export let circleElement = Circle();
