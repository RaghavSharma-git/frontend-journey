const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
        
    },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();

    },1000)
    
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Chai",email:"chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"raghav" , pass:"1234" })
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

const username = promisefour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=>{
       console.log(username);
       
}).catch(function(error){
    console.log(error);
    
}
).finally(()=> console.log(" the promise is either resolved or rejected"))

const promisefive = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript" , pass:"1234" })
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});

async function consumePromisefive(){
    try{

        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromisefive()

async function getAllUsers(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
catch (error){
    
    console.log("E:,error");
    
};
}

getAllUsers()

fetch("")
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)