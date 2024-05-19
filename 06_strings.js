// strings common operations in the javascript 

let firstName = "Waleed"
let lastName = " Shahid"

console.log(firstName+lastName);  
// very old pratice of concatinating the strings 

// use the string interpolation instead of this 

console.log(`My first Name Is ${firstName} and my last name is ${lastName}`);

// using the objects of the string 

let myEmailID = new String('waleedshahid123ml@gmail.com')

// the strings in the javascript are the objects 

console.log(myEmailID);

console.log(typeof(myEmailID))


// primitive strings are immutable 

let demoString = "Waleed"
console.log((`Hi ${demoString}`))

// now printing the orignal string 
console.log(`Orignal String : ${demoString}`);

// the String object is mutable 
myEmailID.toUpperCase()

console.log((`Email Id In Capital ${myEmailID}`))

// now seeing the origanl string object 

console.log(`Orignal String Is ${myEmailID}`);


// string use the same value for the twio same literals 

let st1 = "Hello"
let st2 = "Hello"

console.log(st1===st2);  // true

/*
How JavaScript handles string literals. When you create string literals in JavaScript, the language optimizes memory usage by reusing existing strings that have the same value. This is known as string interning.
*/

// the string object creates the two different strings 

let str1 = new String("hello");
let str2 = new String("hello");

console.log(str1 === str2); // false
console.log(str1 == str2);  // false
console.log(str1 === "hello"); // false
console.log(typeof str1); // "object"
console.log(typeof str2); // "object"


// getting the prototype of the string 

console.log(str2.__proto__);

// searchig in the string 

console.log((myEmailID.includes('waleed')));  // true 

// split method 

console.log(typeof(myEmailID.split('@')));  // returns a array of the splited strings

