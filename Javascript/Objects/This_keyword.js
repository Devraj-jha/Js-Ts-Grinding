//this keyword refers to the object that is excetuting the current fucntion

//who is calling me right nwo.

const personTemplate = {
    greet: function(){
        console.log("hello !, I am " + this.name)
    }
}