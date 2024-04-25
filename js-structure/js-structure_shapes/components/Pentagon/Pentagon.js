import { getRandomColor as randomColor } from "../../utils/randomColor.js";

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = randomColor();
  });
  return pentagon;
}
export let pentagonElement = Pentagon();
