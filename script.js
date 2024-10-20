//your JS code here. If required.
// Function to simulate async operation with a delay using setTimeout
function delayOperation(operation, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(operation());
    }, delay);
  });
}

// Function to handle the button click event
document.getElementById("btn").addEventListener("click", function () {
  const inputNumber = Number(document.getElementById("ip").value); // Get input value

  if (isNaN(inputNumber)) {
    document.getElementById("output").textContent = "Please enter a valid number.";
    return;
  }

  // First promise: resolves with the input number after 2 seconds
  delayOperation(() => inputNumber, 2000)
    .then((number) => {
      document.getElementById("output").textContent = `Result: ${number}`;
      return delayOperation(() => number * 2, 1000); // Second promise: multiply by 2
    })
    .then((number) => {
      document.getElementById("output").textContent = `Result: ${number}`;
      return delayOperation(() => number - 3, 1000); // Third promise: subtract 3
    })
    .then((number) => {
      document.getElementById("output").textContent = `Result: ${number}`;
      return delayOperation(() => number / 2, 1000); // Fourth promise: divide by 2
    })
    .then((number) => {
      document.getElementById("output").textContent = `Result: ${number}`;
      return delayOperation(() => number + 10, 1000); // Fifth promise: add 10
    })
    .then((finalNumber) => {
      document.getElementById("output").textContent = `Final Result: ${finalNumber}`; // Display final result
    })
    .catch((error) => {
      document.getElementById("output").textContent = `Error: ${error.message}`;
    });
});
