fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      console.log(pokemon.name);
    });
  })
  .catch((error) => {
    console.log(error);
  });
