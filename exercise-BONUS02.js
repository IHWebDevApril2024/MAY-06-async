async function getPokemons() {
  try {
    const firstResponse = await fetch("https://pokeapi.co/api/v2/pokemon");
    const firstData = await firstResponse.json();
    
    const secondResponse = await fetch(firstData.next);
    const secondData = await secondResponse.json();

    const newArray = [...firstData.results, ...secondData.results];

    console.log(newArray);
  } catch (error) {
    console.log(error);
  }
}

getPokemons();
