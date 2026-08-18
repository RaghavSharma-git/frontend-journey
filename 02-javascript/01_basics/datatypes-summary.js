// primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const num1 = 10; // Number
const str1 = "Hello"; // String
const bool1 = true; // Boolean
const undef1 = undefined; // Undefined
const null1 = null; // Null
const sym1 = Symbol("123"); // Symbol
const sym2 = Symbol("123"); // Symbol
const bigInt1 = 9007199254741991n; // BigInt 

console.log(sym1 === sym2); // false


//Relational Operators(non primitive data types)
//array, object, function

const heros = ["thor","spiderman","ironman"]; // array

let myobject = {  // object
    name: "tony stark",
    age: 48,

}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof num1);// number
console.log(typeof str1);// string
console.log(typeof bool1);// boolean
console.log(typeof undef1);// undefined
console.log(typeof null1);// object
console.log(typeof sym1);// symbol
console.log(typeof bigInt1);// bigint
console.log(typeof heros);// object
console.log(typeof myobject);// object
console.log(typeof myFunction);// function

//+++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) and heap memory(non-primitive)

let myYoutubename = "codewithharry"; // stack memory

let anothername = myYoutubename; 
anothername = "codewithraghav";

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email); 
