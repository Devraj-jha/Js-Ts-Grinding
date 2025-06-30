//parameter
function hello(name1){
    console.log("hello " + name1)
}
//here name1 is a parameter like a varialbe
//waiting to take its value 
//when the function will be called

hello("dj"); //here dj (arguemnt) is the 
//actual value passed to the function 
//when we call it

function first() {
  second();
}

function second() {
  third();
}

function third() {
  throw new Error("Oops! Something went wrong.");
}

first();
