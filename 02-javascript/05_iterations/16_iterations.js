// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5 ){
        console.log("5 is best number");
    }
        
    console.log(element);
    
}

// nested for loop
for(let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10;j++){
        // console.log(`Inner loop value: ${j}`);
        console.log(i + '*' + j + '='+ i*j);
        
        
    }
}

let myArray = ["flash", "superman", "batman",]

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

 // break and continue

for(let i = 1; i <=10;i++){
    if(i == 8){
        console.log("Number 8 found!");
        break;
    }
else {
    if (i == 4){
        console.log("Skipping number 4");
        continue;
    }

}
console.log(i);
}


        
    
