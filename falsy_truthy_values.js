//there are some values consider as falsy values 

// 0 , -0 , false , null, undefined , nan, "", BigInt 0n


// some truthy values are 

// [], true, " ", 1 , {}, function(){}



// checking an object is empty or not 


const myObj = {
    name:"Waleed"
}


if(Object.keys(myObj).length!=0){    
    console.log("Object Is Not Empty ");
} else {
    console.log("Object Is Empty ");
}


// Nullish Coalescing Operator ?? null : undefined 

// mainly used when the data is comign from the database 

/*
The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand

*/


// demonstaration 

// data coming from the database 

let myName = "Waleed "
let myOperator =  myName ?? null     


// as name is not null so its returns the left hand side value
console.log(myOperator);  

// again data from the database 

myName = null

myOperator =  myName ?? "Empty Name"

console.log(myOperator);  // Empty Name



// ternery operators are different from the nullish colaising operators 



// ternery operator 


// condition ? true : false 



let val1 = 5
let val2 = 7 

let answer = (val1 < val2) ? (`first value is smaller `) : (`First Value Is Greater`)

console.log(answer);
