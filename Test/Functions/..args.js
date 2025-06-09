function sum(...numbers){
  console.log(numbers);
  return numbers.reduce((total,num)=> total + num,0);
}
console.log(sum(1,2,3));
//...args just let the function take multiple arugments and store them inside the array.
function introduce(greeting,...names){
  return `${greeting} ${names.join(" ,")}`;
}
console.log(introduce("Welcome","dj","djj","ddjjj"))