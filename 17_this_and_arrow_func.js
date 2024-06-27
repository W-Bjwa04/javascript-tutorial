// demonstration of the this 

// this refers to the current context or the current scope 

const user = {
    name:"Waleed",
    email:"waleedbajwa66@gmail.com",
    skills:function(){
        console.log(`${this.name} is an full-stack developer and AI Expert `);
        // calling this here tells what is present in the current context or current scope 
        console.log(this);
    }   
}

user.skills()


// and if you call the this here then it shows an empty object
// becuase we are in the node js environment and in node js the global object is an empty object 

console.log(this);


// but if you are using the js in the browser environment then the global object is the window 



// using of this in the function 


const myfunc1 = function(){
    console.log(this);
}

myfunc1()

const myfunc2 = function(){
    let username = "Waleed"
    console.log(this.username);  // gives undefined becuase the this cannot be use inside the function 
}

myfunc2()

// declearing an arrow function 


const myfunc3 = () => {
    let username="Bajwa"
    console.log(this.username);   //again undefined
}

myfunc3()



// implicit and the explicit return statements in the js 

// if you have an single line of the function  or the return statment is only the statement then its prefer to use the implicit return


const addTwoNum=(num1,num2) => (num1+num2)


console.log(addTwoNum(1,2));

// returing an object 

const objFunc = () => ({username:"Waleed",email:"waleedbajwa66@gmail.com"})

console.log(objFunc());



// but if you use the {} (curly braces) in the function deleatration then you will have to use the 
// the explicit return statement




