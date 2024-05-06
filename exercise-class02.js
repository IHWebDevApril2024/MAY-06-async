// Create an async function

const getNames = async () => {
  // or async function getNames(){
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    const newArray = data.results.map((character) => {
      const newObject = {
        name: character.name,
        species: character.species,
        planet: character.origin.name,
      };
      return newObject;
    });
    console.log(newArray);
  } 
  catch (error) {
    console.log(error);
  }
};

getNames();
