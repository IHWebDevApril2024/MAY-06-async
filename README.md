# Asynchronous code in JavaScript

## What is asynchronous code?

When we need to perform a task that takes a long time to complete, we don't want to block the execution of the rest of our code. Right? That's where asynchronous code comes in. It allows us to perform tasks that take a long time to complete without blocking the execution of the rest of our code.

### Example

We want to collect data from an API and display it on our website. We don't want to block the execution of the rest of our code while we wait for the data to be fetched.

## Promises

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Remember the example of doing your homework and promising your teacher to complete it by tomorrow? That's a promise. They can be fulfilled, rejected or pending.

The fetch API is a good example of using promises that will take some time to complete.

### Creating a new promise manually

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data has been fetched");
  }, 2000);
});

myPromise.then((data) => {
  console.log(data);
});
```

In the example above, we create a new promise that will resolve after 2 seconds. When the promise is resolved, we log the data to the console.

### then and catch

After each promise, we can use the `then` method to handle the resolved value and the `catch` method to handle the rejected value.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Data could not be fetched");
  }, 2000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

In case of an error, the `catch` method will be called. Then we are going to log the error to the console (`Error: Data could not be fetched`).

## Async/Await

Async/await is another way to handle asynchronous code in JavaScript. It's built on top of promises and provides a more readable way to write asynchronous code.

### Example

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
```

The `fetchData` function is an asynchronous function that fetches data from an API. We use the `await` keyword to wait for the promise to resolve. If the promise is rejected, the `catch` block will be executed.


Try to follow the examples in this project to understand how asynchronous code works in JavaScript. You can also create your own examples to practice. The most common use cases for asynchronous code are fetching data from an API, reading files, and handling user input.