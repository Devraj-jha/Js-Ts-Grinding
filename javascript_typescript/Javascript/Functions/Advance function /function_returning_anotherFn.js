function multiplier ( factor){
    return function(number){
        return number * factor;
    }
}

const double = multiplier(2);

console.log(double(3)) 

function sayhi(){
    return "hello";
}

let hi = sayhi

let l = hi()

console.log(l)