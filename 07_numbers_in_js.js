/*
Numbers Objects Demonstration in the javascript 
*/

let withdraw= 100

// console.log(typeof withdraw);
//  if we strictly want that the deposit should be a number
// so that we make a object of the Number Class


let deposit = new Number(400)   

// console.log(deposit);
// console.log(typeof deposit);

// The Number Objects Gives Various Functions To Work With The Numbers 

// console.log(deposit.toFixed(2));   // tofix gives the fixed decimal points after the decimal 
                                    // effective for doing calculations 


// Convert Number Object To String And Enhanced Its Functionality 
// console.log(deposit.toString().length);  // 3

// to Precision Method 

/*
The toPrecision() method formats a number to a specified length.

A decimal point and nulls are added (if needed), to create the specified length.
*/

let num1 = 123.456 

// precise the number upto length of 4


// console.log(num1.toPrecision(4));   // 123.5


// localstring 

let num2 = 100000000

// console.log(num2.toLocaleString('en-PK'));    // 100,000,000
// convert the above number into the PK standard

//++++++++++++++++++++++++++++++++++Mathematics+++++++++++++++++++++++++++


// console.log(Math.abs(-4));
// console.log(Math.round(4.56));
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.8));

// Random Number 
console.log(Math.random());   // always between 0 and 1 


// to generate the random value between the range use the following formula 

const min = 10
const max = 20 

let randomNumber = Math.floor((Math.random()*(max-min+1))+min)  //  10 - 20 

