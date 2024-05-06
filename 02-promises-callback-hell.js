// Callback functions

// Function that is used as an argument inside another function

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

function sayHi(user) {
  console.log(`Hi! ${user.name}`);
}

users.forEach(sayHi); // sayHi is the callback function

const instructions = [
  "Go to Canarias",
  "Look for a palm tree that has bananas",
  "get a friendly monkey",
  "tell the monkey to get a banana for you",
  "peal the banana properly",
  "eat half of the banana and give the rest to your monkey",
];

const getBananaInstructions = (index, callback) => {
  setTimeout(() => {
    console.log(instructions[index]);
    callback();
  }, Math.random() * 5000); // mimic the behavior of the server
};

getBananaInstructions(0, () => {
  getBananaInstructions(1, () => {
    getBananaInstructions(2, () => {
      getBananaInstructions(3, () => {
        getBananaInstructions(4, () => {
          console.log("DONE! Go back to the class, you are late!");
        });
      });
    });
  });
});

// THIS IS CALLED CALLBACK HELL 👆


