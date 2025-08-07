//javascript object notation..
//json is a text format for storing and exchanging data

// used in apis.
//local storage.
//config files


//JSON.strify();



const user = {
  name: "Devraj",
  age: 21
};

const jsonData = JSON.stringify(user);

console.log(jsonData); 
// '{"name":"Devraj","age":21}' ← string format


const jsonStr = '{"name":"Devraj","age":21}';

const obj = JSON.parse(jsonStr);

console.log(obj.name); // Devraj
