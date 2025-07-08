// Task 1: Write your own function that can add n values ensure that all passing parameters are numerical values only.

function sum(...values) {
  let total = 0;
  for (const value of values) {
    if (typeof value !== 'number' || !isFinite(value)) {
      throw new TypeError(`Invalid parameter: "${value}". All parameters must be finite numbers.`);
    }
    total += value;
  }
  return total;
}

// --- Demonstration ---
try {
  // Example 1: All numbers
  const result1 = sum(1, 2, 3, 4, 5);
  console.log("Sum 1:", result1); // Expected output: 15

  // Example 2: with negative numbers
  const result2 = sum(10, -5, 8.5);
  console.log("Sum 2:", result2); // Expected output: 13.5

  // Example 3: No arguments
  const result3 = sum();
  console.log("Sum 3:", result3); // Expected output: 0

  // Example 4: Invalid parameter
  console.log("Attempting to sum with a non-numeric value...");
  const result4 = sum(1, 2, 'a', 4); // This will throw an error
  console.log("Sum 4:", result4); // This line won't be reached

} catch (error) {
  console.error(error.message);
}

try {
    // Example 5: Another invalid parameter
    console.log("Attempting to sum with another non-numeric value...");
    const result5 = sum(10, 20, null); // This will throw an error
    console.log("Sum 5:", result5); // This line won't be reached
} catch (error) {
    console.error(error.message);
} 