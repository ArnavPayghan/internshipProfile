// Spread Operator

const hobbies = ["Reading", "Traveling"];

const user = {
    name : "Arnav",
    age : 22
};

const newHobbies = ["Gaming"];

// spread operator = "...<array>"
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);