//retuns sends a value..to the funciton

function add(a,b ){
    return a + b;
}

let result = add( 3,4);

console.log(result);

function greet(name){
  return  console.log("Hello " + name);

}

greet("dj")

//returns also ends teh functon

function isEven(n){
    if(n % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");

    }
}

isEven(4)

