const name = "hitesh"; // string literal
const repoCount = 50 // number literal

// console.log(name + repoCount+ " is my name and repo count"); // concatenation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // template literal

const gameName = new String('far_cry'); // string object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne = "  hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('raghu'));

console.log(gameName.split("_"));
