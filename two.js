// Object Literals 


const user = {
    name:"Waleed",
    city:"Lahore",

    showDetails:function(){
        console.log(`Name ${this.name} \n City : ${this.city}`);
    }
} 


// console.log(user);
// user.showDetails();


// so the user here is an object literal 


// constrcutor function 


// the new keyword is an constructor function beacuase
// it allows to create multiple instances of an sinlge object 

// lets assume if we want to create an new user we have to do all the same things again



// contrutor for the User Object 

function User(name,city,isLoggedIn){

    this.name = name
    this.city = city
    this.isLoggedIn = isLoggedIn

    return this
}

let userOne = User("Waleed","Lahore",false)


 // console.log(userOne.city);

const userTwo = User("Waleed","Layyah",true)

  // console.log(userOne.city);  

// userone got altered becuase of not using new keyword


// working of new keyword 

/*
The new keyword first creates an empty object in the memory. 
Then pack all the passed arguments to the memory where the object is created. 
and then finally return the object created. 

*/

userOne = new User("Waleed","Lahore",false)

// instance of operator 

console.log(userOne instanceof User);   // return true


// constrctuor 

console.log(userOne.constructor);