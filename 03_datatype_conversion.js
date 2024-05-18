/*
Demonstrate the conversion between the different datatypes 
*/


let score1 = 33

console.log(score1*100/50)

let score2="23abc"


// convert this score to a number 
score2 = Number(score2)

// the nan has the data type number 
// it is a special type that does not equal to anything 
console.log(typeof(score2))

if (isNaN(score2)){
    console.log("The Score Is Invalid ")
}
else{
    console.log(score2*100/50)
}


// if you convert the null value 

let score3 = null

score3 = Number(score3)

console.log(score3);   // 0 

// conversion to the boolean data types 

let isLoggedIn = "1"

console.log(Boolean(isLoggedIn));  //true 

isLoggedIn=""
console.log(Boolean(isLoggedIn));  //false 


isLoggedIn=" "
console.log(Boolean(isLoggedIn));  // true


isLoggedIn="waleed"
console.log(Boolean(isLoggedIn));  // true

// note 

/*
 1 => true 0 => false 

 "" => false   "any-string "=> true
*/


// conversion to the strings 

let myNumber = null
console.log(typeof (String(myNumber)));

myNumber = NaN
console.log(typeof (String(myNumber)));

myNumber = undefined
console.log(typeof (String(myNumber)));




 
