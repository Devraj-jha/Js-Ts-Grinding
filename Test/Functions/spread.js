//spread operator spread out elements .
const arr1 = [1,3,4,5];
const arr2 = [6,7,8,9];

const comb = [...arr1,...arr2];
console.log(comb)

//this is also used to create an copy of an arry
const actualCopy = [...original];
actualCopy.push(7);
console.log(original);
console.log(actualCopy); 
