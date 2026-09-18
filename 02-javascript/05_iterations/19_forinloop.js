const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js","cpp","py","rb"]

for(const key in programming) {

    console.log(key);
    console.log(programming[key]);
} 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('Fr',"France")


for (const key in map) {
    console.log(key);
    
}