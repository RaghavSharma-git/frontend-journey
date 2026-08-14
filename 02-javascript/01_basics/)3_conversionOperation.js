let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log( valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

//1 => true; 0 => false
//"abc" => true; "" => false
//null => false
//undefined => false
//randomString => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);


// ************ Operations ************ 

let value = 34;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+"2");
console.log("1"+2+2); // 112
console.log(1+2+"2"); 
console.log((2+3) * 5 % 2);
console.log(+true);

let a = 10;
console.log(++a);
console.log(a++);
console.log(a);



