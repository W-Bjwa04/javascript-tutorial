


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


// demonstration of the Array From 

let myString = "Pakistan"

let myArr1 = Array.from(myString)

console.log(myArr1);

myArr1[0]="p"
console.log(myArr1);
console.log(myString);


let var1 = [1,2,3,4]
let var2 = "6789"

let var3 = (Array.of(Array.from(var1),Array.from(var2))).flat(Infinity)
console.log(var3);


// demonstration of the symbols in the js 

const symbol1 = Symbol("id")


// objects 

const Person = {
    name:"Waleed Shahid",
    age:19,
    gender:"Male",
    loggedInDays:['Monday','Tuesday','Friday'],
    // now using the symbol as a key here 
    [symbol1]:"123876"

}

// ways to access the object properties 

console.log(Person.name);  // . is not to much praised to use to get the object Properties 

// the key value pair is praised for this purpose 

console.log(Person["name"]);


// for symbol dont use the "" strings literals 

console.log(Person[symbol1]);

// using the function with the objects 

Person.greeting=function(){
    console.log(`Hello, My Name Is ${this.name}`);
}

Person.greeting()


// nesting inside the objects 

const user= {
    username:{
        fullname:{
            firstname:"Waleed",
            lastname:"Shahid"
        }
    },
    age:19,
    gender:"M"

}


console.log(user.username.fullname.firstname);

// sometimes while reading the data from the api we use the typesafety 

console.log(user.username?.fullname?.lastname);

// combining the objects 

const obj1 = {
    1:'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}

// const obj4 = Object.assign({},obj1,obj2)

// console.log(obj4);
console.log(obj1);



// spreading of the objects 

const obj4 = {...obj1,...obj2}
console.log(obj4);


// array of objects 

const users =[
    {
        name:"Waleed",
        email:"waleed@gmail.com"
    },
    {
        name:"Zain",
        email:"zain@gmail.com"
    },
    {
        name:"Ayyan",
        email:"ayyan@gmail.com"
    }
]

//retreiving the objects

console.log(users[1].name);


// fetching all the keys of the objects 

console.log(Object.keys(users[1]));
console.log(Object.values(users[0]));

console.log(Object.entries(user));



// finding whether a given key exits in the object or not 

console.log(user.hasOwnProperty('gender'));  //true



// object destructuring in the js 

const {gender:G}=user   // extract gender from the user  and rename to the G

console.log(G);


// fetching data from api in json format 
// basics are done 