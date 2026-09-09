// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

// for (const element of object) {
    // console.log(element);
    
    
// }

const greeting = "Hello World";

for(const greet of greeting) {
    console.log(` Each char is ${greet}`);

}

// maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":- ", value);
}

const myObject = {
    game1: 'Valorant',
    game2: 'Counter-Strike',
    game3 : 'Dota 2'
}

for(const [key,value] of myObject) {
    console.log(key,":- ", value);
    
}

