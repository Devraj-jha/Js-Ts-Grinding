// an object is a collection of key value pair.

//key = property name (strings symbols)
//values = can be anything.. strings number array function

// lets u represent a real world entities

const person = {

    name: "devarj jha",
    age: "19",
    isStudent: true
};

//acessing values.
console.log(person.name);
//bracket notiation 
console.log(person["age"])

const key = "isStudent";
console.log(person[key]);

//nested objects
const user = {
  name: "Devraj",
  address: {
    city: "Patna",
    pin: 800001
  }
};

console.log(user.address.city); // Patna
console.log("_________________")
//question  

let book = {
    title: "Mastering js",
    author: "Devraj jha",
    year: 2025
}
book.pages = 300;
book.year = 2026
delete book.author
console.log(book)