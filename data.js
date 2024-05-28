/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "dog";
animal["name"] = "Fritz";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "bark";
noises.push("growl");
noises.unshift("whine");
noises[noises.length] = "groaning";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal.noises[noises.length] = "sighing";
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?  Dot and bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?   Bracket notation with indexes,
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"],
};

animals.push(duck);

console.log(animals);

var cat = {
  species: "cat",
  name: "whiskers",
  noises: ["purr", "hiss", "cry"],
};

var horse = {
  species: "horse",
  name: "Dasher",
  noises: ["blow", "grunt", "roar"],
};

animals.push(cat);
animals.push(horse);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];

function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
}

const randomIndex = getRandom(animals);

const randomAnimal = animals[randomIndex].name;

friends.push(randomAnimal);

animals[0]['friends'] = friends;

console.log(animals);

// We use an array to store the list of friends because it allows us to maintain an ordered list of animal names,
// and we can easily add, remove, and access friends by their index.

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports.animal = animal || null;
  module.exports.noises = noises || null;
  module.exports.animals = animals || null;
  module.exports.friends = friends || null;
  module.exports.getRandom = getRandom || null;
}
