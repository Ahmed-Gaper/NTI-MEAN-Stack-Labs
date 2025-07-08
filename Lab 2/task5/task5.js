// Task 5: Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it (+, *, /). Format the output as shown in Fig

function getNumber(promptMessage) {
  let input;
  while (true) {
    input = prompt(promptMessage);
    if (input === null) {
      alert("Input is required. Please enter a number.");
      continue;
    }
    const number = parseFloat(input);
    if (!isNaN(number) && isFinite(number)) {
      return number;
    }
    alert("Invalid input. Please enter a valid number.");
  }
}

function runCalculator() {
    const values = [
        getNumber("Enter the first number:"),
        getNumber("Enter the second number:"),
        getNumber("Enter the third number:")
    ];

    const sum = values.reduce((acc, val) => acc + val, 0);
    const mul = values.reduce((acc, val) => acc * val, 1);

    let divResult;
    // Check if the second or third number is zero for division
    if (values[1] === 0 || values[2] === 0) {
        divResult = "<strong>Error:</strong> Division by zero is not allowed.";
    } else {
        const division = values[0] / values[1] / values[2];
        divResult = `The result is <strong>${division.toFixed(4)}</strong>`;
    }

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <div class="result sum">
            Sum of the 3 values: ${values.join(' + ')} = <strong>${sum}</strong>
        </div>
        <div class="result mul">
            Multiplication of the 3 values: ${values.join(' * ')} = <strong>${mul}</strong>
        </div>
        <div class="result div">
            Division of the 3 values: ${values.join(' / ')} &rarr; ${divResult}
        </div>
    `;
}

runCalculator(); 