

// /teration is the process of repeating a block of code for every item in a data structure like an array, string, map, set, etc.

let fruits = ["apple", "banana", "cherry"]; //works for evry ds in js
 
for ( let x of fruits) {
    console.log(x);

}


//for each => works for ary only.
let num = [1,2,3,4,5,6]
num.forEach(function(num){
    console.log(2 * num)
})