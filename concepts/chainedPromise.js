/*
Chained Promises: is when the initial promise resolves a value,
Then the .then handler is called
The value that it returns is passed to the next .then handler ...and SO ON..
*/

let chainedPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

chainedPromise.then(function (result) {
  console.log(result); // 1
  return result * 2
});

chainedPromise.then(function (result) {
  console.log(result); // 1
  return result * 2
});

chainedPromise.then(function (result) {
  console.log(result); // 1
  return result * 2
});

// ---------------------------
//Promise.all(array): is when single promise fulfills and all of the promises passed as an iterable have been fulfilled too.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Boo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "Boo"]

