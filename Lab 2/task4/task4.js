// Task 4: Write a script that reads from the user his info; validates and displays it with a welcoming message.(name,phone,email,)

// --- Validation Functions ---
function isValidName(name) {
  return /^[a-zA-Z\s]{2,}$/.test(name);
}

function isValidPhone(phone) {
  // Allows for optional country code, spaces, and dashes
  return /^\+?(\d[\d\s-]{8,14}\d)$/.test(phone);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Input Gathering Function ---
function getUserInput(promptMessage, validationFn, errorMessage) {
  let input;
  while (true) {
    input = prompt(promptMessage);
    if (input === null) {
      alert("This field is required. Please enter a value.");
      continue;
    }
    if (validationFn(input.trim())) {
      return input.trim();
    }
    alert(errorMessage);
  }
}

// --- Main Execution ---
function runUserInfoValidator() {
    const name = getUserInput(
        "Enter your full name:",
        isValidName,
        "Invalid name. Please enter at least 2 letters and only use alphabetical characters."
    );

    const phone = getUserInput(
        "Enter your phone number (e.g., 123-456-7890):",
        isValidPhone,
        "Invalid phone number. Please enter a valid format (9-15 digits, with optional '+', spaces, or dashes)."
    );

    const email = getUserInput(
        "Enter your email address:",
        isValidEmail,
        "Invalid email. Please enter a valid email format (e.g., user@example.com)."
    );

    const welcomeDiv = document.getElementById('welcome-message');
    welcomeDiv.innerHTML = `
        <h2>Welcome, ${name}!</h2>
        <p>Your information has been validated:</p>
        <ul>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
        </ul>
    `;
}

runUserInfoValidator();