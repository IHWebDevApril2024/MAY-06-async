fetch("https://pokeapi.co/api/v2/pokemon?limit=100") // This is a promise
  .then((whateverTheFetchReturns) => whateverTheFetchReturns.json())
  .then((jsonResponse) => {
    jsonResponse.results.forEach((pokemon)=>{
        console.log(pokemon.name);
    })
  })
  .catch((error) => {
    console.log(error);
  });
