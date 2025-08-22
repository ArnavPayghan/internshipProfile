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

// .map()
// Map allows to transform every item in an array to another item.
const newHobbies = hobbies.map((item) => item + " is fun!");
console.log(newHobbies);

const editedHobbies = hobbies.map((item) => ({text: item}));
console.log(editedHobbies);

