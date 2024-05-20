/*

Demonstration of storing date and time in the js
*/


let myDate = new Date()

console.log(myDate);  

console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());



// Custom Dates In The JS 

let customDate = new Date(2023,0,23)

console.log(customDate.toLocaleDateString());

// Anoter Format 

let stringDate = "2024-01-12"  //YYYY-MM-DD
console.log(new Date(stringDate).toLocaleDateString());

// timestamp 

let myTimeStamp = Date.now()

console.log(myTimeStamp);  // ms from Jan 01,1970

// compare the date using this time stamp 

let dateOne = new Date("2004-08-27")
let dateTwo = new Date("2004-08-27")

console.log(dateOne.getTime()===dateTwo.getTime());  //true


// Printing Of The Date In The Custom Format 

const DOB = new Date("2004-08-27")

let day = DOB.getDay()
let month = DOB.getMonth() + 1 // as the month start from 0 in the date object 
let year = DOB.getFullYear()
let date = DOB.getDate()
// using the string interpolation 

console.log(`According to my date of birth the day is ${day},the date is ${date}, the month is ${month}, and the year is ${year}`);


// another way of modifying the date is 

let newDate = new Date("2024-05-23")

newDate=newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    month:"long",
    year:"numeric"
})

console.log(newDate);