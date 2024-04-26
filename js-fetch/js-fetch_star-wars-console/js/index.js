console.clear();

const url = "https://swapi.py4e.com/api/people/";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const characters = data.results;
      const result = characters.filter(
        (character) => character.name === "R2-D2"
      );
      console.log(result[0].eye_color);

      //   characters.forEach((character) => {
      //     if (character.name === "R2-D2") {
      //       console.log(character.eye_color);
      //     }
      //   });
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
