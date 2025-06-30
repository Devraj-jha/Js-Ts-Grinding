//object destructuring lets you pull
//properties out of objects into variable
//quickly
const user = {
    name:"dj",
    age:12,

}
const {name, age} = user;
console.log(name,age);
const {hobbies = "reading"} = user;
