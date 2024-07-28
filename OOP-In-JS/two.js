// in the javacript every thing is an function becuase by default javascript has an prototypal behaviour

function demo(num) {
  return num * 5;
}

console.log(5);

// using function as an object

demo.power = 2;

console.log(demo.power);

console.log(demo.prototype); // returns the properties of the function but in this case there are not properties of this function
// bacuase we directly return the value with declearing anything inside the function

// more demontration

function demo2(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

console.log(demo2.prototype);

// inject a new function to an existing function

function demo3(name, price) {
  this.name = name;
  this.price = price;
}

let chai = demo3("chai", 230);
let tea = demo3("tea", 500);

// injecting new function

demo3.prototype.drinkMe = function () {
  console.log(`HEY I AM ${this.name}. DRINK ME.`);
};

//chai.drinkMe()     // we got an error becuase the drinkMe does not bind to the chai and tea

// here comes the work of the new keyword

chai = new demo3("chai", 230);
tea = new demo3("tea", 500);

chai.drinkMe();
tea.drinkMe();

/*
Importance of the new keyword 
 waht happens behind the scenes when the new keyword is used :

 A new object is created: The new keyword initiates the creation of a new javaScript 
 Object 

 A prototype is linked: The newly created object gets linked to the prototype 
 property of the constructor function. This mean that it has access to properties 
 and methods defined on the constructor's prototype


 The Constructor is called: The constructor function is called with the specified arguments 
 and this is bound to the newly created object. If no explicit return value is specified from 
 the constructor. Javascript assume this, the newly created object, to be the intended return 
 value.

 The new object is returned: After the constructor function has been called, if it does not return a 
 non-primitive value (object, array, function, etc), the newly created object to be the intended 
 return value 
 
 The new object is returned: After the constrcutor function has been called, if it does not return 
 a non-primitive value (object, array, function. etc.), the newly created object is returned

*/


// Protptype Hierarchy 


let myArr = [1,2,3,4]

let myStr = "Waleed"

let myObj = {
    name:"Waleed",
    gender:"Male",
    age:19,

    showDetails:function(){
      console.log(`Name : ${this.name} Gender : ${this.gender}   Age : ${this.age}`);
    }
}


// now inserting an new Function to the Obecjt Prototype 

Object.prototype.sayHello=()=>{
  console.log(`Hey I am Waleed`);
}

// as the object is the parent of all the primitve ans non-primitve so this function is accessilbe to all

myArr.sayHello()

myStr.sayHello()

myObj.sayHello()



// but now adding a function to the prototype of the array only 

Array.prototype.sayGoodBye = ()=>{
  console.log(`Good Bye!!!!!`);
}

// accessible from array but not from other (Obejct)

myArr.sayGoodBye()

// myStr.sayGoodBye()   // got an error of undefined function 





// inheritence 


const car = {       //global car object
  wheels:4,
  gasolineEngine:true
}

const corolla = {
  absBrake: true,
  powerSteering : "Electronic"
}

const city = {
  absBrake:false,
  powerSteering: "Hydrualic"
}



// console.log(car);
// console.log(corolla);
// console.log(city);



// now adding the properties of car to the both corolla and city becuase these are the childs of the car 
// This is called as an inheritence 



// we can also add this during the creation of the child obejct just like below 

/*

const city = {
  absBrake:false,
  powerSteering: "Hydrualic",

  this.__proto__: car
}

*/


// another way 


corolla.__proto__=car
city.__proto__=car

// modren sybntax of doing this 


Object.setPrototypeOf(corolla,car)
Object.setPrototypeOf(city,car)