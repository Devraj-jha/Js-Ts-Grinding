//object is a collection of keyvalue pairs
let empty = {};
//i created an empty object.
let person = {

  name: "alice ",
  age: 13,
  city: "new york"
};
//here i created a person object
//properties of objects
let student = {
    // String property
    firstName: "John",
    
    // Number property
    age: 20,
    
    // Boolean property
    isEnrolled: true,
    
    // Array property
    subjects: ["Math", "Physics", "Chemistry"],
    
    // Object property (nested object)
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02101"
    },
    
    // Function property (method)
    introduce: function() {
        return "Hi, I'm " + this.firstName;
    }
};


console.log(student.introduce())//way to ccall a function side an object.