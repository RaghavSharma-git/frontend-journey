class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}raghav@123`
    }

    set password(value){
        this._password = value
    }
}

const raghav = new User("raghav@.ai","1234")
console.log(raghav.email);
console.log(raghav.password);

