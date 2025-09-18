// Problem:
// Take a string (e.g., "hello") and print its reverse ("olleh").

// 👉 Requirements:

// Use a loop (no built-in reverse() allowed).

// Store the reversed string in a new variable.

// Example:
// Input → "hello"
// Output → "olleh"


let string = "hello";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];  // add character to new string
}

console.log(reversed); // "olleh"
