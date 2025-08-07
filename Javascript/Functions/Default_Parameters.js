//
function greet(name = "User"){
    console.log("hello... " + name );
}

greet("devraj jha")

greet()
//prevents undefined bugs
//make function more roboust 

//instead of writing this...

function dd(name ){
    name = name || "guest"; //old method
    console.log("hi.. " + name);
}

dd() 
console.log("__________________")
//questionss......

function multiply(a, b = 1) {
  return a * b;
}

// Q: What does each of these log?
console.log(multiply(5));      
console.log(multiply(5, 2));   
console.log(multiply(5, 0));   
console.log(multiply(5, undefined));
console.log(multiply(5, null));
