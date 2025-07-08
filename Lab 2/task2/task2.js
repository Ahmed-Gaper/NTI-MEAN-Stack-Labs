// Task 2: Write a script to determine whether the entered string is palindrome or not. Ask the user whether to consider case of the entered string or not, handle both cases in your script i.e. RADAR NOON MOOM are palindrome. Note: raDaR is not a palindrome if user requested considering case of entered string.

function isPalindrome(word, caseSensitive = false) {
  let processedWord = String(word);

  if (!caseSensitive) {
    processedWord = processedWord.toLowerCase();
  }

  // Optimized loop: only need to check up to the middle of the string.
  for (let i = 0, j = processedWord.length - 1; i < j; i++, j--) {
    if (processedWord[i] !== processedWord[j]) {
      return false;
    }
  }
  return true;
}

function runPalindromeChecker() {
  let inputWord;
  while (true) {
    inputWord = prompt("Enter a non-empty string to check:");
    if (inputWord && inputWord.trim().length > 0) {
      break;
    }
    alert("Input cannot be empty. Please try again.");
  }

  const caseSensitivityInput = prompt("Do you want to consider case? (yes/no)", "no");
  const wantsCaseSensitive = caseSensitivityInput.toLowerCase() === 'yes';

  const result = isPalindrome(inputWord, wantsCaseSensitive);
  const resultDiv = document.getElementById('result');

  if (result) {
    resultDiv.textContent = `"${inputWord}" is a palindrome.`;
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = `"${inputWord}" is NOT a palindrome.`;
    resultDiv.style.color = 'red';
  }
}

runPalindromeChecker();