/* const isAdmin = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isAdmin) {
      resolve("Promise fulfilled");
    } else {
      reject("Sorry you are not admin");
    }
  }, Math.random() * 3000);
});

myPromise
  .then((whatIsThis) => console.log(whatIsThis))
  .catch((whatIsCatch) => console.log(whatIsCatch));
 */
const instructions = [
  "Go to Canarias",
  "Look for a palm tree that has bananas",
  "get a friendly monkey",
  "tell the monkey to get a banana for you",
  "peal the banana properly",
  "eat half of the banana and give the rest to your monkey",
];

// PREVIOUS VERSION
/* const getBananaInstructions = (index, callback) => {
  setTimeout(() => {
    console.log(instructions[index]);
    callback();
  }, Math.random() * 5000); // mimic the behavior of the server
}; */

// NEW VERSION, NOW IT's A PROMISE
const getBananas = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(instructions[index]);
    }, Math.random() * 5000);
  });
};

getBananas(0)
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    return getBananas(1);
  })
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    return getBananas(2);
  })
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    return getBananas(3);
  })
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    return getBananas(4);
  })
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    return getBananas(5);
  })
  .then((thisShouldBeInstruction) => {
    console.log(thisShouldBeInstruction);
    console.log("LAST STEP");
  });

Promise.all([getBananas(0), getBananas(1), getBananas(2), getBananas(3)])
  .then((values) => console.log("values", values))
  .catch((error) => console.log(error));

// Mikel is going to find a way to do this automatically 👆 so we don't write the same function again and again
