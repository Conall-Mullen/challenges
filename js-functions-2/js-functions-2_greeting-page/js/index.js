console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  let currentTime = new Date().getHours();
  console.log("Current time ", currentTime);

  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Moring";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else if (currentTime >= 23 && currentTime <= 5) {
    return "Good Night";
  }
}
console.log(getGreeting());

function getDayColor() {
  // Code here
  let currentDay = new Date().getDay();

  if (currentDay === 1) {
    return "darkgray";
  } else if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  } else if (currentDay >= 6 && currentDay <= 7) {
    return "hotpink";
  }
}
console.log(getDayColor());

getDayColor();
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
