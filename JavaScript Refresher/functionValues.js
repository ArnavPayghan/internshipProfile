// Using functions as values.

function handleTimeout() {
    console.log("Timeout occurred.");
};

const handleTimeout2 = () => {
    console.log("Timeout occurred again.");
};

setTimeout(handleTimeout, 2000); // 2 seconds.
setTimeout(handleTimeout2, 4000); // 4 seconds.

setTimeout(() => {
    console.log("Timeout occurred a third time.");
}, 3000); // 3 seconds.

// ORDER timeout1, timeout3, timeout2.

// Also can be done in our own made functions. Eg:

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hello from greeter!")); // greetFn