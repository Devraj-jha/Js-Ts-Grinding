//higher order function
//takes another fucntion as a arugemnt
//return another function

function Greeter(name) {
    return function(message){
        console.log(`${message}, ${name}`)
    }
}
