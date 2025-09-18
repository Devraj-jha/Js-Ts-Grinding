
// Write a program to calculate the sum of all numbers from 1 to N (where N is user input).
// 👉 Requirements:
// Use a loop (for or while).
// Store the running sum in a variable.
// Print the final result.
// Example:
// Input → N = 5
// Output → 15 (because 1 + 2 + 3 + 4 + 5 = 15)



let N = 5;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum = sum + i;  // or sum += i
}

console.log(sum);
