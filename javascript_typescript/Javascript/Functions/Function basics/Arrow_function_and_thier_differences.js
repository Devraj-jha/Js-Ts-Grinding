
// arrow function

const add = (a,b) => {
    return a + b;
}
//same output cleaner syntax

const square = n => n * n;

const hello = () => console.log("Hello");

const double = x => x * 2;
console.log(square(3))

//  When to Use Arrow Functions
// ✅ Simple, inline, quick functions
// ✅ Callbacks (map, filter, forEach, etc.)
// ✅ When you want this from the outer scope
// ❌ Don’t use for:

// Object methods

// Constructors (new)

// Needing arguments

