// Control Structures

// IF Statements.
const password = prompt("Enter your password:"); // won't work in VS Code, needs browser.

if (password === "0001") {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// FOR Loops.
const hobbies = ["Reading", "Gaming", "Hiking"];

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

