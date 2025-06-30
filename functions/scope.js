let globalvar = "I am global!";
function show(){
    console.log(globalvar);
}
show();

console.log(globalvar);

//Local scope...
function test(){
    let localVar = "I am local!";
    console.log(localVar);
}
test();
console.log(globalvar)

//BLOCK SCOPE


function hello(){
    var nam = "dj"  
    console.log()  
}
//lexical scope
//what is closure ?
// a closure is what happens when
// when an inner fucntion remebers the 
//variables of its outer fn..
