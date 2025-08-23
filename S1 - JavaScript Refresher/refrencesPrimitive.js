// References vs. Primitives.

const { memo } = require("react");

let message = "Hello!"; // Primitive Value. --- String Numbers Booleans.
// Isn't changed, but is overwritten.

const hobbies = ["Sports", "Cooking", "Reading"];
hobbies.push("Coding"); // Reference Value. --- Objects Arrays Functions.
console.log(hobbies);

// Reference Values -
// In a variable you don't store the value, 
// but address of value is stored in memory.
// array is stored somewhere in memory, 
