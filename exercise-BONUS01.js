const myArray = [];

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      myArray.push(pokemon.name);
    });
    return fetch(data.next);
  })
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      myArray.push(pokemon.name);
    });
    // return fetch(data.next);
    console.log(myArray);
});
