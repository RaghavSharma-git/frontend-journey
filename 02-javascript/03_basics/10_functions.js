function saymyname(){
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("H");
    console.log("A");
    console.log("V");
    
}

// saymyname(); // saymyname is reference to the function and () is used to call the function. If we do not use () then it will not call the function and it will just print the reference of the function.

function addtwonumbers(num1,num2){

    // let result = num1 + num2;
    // return result; // return is used to return the value from the function. It is used to get the output from the function. We can also use console.log() to print the output from the function but it will not return the value from the function.
    return num1 + num2; // we can also directly return the value without storing it in a variable.
}

const result = addtwonumbers(5,10); // we can store the output of the function in a variable and then use that variable to get the output from the function.
console.log(result); // we can also directly print the output from the function without storing it in a variable.

// function addtwonumbers(num1,num2){
//     console.log(num1+num2);
// }

// addtwonumbers(5,10); // 5 and 10 are arguments to the function addtwonumbers. We can also pass variables as arguments to the function.

function loginUserMessage(username = "sampleuser"){ // we can also set default value for the parameter in case if we do not pass any argument to the function.
    if(username === undefined){
        console.log("Please enter a username");
        
        return 
    }
    return `${username} just logged in`;
}

// console.log(loginUserMewssage("Raghav")); // Raghav is the argument to the function loginUserMessage. We can also pass variables as arguments to the function.
console.log(loginUserMessage()); // Raghav is the argument to the function loginUserMessage. We can also pass variables as arguments to the function.+

function calculateCartPrice(...num1){
    return num1;// ... is called rest operator. It is used to get the rest of the arguments passed to the function as an array. It is used when we do not know how many arguments will be passed to the function.
}

console.log(calculateCartPrice(300,400,500,600));

const user = {
    username :"Raghav",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user); // we can also pass an object as an argument to the function.

handleObject({username:"Raghav", price: 199}); // we can also pass an object directly as an argument to the function without storing it in a variable.

const mynewArray = [1,2,3,4,5,6];

function returnSecondValue(getarray){
    return getarray[1]; // we can also return a specific element from the array by using the index of the element.

}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([10,20,30,40,50])); // we can also pass an array directly as an argument to the function without storing it in a variable.
