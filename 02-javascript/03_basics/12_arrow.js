const user = {
    username: "Raghav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "krishna";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username ="hitessh"
//     console.log(this.username);
    
// }

const chai = () => {    // arrow function does not have its own this keyword. It inherits the this keyword from the parent scope which is the global scope in this case. In the global scope, this keyword refers to the global object which is window in browsers. In strict mode, this keyword is undefined in the global scope. So, in this case, this.username will be undefined because there is no username property in the global object.
    let username ="hitessh"
    console.log(this.username);
    
}

// chai() 
// note - this keyword works in objects not in functions. In functions, this keyword refers to the global object which is window in browsers. In strict mode, this keyword is undefined in functions. In arrow functions, this keyword refers to the parent scope which is the global scope in this case.

// const addtwo = (num1,num3) => {
// return num1 + num3 // excplicit return. We need to use return keyword to return the value from the function. It is a local variable that is only accessible within the function.
// }

//OR
// const addtwo = (num1,num3) =>  num1 + num3
//OR
// const addtwo = (num1,num3) =>  (num1 + num3) // incplicit return. We do not need to use return keyword to return the value from the function. It is a local variable that is only accessible within the function.
const addtwo = (num1,num3) =>  ({username: "Raghav"}) 
console.log(addtwo(5,10));

const myArray = [1,2,3,4]
