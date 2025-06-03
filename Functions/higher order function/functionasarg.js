//higher order functions are those which
//takes other function as arugment
//returns a fucntion

//function as arg.

function processarr(arr,operation){

  const result = [];
  for(let i = 0; i<arr.length; i++){
    result.push(operation(arr[i]));

  }
  return result;
}
const double = x => x * 2;

const arrr = [1,2,3,4,5];
console.log(processarr(arrr,double));