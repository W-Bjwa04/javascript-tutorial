// Objects In the js //

// two ways to decleare the obejcts 
// by constructor 
// by string literal 

// the objects decleare by the constructor are the singelton 


// by construtor 

// -> Object.create(obj1)

// by string literal 


// the objects are the key value pairs and by default the keys are treated as strings but 
// no need to mention explicity this thing 
let obj2 = {
    name:"Waleed",
    email:"waleedshahid123ml@gmail.com",   
    city:"Lahore",
    "isLogIn":true
}

// ways to get the attributes of object 
// by dot operator 
// by obj1['name] method 


console.log(obj2.name);

console.log(obj2['isLogIn']);


// Using symbol data type as the key of an object 

let mySmb = Symbol('married')

let obj3 = {
    name:"Waleed",
    email:"waleedshahid123ml@gmail.com",   
    city:"Lahore",
    "isLogIn":true,
    [mySmb]:false  // using symbol as a key
} 

console.log(obj3[mySmb]);

// changing attribute value of an object 

obj3.name="Waleed Shahid"
console.log(obj3);

// but i we wont to lock the attributes of an obejct then freeze it 
Object.freeze(obj3)

obj3.name="Waleed"  // it would not raise an error but do not change the value of the name 
console.log(obj3);



obj2.greeting = function(){
    console.log(`Hello ${this.name}`);
}

console.log(obj2.greeting());


// using the function with the objects 

Person.greeting=function(){
    console.log(`Hello, My Name Is ${this.name}`);
}

Person.greeting()