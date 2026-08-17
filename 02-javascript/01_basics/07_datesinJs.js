// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23); // Year, Month (0-indexed), Day
let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());

// timestamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let myDate2 = new Date()
console.log(myDate2);
console.log(myDate2.getMonth());
console.log(myDate2.getDay());

// `${newDate.getDay()} and the time`

myDate2.toLocaleString('default',{
    weekday:"long",
    
})



