greet(); // here i am calling this function it will either do 
//something or return a value....
//useful for regular function
function greet(){
    console.log("helloe world ")
}// here i am declaring a fucnton fucntion is a resuable block of code
//when you progrmme you try to not repeat your self..


//expression
//usefull for callbacks and inline fucntion..
const sum = function(a,b){
    return a+b;
//this is anonmous function but stored inside the sum variabl.
}
console.log(sum(1,3))

//inline anon func. example
document.getElementById("myBtn").addEventListener("click",function(){
    alert("anythign here...")
})
document.getElementById("btn").addEventListener("click",sum)