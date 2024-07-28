// inheritence in the javascript 


class User {

    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
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


const teacher = new Teacher('demo','demo@example.com',"1234")

teacher.addNewCourse()

teacher.logMe()

console.log(teacher instanceof Teacher);  //true
console.log(teacher instanceof User);     //true
console.log(teacher instanceof Object);   //true



const user = new User("Waleed")


user.addNewCourse()   // give error 



