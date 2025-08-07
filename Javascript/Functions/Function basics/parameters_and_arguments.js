function greet(name) {   // ← name is a PARAMETER
  console.log("Hello, " + name);
}

greet("Alice");          // ← "Alice" is an ARGUMENT

function sum(a, b) {
  return a + b;
}

sum(3, 4); // 3 and 4 are arguments for parameters a and b


//missing parameters become undefined..
function greet(name, age) {
  console.log(name + " is " + age + " years old");
}

greet("Dave");
// Output: Dave is undefined years old


//js ignores extra argument

function greet(name) {
  console.log("Hello " + name);
}

greet("Bob", 25, true); // Hello Bob
