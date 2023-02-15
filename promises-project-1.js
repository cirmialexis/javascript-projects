// Write a function called sum that takes two numbers as parameters and returns a promise that resolves with the sum of the numbers. If either of the parameters is not a number, the promise should be rejected with the message "Error: both parameters must be numbers".

// For example, calling the function like this:

// sum(2, 3)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// Should log the result 5 to the console. And calling the function like this:

// sum("2", 3)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// Should log the error message "Error: both parameters must be numbers" to the console.