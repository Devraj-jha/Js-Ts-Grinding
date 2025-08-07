// | Feature             | Function Declaration               | Function Expression                  |
// | ------------------- | ---------------------------------- | ------------------------------------ |
// | **Syntax Name**     | `function greet() {}`              | `const greet = function() {}`        |
// | **Hoisted?**        | ✅ Yes                              | ❌ No                                 |
// | **Anonymous?**      | Can be named                       | Can be anonymous                     |
// | **When available?** | Anywhere in the scope              | Only *after* the line it's defined   |
// | **Good for?**       | Standard, reusable named functions | Dynamic, inline, closures, callbacks |


hello();

function hello(){
    console.log("hello ")
} // function delcartion
const sayHi = function(){
    console.log("hello ")
} // expresssion exists to give flexiblity...

// example pass them as argugment  

// | Property             | Function Declaration    | Function Expression                        |
// | -------------------- | ----------------------- | ------------------------------------------ |
// | Name in stack trace  | ✅ Yes                   | ✅ If named, ❌ if anonymous                 |
// | Hoisted              | ✅ Function is hoisted   | ❌ Only variable declared (not initialized) |
// | Useful in            | Library APIs, utilities | Callbacks, closures, IIFEs, event handlers |
// | Can be self-invoked? | ❌ No                    | ✅ Yes (IIFE)                               |
// | Example              | `function add() {}`     | `const add = function() {}`                |
