let characters;

const charactersPromise = fetch("https://rickandmortyapi.com/api/character") // This is a promise
  .then((whateverTheFetchReturns) => whateverTheFetchReturns.json())
  .then((jsonResponse) => {
    characters = jsonResponse.results;
    characters.forEach((character) => {
      console.log(character.name);
    });
  })
  .catch((error) => {
    console.log(error);
  });
