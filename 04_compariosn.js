


// comparison of different datatypes of the javascript 

let num1 = null
let num2 = 0


console.log(num1==num2);  //false


console.log(num1>=num2);  //true 


// The equaility operator return false on comparing the null and 0 
// as it does not convert the null to zero before comparison 


// The comparision operator first convert the null to zero then compare it 
// so it gives the true result 


let num3="3"
let num4 = 3

console.log(num3==num4);   // true 


// one strict check also exits in the javascript 

let num5 = 12
let num6 = "12"

// the === check also ensure the datatype of the data to be compared 

console.log(num5===num6);  // false 