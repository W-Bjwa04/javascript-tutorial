

class User {
    constructor(email,password){
        this.email=email
        this.password=password
    }


    // setters 

    set email(value){
        this._email=value
    }

    set password(value){
        this._password=value
    }

    // getters 

    get email(){
        return `${this._email.toUpperCase()}`
    }

    get password(){
        return `${this._password.toUpperCase()}WALEED#$%@`
    }
}


const userOne = new User("waleed@facebook.com","abc")


console.log(userOne.password);