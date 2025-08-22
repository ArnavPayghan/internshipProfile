// Arrays & Array Methods like map()

const hobbies = ["Reading", "Traveling", "Gaming"];

console.log(hobbies);
console.log(hobbies[0]);

// .push()
hobbies.push("Cooking");
console.log(hobbies);

// .findIndex(() => {})
const index = hobbies.findIndex((item) => {
    return item === "Gaming";
});
// const index = hobbies.findIndex((item) => item === "Gaming"); --- Shorter Version.
console.log(index);


