const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transforms each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - keeps elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6, 8, 10]

// reduce - combines all elements into single value
const sum = numbers.reduce((total, n) => total + n, 0);
// 55

// find - returns first element that matches
const firstBig = numbers.find(n => n > 5);
// 6

// some - checks if ANY element passes test
const hasEven = numbers.some(n => n % 2 === 0);
// true

// every - checks if ALL elements pass test
const allPositive = numbers.every(n => n > 0);
// true