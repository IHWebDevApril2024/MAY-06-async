const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const newArray = data.results.map(({ name, species, origin }) => {
      return {
        name,
        species,
        origin: origin.name,
      };
    });
    console.log(newArray);
  } catch (error) {
    console.log(error);
  }
};

getCharacters();
