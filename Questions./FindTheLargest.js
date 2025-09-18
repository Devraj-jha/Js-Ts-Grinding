
// Problem:
// Given an array of numbers, find the largest number without using built-in functions like Math.max().

// 👉 Requirements:

// Use a loop to check each element.

// Keep track of the current largest number.

// Print the largest at the end.

// Example:
// Input → [12, 45, 7, 89, 23]
// Output → 89




let a = [12, 45, 7, 89, 23]

let largest = a[0];

for ( let i = 0; i < a.length ; i ++){
    if ( a[i] > largest){
        largest = a[i]
    }
}
console.log(largest)