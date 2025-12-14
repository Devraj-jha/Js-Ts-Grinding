//question 1
let nums = [1, 2, 3];
nums.push(4);
nums.unshift(0);
nums.pop();
nums.shift();
console.log(nums);

// sol

//1, 2 3 answer 
console.log("____________")
//question 2
let tasks = ["eat", "code", "sleep"];
tasks.pop();
tasks.push("repeat");
tasks.shift();
tasks.unshift("wake up");
console.log(tasks);

//  q2=> wake up code repeat 

console.log("______");

//question 3 => 

// Write a program that:
// Starts with: let letters = []
// Adds "a" to the beginning
// Adds "b" and "c" to the end
// Removes the first item
// Adds "d" to the beginning
// Logs the final array

let letters = ["a","b", "c"]

letters.shift();
letters.unshift("d");
console.log(letters)