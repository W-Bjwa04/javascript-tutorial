// demonstratio of the this and the call methods 


function setUserName(username){

    // complex DB calls 

    this.username=username
}

function createUser(username,email,password){
    setUserName.call(this,username)  // the call method call the setUserName and holds the
                            // execution context of the setUserName

    this.email=email
    this.password=password

    
}


const userOne =new createUser("Waleed","waleedshahid123ml@gmail.com",123)

console.log(userOne);


