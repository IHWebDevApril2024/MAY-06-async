let newArray = [];

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => {
      newArray.push(character.name);
    });
    console.log(newArray);
  })
  .catch((error) => console.log(error));
