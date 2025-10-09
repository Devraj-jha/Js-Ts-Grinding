//Don't change the orignal arrays...
//safe to use without changing the orginal data..


// slice ( start, end ) => returns a shallow copy of a part of an array..

let colors = ["red", "green", "blue", "yellow"];
let warmColors = colors.slice(0, 2);
console.log(warmColors);  // ["red", "green"]
console.log(colors);      // ["red", "green", "blue", "yellow"] ✅ unchanged

let nums = [1, 2, 3, 4, 5];

nums.slice(1);      // [2, 3, 4, 5] — from index 1 to end
nums.slice(-2);     // [4, 5] — last 2 elements
nums.slice(1, -1);  // [2, 3, 4] — from index 1 to second-last
