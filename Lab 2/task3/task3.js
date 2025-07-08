// Task 3: write a script that accepts a string from user through prompt and count the number of 'e' characters in it.

function countCharacter(text, charToCount) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === charToCount.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function displayResult(text, charToCount, count) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The character '<strong>${charToCount}</strong>' appears <strong>${count}</strong> time(s) in the string: "<em>${text}</em>".`;
    resultDiv.style.color = 'darkblue';
}

function runCharCounter() {
    let text;
    while (true) {
        text = prompt("Enter a string (at least 1 character):");
        if (text && text.trim().length > 0) {
            break;
        }
        alert("The string cannot be empty. Please try again.");
    }

    const charToCount = 'e';
    const count = countCharacter(text, charToCount);
    displayResult(text, charToCount, count);
}

runCharCounter(); 