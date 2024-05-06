// FETCH API (programming interface for fetching resources)

let pokemons = [];

const pokePromise = fetch("https://pokeapi.co/api/v2/pokemon/") // This is a promise
  .then((whateverTheFetchReturns) => whateverTheFetchReturns.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
    pokemons = jsonResponse.results;
  })
  .catch((error) => {
    console.log(error);
  });

console.log("This is not asynchronous");