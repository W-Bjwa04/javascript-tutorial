// Primitive DataTypes In The JavaScript 

// 1. Number 
// 2. String 
// 3. Boolean 
// 4. BigInt 
// 5. null
// 6. undefined
// 7. Symbol


let regNO = 99

let stdName = "Waleed Shahid"

let isGraduated = false

let mobileNo = 3154283714n   // n converts it to the big interger 

let temperature =null // temperature not recorded yet means it is not empty 

let subjectMarks = undefined

let id = Symbol(123)

let anotherId = Symbol(123)


// the symbol makes the id and the another id different from each other although they have 
// the same value 

console.log(id === anotherId)  // false 

// Non Primitive Data Types 

// 1. Arrays 
// 2. Objects 
// 3. Functions 


let arr = [1,2,3,4,5,6]

// everything inside { } are objects as a big data type 

let obj = {
        name:"Bajwa",
        city:"Lahore"
    }


// functions 

let myfunc = function(){
    console.log(" I am a Function ")
}


// checking datatypes using the typeof operator 


console.table([typeof(regNO),typeof(stdName),typeof(id)])




