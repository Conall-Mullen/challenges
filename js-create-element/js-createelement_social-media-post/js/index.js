console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const body = document.getElementsByTagName("body");

const newSection = document.createElement("section");
newSection.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
newButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newSection);
newSection.append(newParagraph, newFooter);
newFooter.append(newSpan, newButton);

// Exercise:
// Use document.createElement() and append another social media post to the body.
