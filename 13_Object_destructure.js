/*
Demontration of the object de structuring in the js 
*/


let obj1 = {
    name:"Waleed Shahid",
    gender: "male",
    city: "Lahore"
}


// if i want to access name then i can do this thing 

console.log(obj1.name);

// if i want the name multiple times then it is prefered that whether 
// should i store the name in a varaible or using the object destructuring 


// object destructuring 

let {name:fullname} = obj1

//********* */

console.log(fullname);



// all the apis are json format 

// random user api 