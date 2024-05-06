let characters;

const pokePromise = fetch("https://rickandmortyapi.com/api/character") // This is a promise
  .then((whateverTheFetchReturns) => whateverTheFetchReturns.json())
  .then((jsonResponse) => {
    characters = jsonResponse.results;
    characters.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => {
    console.log(error);
  });
