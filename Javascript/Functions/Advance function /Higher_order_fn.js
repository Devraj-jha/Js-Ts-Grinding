//higher order function
//takes another fucntion as a arugemnt
//return another function

function greet(name, callback){
    console.log(" hello. ", name );
    callback();
}
function sayhi(){
    console.log("How are you.. !! ")
}
function sayBye(){
    
        console.log("bye bye")

    }
greet("devraj jha," , sayBye)
greet("dj" , sayhi)