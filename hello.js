const prompt = require("prompt-sync")();
var name;
var age = 0;
var favoriteNumber = 0;
var nouns = [];

name = prompt("What is your name? ");
age = prompt("How old are you? ");
favoriteNumber = prompt("What is your favorite number? ");
console.log("Please enter 5 nouns: ")
for(var i=0; i<5; i++){
    nouns.push(prompt(`Noun ${i+1}: `));
}
console.log(`Hello, ${name}! So you're ${age} years old? Wow, I could really use ${favoriteNumber} ${nouns[Math.floor(Math.random(5))]} right about now `);