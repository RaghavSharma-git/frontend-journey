// Immediately Invoked Function Expression (IIFE)

(function chai () {
    console.log(`Db is connected`);
})(); // ; is important to end immediately invoked function expression

//()function chai / () exicution

((name) => {
    console.log(` DB CONNECTED TWO ${name}`);
    
})(`Raghav`) // passing argument to IIFE
