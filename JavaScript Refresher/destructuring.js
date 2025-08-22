const userNameData = [ "John", "Doe" ];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [ firstName, lastName ] = [ "John", "Doe" ]; // = [userNameData];
console.log(firstName, lastName);

// user object:
const user = {
    name: "Arnav",
    age: 22
};
// instead do this:
const {name: userName, age: userAge} = {
    name: "Arnav",
    age: 22
};
console.log(userName, userAge);

// Destructuring in Function Parameter Lists --- Research more on this.
