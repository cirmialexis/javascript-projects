// Write a function called 'sum' that takes two numbers as parameters and returns a promise that resolves with the sum of the numbers. If either of the parameters is not a number, the promise should be rejected with the message "Error: both parameters must be numbers".

// For example, calling the function like this:

// sum(2, 3).then(result => console.log(result)).catch(error => console.log(error));

// Should log the result '5' to the console. And calling the function like this:

// sum("2", 3).then(result => console.log(result)).catch(error => console.log(error));

// Should log the error message "Error: both parameters must be numbers" to the console.

let sum = async (num1, num2) => {
  if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
    throw new Error('Error: both parameters must be numbers');
  };
  return num1 + num2;
};

(async () => {
  try {
    const result = await sum(2, 3);
    console.log(result); // logs 5
  } catch (error) {
    console.log(error.message); // logs "Error: both parameters must be numbers"
  }
})();