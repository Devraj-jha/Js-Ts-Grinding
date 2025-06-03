function greet(name,greeting = "hello"){
  return `${greeting}, ${name}`;
}
// console.log(greet("devraj"));
// console.log(greet("Devraj","Hi"))

//defalt parameters mean what the function would reutrn when no value is provided.

//default parameter example 1
function getTimestamp ()
{
  return new Date().toISOString()}

  function logMessage(message,timestamp = getTimestamp()){
    console.log(`[${timestamp} ${message}]`);
  }
  logMessage("hello");