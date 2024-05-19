/*
Two Datatypes exits in the Javascript 
1.Primitive (pass by value )
2. Non- Primitive (pass by reference)

Two Types of Memory Exits In The JavaScript 
1. Stack Memory 
2. Heap Memory 

Primitive datatypes exits in the stack memory and a copy of this memory is allocted 
whenever it is called 

Non- Primitive datatypes exits in the heap memory and a reference of this memory is given 
whenever it is called 
*/

// demonstration of the stack memory 
let myEmail = "waleedshahid123ml@gmail.com"

let mySecondaryEmail = myEmail

mySecondaryEmail="waleedbajwa66@gmail.com"

console.log("Primary Email : "+ myEmail)
console.log("Secondary Email : "+mySecondaryEmail);

// demonstration of the heap memory 

let arr1 = [1,2,3]
let arr2=arr1
arr2[0]=21
// changes also reflect into the orignal array 
console.log("Array 1 : "+arr1)
console.log("Array 2 : "+arr2)
