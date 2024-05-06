let pokemons = [];

const pokePromise = fetch("https://pokeapi.co/api/v2/pokemon/") // This is a promise
  .then((whateverTheFetchReturns) => whateverTheFetchReturns.json())
  .then((jsonResponse) => {
    console.log("FIRST RESPONSE: ", jsonResponse);
    pokemons = jsonResponse.results;
    return fetch(jsonResponse.next);
  })
  .then((anotherPromise) => anotherPromise.json())
  .then((secondJson) => {
    console.log("SECOND RESPONSE: ", secondJson);
    const newArray = pokemons.concat(secondJson.results);

    console.log("FINAL ARRAY: ", newArray);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("LAST CONSOLE LOG: ", pokemons);
