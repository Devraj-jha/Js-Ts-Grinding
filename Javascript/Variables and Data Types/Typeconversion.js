console.log(typeof "hello")      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" 
typeof Symbol()     // "symbol"
typeof 123n         // "bigint"
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"


//there are 2 types of conversion
//explicit change => manual by dev
//implicit => changes by js automatically

String(123)      // "123"
Number("42")     // 42
Boolean(0)       // false

//sometimes js himself do converting thing

"5" + 1       // "51" → number 1 is coerced to string
"5" - 1       // 4   → string "5" is coerced to number
1 == "1"      // true → "1" is coerced to number
1 === "1"     // false → no coercion, strict type check
