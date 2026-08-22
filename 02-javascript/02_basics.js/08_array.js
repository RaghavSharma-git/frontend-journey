// array

const myarr =[0,1,2,3,4,5,6,];
const myheros =["shaktiman","nagraj","doga","batman"];

const myarr2 = new Array(1,2,3,4,5);
console.log(myarr2[1]);

// array methods

myarr.push(10); // add at last
myarr.pop(); // remove from last
myarr.unshift(5); // add at beginning
myarr.shift(); // remove from beginning

console.log(myarr.includes(9));
console.log(myarr.indexOf(4));

const newarr = myarr.join()
console.log(newarr);

// slice and splice

console.log("A",myarr);

const myn1 = myarr.slice(2,5); // from index 2 to 5 (5 not included)

console.log("B",myn1);

const nyn2 = myarr.splice(2,5);// from index 2, remove 5 elements
console.log("C",nyn2);

const marvel_heros = ["ironman","thor","hulk","captain america"];
const dc_heros = ["superman","flash","wonder woman","aquaman"];

// marvel_heros.push(dc_heros); // merge array in another array as a single element
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]); // access character in string in array

// const allheros= marvel_heros.concat(dc_heros); // merge two arrays in one array
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros]; // merge two arrays in one array using spread operator
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const flat_array = another_array.flat(Infinity) // flatten the array
console.log(flat_array);

console.log(Array.isArray("raghav")); // check if it is array or not
console.log(Array.from("raghav")); // convert string to array
console.log(Array.from({name: "raghav"})); // convert object to array, it will return empty array because object is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // convert multiple values to array
