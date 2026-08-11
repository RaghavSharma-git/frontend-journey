const accountId = 144332;
let accountemail="dhhdenenejj@gmail.com";
var accountPassword = "2323443";
accountCity = "delhi";

// accountId = 200; // This will cause an error because accountId is a constant

accountemail = "dhfgfgdhddh@gmail.com"; // This is valid because accountemail is declared with let
accountPassword = "366646473";
accountCity = "punjab";
let accountState;

console.log(accountId);

console.table({accountId, accountemail, accountPassword, accountCity, accountState});


//Note- do not use var beacause of issue in block and functional scope. use let and const instead of var.
