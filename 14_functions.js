// demonstration of the functions in the js 


function sayMyName(){
    console.log("Hi I am Waleed");
}


console.log(sayMyName);   // this is the function reference in the heap 


// this is the function execution in the js

sayMyName()


// paramerters and arguments 

function func1(name){
    return `Hello ${name}`
}

let greet =func1("Waleed")
console.log(greet);


// if the arguments are not given then by default it will be 
// then to that argument undefined is passed 

let greet2 = func1()

console.log(greet2);


// minimum value defined for a parameter in the function 

function func2(name= "admin"){     // default value for the name is "admin"
    console.log(`Hello? ${name} Good to see you `);
}


// calling func2 without any argument so test the default value 

func2()

// calling func2 with the parameter 
func2("Waleed Shahid") 


