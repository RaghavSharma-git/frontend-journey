const user = {
    username: "raghav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.signedIn);
// console.log(user.getUserDetails());

function User(username, loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this

}
const userOne = new User("histesh",12,true)
const userTwo = new User("chaiaurcode",16,false)

console.log(userTwo.loginCount);
console.log(userOne.constructor);
