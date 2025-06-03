//global scope means variables accesssible everywhere in your program.. local scope means varaibles only accessbile within where they are defined..

var globalvar = " I am global.";
var globallet = "I am also global";

function myfunction (){

  var localvar = " I am local";
//only specific to inside function can;t be used outsice
}

let gc = 0
function incrementglobal(){

  gc++;
  return gc;
}


// The classic var problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100); // Prints: 3, 3, 3
}

// Fixed with let (block scope)
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 100); // Prints: 0, 1, 2
}
