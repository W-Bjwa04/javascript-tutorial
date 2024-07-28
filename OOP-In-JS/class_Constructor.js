


class User{

    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    
    // encrypt Password

    encryptPassword(){
        return `${this.password}abc$@000*&`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}


const userOne = new User("waleed","waleed@facebook.com","123")

console.log(userOne);

console.log(userOne.changeUserName());



// now how all of this works behind the scene demo


function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}


// adding a fucntion to the prototype of this user 

user.prototype.encryptPass=function(){
    return `${this.password}abc`
}

// thorugh an new syntax 

user.prototype.changeUser=()=> {
    return`${this.username.toUpperCase()}`
}


const userTwo = new user("admin","admin@microsoft.com","123")

console.log(userTwo);

console.log(userTwo.encryptPass());