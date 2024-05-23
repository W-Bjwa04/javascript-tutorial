// nesting the objects in the js 

let circle = new Object()

circle.color="Red"
circle.radius = 10.20

console.log(circle);

// this is called an singelton object 

let square = {}

square.length = 10
square.width=20

console.log(square);

// this is called as an non singelton object 

// object nesting 

let name={
    fullname:{
        userName:{
            firstName:"Waleed",
            lastName:"Bajwa"
        }
    }
}

console.log(name.fullname.userName)

// combining the objects 

let obj1 = {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}

// by using assign 

/*
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // Expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget === target);
    // Expected output: true
*/

let obj3 = Object.assign({},obj1,obj2)
console.log(obj3);


// by using spreading 

let obj4 = {5:'e',6:'f'}

let obj5 = {...obj1,...obj2,...obj4}
console.log(obj5);  


// if the data is like in the json format coming from an api 

let data = [
    {
        name:'Waleed',
        city:'Lahore'
    },
    {
        name:'Hussnain',
        city:'Rawalpindi'
    },
    {   
        name:'Touheed',
        city:'Islamabad'
    }
]

console.log(`Name : ${data[0].name}\nCity : ${data[0].city}`);


// some common methods on the objects 

console.log(Object.keys(circle));
console.log(Object.values(circle));


console.log(Object.entries(square));  // returns a 2d array of key values pairs 

// [ [ 'length', 10 ], [ 'width', 20 ] ]

// asking for an attribute exits or not 

console.log(circle.hasOwnProperty('radius'));  //true

