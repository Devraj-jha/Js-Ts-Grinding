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
} // expresssion