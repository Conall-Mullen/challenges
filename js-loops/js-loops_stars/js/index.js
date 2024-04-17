console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    //loop 5 times
    const image = document.createElement("img"); //create image element each iteration
    image.setAttribute("alt", i);
    if (i <= filledStars) {
      image.setAttribute("src", "assets/star-filled.svg");
    } else {
      image.setAttribute("src", "assets/star-empty.svg");
    }
    image.addEventListener("click", () => {
      renderStars(image.alt);
    });
    starContainer.append(image);
  }

  //--^-- your code here --^--
}
renderStars();
