// maps in the js are objects but they remember the inseetion order of the key value pair 


// two ways to create the maps using
// new Map()
// Map.set()



// new Map()   passing an array to the map


let myMap = new Map([
    ['Laptop',1000],
['Mobile',2000],
['Car',3000]])


console.log(myMap);



// using map.set()


let myMap2 = new Map()

myMap2.set('Suzuki','Cultus')
myMap2.set('Toyota','Yaris')
myMap2.set('Honda','Civic')

console.log(myMap2);



// iteration on the maps using the for of loop 


for (const [key,value] of  myMap2) {    // using array destructuring for getting seprate keys and values

    console.log(`Company => ${key} : Car => ${value}`);
    
}

// one catchy thing to remember is that the objects are not iterable just like the maps using the for of loop

let myObj = {
    mehran:'800cc',
    corolla:'1300cc',
    civic:'1800cc'
}

// for (const [key,value] of myObj) {  
  
//     console.log(key)        // create an error becuase objects are not iterable 
    
// }


for (const key of Object.keys(myObj)) {
    console.log(`Car => ${key}  : Engine Size ==> ${myObj[key]}`);
}

// the best one for the objects is the for in loop 

for (const key in myObj) {
    console.log(`key ${key} : value  ${myObj[key]}`);
}