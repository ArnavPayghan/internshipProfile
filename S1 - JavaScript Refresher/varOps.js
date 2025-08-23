// String, Number, Boolean, Null & Undefined and Objects

/* note @ arnav
RULES and RECOMMENDATIONS
1. Must not contain whitespace or special characters (except $ and _)
2. May contain numbers, but must not start with a number.
3. Must not clash with reserved keywords. (e.g: let, const, if, etc.)
4. Should be Camel Casing : userName, isCorrect, etc.
5. Should describe what the "thing" is identifies, contains or does.
*/

let userMessage = "Hello, World!";
const pi = 3.14;

console.log(userMessage);
console.log(pi);

console.log(10 + 5); // similarly -, /, *, %, ==, >, <, >=, <=.

console.log("Hello" + " " + "World!"); // String Concatenation
console.log("Hello".length); // Property of String

// === checks the value and type
console.log(10 === 5); // RETURNS BOOLEAN VALUE - False
console.log(10 === "10"); // RETURNS BOOLEAN VALUE - False
console.log(10 === 10); // RETURNS BOOLEAN VALUE - True