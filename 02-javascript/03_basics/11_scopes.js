let a = 1; // global scope variable. It can be accessed from anywhere in the code.

if (true) {
    let a = 10; // block scope variable. It can only be accessed within the block it is defined in. It will not affect the global variable a.
    const b = 20;
    var c = 30;
    console.log(a); // 10
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Raghav"; // function scope variable. It can only be accessed within the function it is defined in.

    function two() {
        const website = "youtube";
        console.log(username);

    }
    // console.log(website);
    two();

}

// one();

if(true){
    const username = "Raghav"; // block scope variable. It can only be accessed within the block it is defined in.

    if (username === "Raghav"){
        const website = " youtube";
        console.log(username + website);
        
    }
    // console.log(website);
    

}

// console.log(username);
console.log(addone(5)); // this type of function is called function declaration. it is hoisted to the top of the code. It can be called before it is defined in the code. It is also called named function because it has a name. We can also use function expression to define a function. It is a shorter syntax for defining a function expression.

function addone(num){ 
    return num + 1; // result is a variable that is not defined in the function. It will throw an error if we try to access it outside the function. It is a local variable that is only accessible within the function.
}

console.log(addtwo(5)); // this type of function is called function expression. it throws an error if we try to call the function before it is defined. It is not hoisted like function declaration. It is only hoisted as a variable declaration but not as a function declaration. It is also called anonymous function because it does not have a name. We can also use arrow function to define a function expression. It is a shorter syntax for defining a function expression.
const addtwo = function(num){
    return num + 2; // result is a variable that is not defined in the function. It will throw an error if we try to access it outside the function. It is a local variable that is only accessible within the function.
}
