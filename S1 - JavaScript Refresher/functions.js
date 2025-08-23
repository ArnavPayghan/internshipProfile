function greet() {
    console.log("Hello, World!");
}

greet();

// parameters

function greetPerson(name, message) {
    console.log("Hello, " + name + "! " + message);
}

greetPerson("Alice", "How are you?");
greetPerson("Bob", "Nice to meet you!");

// default parameters

function greetGuest(name = "Guest", message = "Welcome!") {
    console.log("Hello, " + name + "! " + message);
}

greetGuest();
greetGuest(name = "Alice", message = "How are you?"); // CAN BE OVERWRITTEN

// Using return

function greetingMethod(name, message) {
    return "Hello, " + name + "! " + message;
}
const greeting1 = greetingMethod("Dev", "Welcome to the team!");
console.log(greeting1);
console.log(greetingMethod("Dev", "Welcome to the team! - consoleLog"));