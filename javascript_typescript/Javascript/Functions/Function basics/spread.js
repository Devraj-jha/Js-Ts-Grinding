//spread operator takes elemeents out of an 
//Iterable and spread them
const nums = [1,2,3];

console.log(Math.min(...nums));

const original = [1,2,3];

const copy = [...original]
console.log(copy); 

//array concatenation
const a = [1,2];
const b = [4,5];

const merge = [...a,...b]; //merge two array

//spreading strings into an array

const words = 'hello '
console.log("____________")
//questions

//Write a function multiplyThreeNumbers(a, b, c) that:
// Accepts 3 parameters
// Returns their product
//Then:
// Store the numbers in an array
// Use the spread operator to call the function with that array


// Expected Output:
// multiplyThreeNumbers(2, 3, 4)      // 24
// multiplyThreeNumbers(...[5, 6, 1]) // 30

function multiplyThreeNumbers(a, b, c){
    return console.log(a * b * c)

}


multiplyThreeNumbers(2,3,4)
multiplyThreeNumbers(...[5,6,1])