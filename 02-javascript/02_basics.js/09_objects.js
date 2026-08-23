// singleton
//object.create

//object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Raghav",
    "Full Name": "Raghav Sharma",
    [mySym]: "mykey1",
    age : 22,
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["monday","Tuesday"]
}


console.log(JsUser);

console.log(JsUser.name); // console.log(JsUser.location); // access object property using dot notation 
console.log(JsUser["Full Name"]); // access object property using bracket notation 
console.log(JsUser[mySym].typeof); // access object property using symbol key

JsUser.age = 23; // update object property
// Object.freeze(JsUser); // freeze the object, it will not allow to update or add new property
JsUser.age = 24; // it will not update the age property because the object is frozen
console.log(JsUser.age); // it will print 23 because the age property is not updated

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`); // this keyword refers to the current object
    
}

console.log(JsUser.greeting()); // call the method of object
console.log(JsUser.greetingTwo()); // call the method of object

// const tinderUser = new Object(); // create an empty object using Object constructor
const tinderUser = {}
tinderUser.id = "14545"
tinderUser.name = "Raghav"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: " some@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Raghav",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {...obj1,...obj2} // merge two objects using spread operator, if there are same keys in both objects, the value of the last object will be taken
const obj3 = Object.assign({}, obj1, obj2) // merge two objects using Object.assign() method, if there are same keys in both objects, the value of the last object will be taken
console.log(obj3);

const Users = [
    {
    id : 1,
    name: "Raghav",
    age: 22,
    email: "raghavsharma.@gmail.com"
    },
    {
        id : 2,
        name: "Rahul",
        age: 25,
        email: "rahulsharma.@gmail.com"
    },
    {
        id : 3,
        name: "Rohit",
        age: 24,
        email: "rohitsharma.@gmail.com"
    }
]

Users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // get all keys of the object
console.log(Object.values(tinderUser)); // get all values of the object
console.log(Object.entries(tinderUser)); // get all key-value pairs of the object in an array format


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "JavaScript",
    courseInstructor: "Raghav Sharma",
    coursePrice: 999,
}

// console.log(course.courseInstructor);

const {courseInstructor: inst} = course; // object destructuring, it is used to extract properties from an object and assign them to variables

console.log(inst);

