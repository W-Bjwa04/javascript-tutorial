


var myName = "Waleed "

if (true){
    var myName = "Java"
    console.log(myName)
}

console.log(myName)


var fullName = "Waleed Shahid"

if (true){
    let fullName = "Waleed Bajwa"
    console.log(fullName)
}

console.log(fullName)


let temperature = "20avc"

// convert degree to the radian 

let tempratureInRadian;

temperature = Number(temperature)

if (!(Number.isNaN(temperature))){
    tempratureInRadian = (Math.PI/180)*temperature
    console.log(tempratureInRadian);
}
else{
    console.log("Invalid Temperature Received");
}

// check the type of the variable 
console.log(typeof temperature);


// check whether a string is empty or not 
// using conversion operation 

let myString1 = " "
let myString2 = ""

if (Boolean(myString1)===true){
    console.log("Not an Empty String");
}
else{
    console.log("Empty String");
}

let flag = true

console.log(String(flag))



console.log('0'==0)


// use of the symbol datatype 

let sym1 = Symbol('123')
let sym2 = Symbol('123')

// comparing both Symbols including their content 

console.log(sym1===sym2);  // false 

// primitive and non-primitive data types in js 

// non - primitive

/*
1. arrays 
2. objects 
3. functions 
*/

// decleare a function 
const greet = function(name){
    console.log(`Hello ${name}`);
}

greet("Waleed")

// arrays 

const myArr = [1,2,3,4]
console.log(myArr);

// objects 

const employee = {
    "name":"Waleed Shahid",
    "age":19,
    "gender":'M'
}
console.log(employee);


// treating strings as a object 

let stringObject = new String("Waleed")

console.log(stringObject.charAt(0));

console.log(stringObject.length);


// string methods returns a new string 

let stringObject2 = stringObject
stringObject2=stringObject2.toLowerCase()
console.log(typeof stringObject2)
console.log(stringObject);

//string slicing 

let email = "waleedshahis123ml@gmail.com"
// check the type of mail 

console.log(String(email).substring(email.indexOf("@")+1,email.indexOf(".")));


// Numbers in the javascript 


let num1 = new Number(100)
console.log(num1);


// common methods of the Numbers Class 

// toFixed 

console.log(num1.toFixed(2));   // 2 point decimal 


// random number in the js 

const min = 10
const max = 20

let randomNumber =Math.floor(Math.random()*(max-min+1)+min)


console.log(randomNumber);