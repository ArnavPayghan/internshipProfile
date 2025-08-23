const user = {
    name: "Arnav",
    age: 22,
    greet() {
        console.log("Hello!");
    }
};

console.log(user.name); 
console.log(user.age);  
user.greet();

// Class

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello" + " " + this.name + ". You are " + this.age + " years old.";
    }
}

const user1 = new User("Arnav Payghan", 22);
console.log(user1);
console.log(user1.greet());