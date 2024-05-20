/*
Arrays in JavaScript 
*/


let arr1 = [1,2,3,4,5,6,7,8,true,'Waleed']
console.log(arr1);


// common operations on the arrays 

/*
You have two ways to create JavaScript Arrays: using the Array constructor or the shorthand array literal syntax, which is just square brackets. Arrays are flexible in size, so they can grow or shrink as you add or remove elements.
*/


let arr2 = [1,2,3,4,5]
// push an element into the array
console.log(`Before ${arr2}`); 
arr2.push(6)
console.log(`After ${arr2}`);


//*********************************************************** */

// All the operations on the strings always returns a copy of new string 

// let nameObject = new String("Waleed");
// nameObject.toUpperCase();

// console.log(nameObject);

//********************************************************************* */

//pop element 

console.log(`Before ${arr2}`); 
arr2.pop()
console.log(`After ${arr2}`);


//push at start element 

console.log(`Before ${arr2}`); 
arr2.unshift(10)
console.log(`After ${arr2}`);

//pop at start element 

console.log(`Before ${arr2}`); 
arr2.shift()
console.log(`After ${arr2}`);


//convert array to the string 
console.log(`Before : ${(arr2)}`); 
console.log(`Before type : ${typeof(arr2)}`); 
console.log(`After ${(arr2.join())}`);
console.log(`After ${typeof(arr2.join())}`);

// searching and findind index of element 
let carNames = ['Mehran','Corolla','Civic','City','Santro']

console.log(carNames.includes('City'));  //true

// finding the index 

console.log(carNames.indexOf('Santro'));  //4


//Slicing And Splicing 

// Slicing Does Not Affect The Orignal Array 

// Splicing Also Include Last Index And Cut Off The Orignal Array 
console.log("\nBefore Slice : ", carNames);
console.log(carNames.slice(1,3)); //slice 
console.log("\nAfter Slice : ", carNames);


console.log("\nBefore Splice : ", carNames);
console.log(carNames.splice(1,3)); //splice
console.log("\nAfter Splice : ", carNames);
