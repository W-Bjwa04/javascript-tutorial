class User {

    constructor(username){
        this.username=username
        this.userId=User.createId()
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }

    // userAlways assign a new Id 

    static createId(){
        return `${123}`
    }
}


// Teacher inherit User

class Teacher extends User{

    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addNewCourse(){
        console.log(`A new Course Is Added By Teacher`);
    }
}


// but this static method is not availbale for instances of the class
//like 

const userOne = new User("Waleed")

// userOne.createId()   //got an error 

console.log(userOne.userId);


// also the static property is not allowed to inherit to the child class
