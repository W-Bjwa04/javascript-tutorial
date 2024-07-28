// for each loop works mainly for the array
//it demands a call back function for its use 


carName = ['Mehran','Corolla','Cultus','Margalla','Picanto']


// the call back functions does not have a name 
// it automatically gets the arrays values as a parameter 
carName.forEach( function (car)  {
    console.log(car);
})


// using the arrow functions 


carName.forEach( (item) => {
    console.log(`Car Name : ${item}`);
})


// declearing an outside function for the calling 

function printMe(item){
    console.log(item);
}

carName.forEach(printMe)  // dont execute the function using () but only provide the reference of the desired function 


// the for each loop des not only have the item of the array in the parameter but it also has the index and the complete 
// array list 


carName.forEach ( (item,index,list) =>{
    console.log(`Item ${item} : index ${index} : list [${list}]`);
})



// arrays of the objects 


const carObjectArrays = [
    {
        name:"Mehran",
        model:"2012",
        enginesize:"800cc"
    },
    {
        name:"Vitz",
        model:"2009",
        enginesize:"1000cc"
    },
    {
        name:"Lancer",
        model:"2005",
        enginesize:"1300cc"
    }
]


function printObject(object){
    for (const key in object) {
       console.log(`key ${key} , Value : ${object[key]}`);
    }
}

carObjectArrays.forEach(printObject)   // passing the reference of the function to the array 