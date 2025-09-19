// Problem:
// Print numbers from 1 to 100 with these rules:
// If divisible by 3 → print "Fizz".
// If divisible by 5 → print "Buzz".
// If divisible by both → print "FizzBuzz".
// If the number is prime, print "Prime" instead (prime overrides everything else).
//  Covers: variables, operators, loops, conditionals, nested logic, functions.

function isPrime(n) {
  if (n < 2) return false;  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  
  
  if (isPrime(i)) {
    console.log("Prime");
  } else if (i % 15 === 0) {  
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

}
