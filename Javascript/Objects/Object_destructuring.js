//destructuring is a short, clean syntax to unpack values from 
//object into variable

const user = {
    name: "Devraj",
    age: 21,
}
//instead of this
// const name = user.name;
// const age = user.age;


//
const {name, age } = user;
console.log(name);

//rename with destructing

const user1 = {
    username: "Devraj_Jha"
}

const { username: userId } = user1;
console.log(userId);

const course = {
    title: "Javascript master",
    duration: "4 weeks",
    mentor: "Dj"
}

const {title, mentor :guide,fee = "free"  } = course;

console.log(title);
console.log(guide)
console.log(fee)