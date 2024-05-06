const instructions = [
  "Go to Canarias",
  "Look for a palm tree that has bananas",
  "get a friendly monkey",
  "tell the monkey to get a banana for you",
  "peal the banana properly",
  "eat half of the banana and give the rest to your monkey",
];

const getBananas = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(instructions[index]);
    }, Math.random() * 3000);
  });
};

async function getInstructions() {
  try {
    const firstInstruction = await getBananas(0);
    console.log(firstInstruction);
    const secondInstruction = await getBananas(1);
    console.log(secondInstruction);
  } catch (error) {
    console.log(error);
  }
}

getInstructions();
