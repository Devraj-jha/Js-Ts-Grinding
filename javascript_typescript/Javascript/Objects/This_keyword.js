//this keyword refers to the object that is excetuting the current fucntion

//who is calling me right nwo.

const person = {
  name: "Devraj",
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // Hi, I'm Devraj


//