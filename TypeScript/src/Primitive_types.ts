//js -> dyanamic assign anything to any variable.
//ts -> adds type system to catch errors.

let username: string = "dj";
let age: number = 3.14;
let isOnline: boolean = true;

//variable declar.. name of var. : type of var = value;


//unknown (safer any).. 
function handleUserInput(input: unknown) {
  if (typeof input === "number") {
    console.log("Square:", input * input);
  } else if (typeof input === "string") {
    console.log("Upper:", input.toUpperCase());
  } else {
    console.log("Unsupported type");
  }
}
