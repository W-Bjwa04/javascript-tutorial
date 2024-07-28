// filters in the js are used for make sure that the conditions are valid inside the for each loop

const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]


const greaterNumbers = numberArray.filter( (num) => (num>10))

console.log(greaterNumbers);


// using explicit return statement 


const desiredNumbers = numberArray.filter((num)=>{
    return (num>5)
})

console.log(desiredNumbers);



// using the filter on the array of the objects 


const carObjectArrays = [
    {
        name:"Mehran",
        model:"2012",
        enginesize:"800cc"
    },
    {
        name:"Alto",
        model:"2012",
        enginesize:"1000cc"
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


const cars = carObjectArrays.filter((car)=>{   // only get those cars whose model year is 2012
    return(car.model==='2012')
})

console.log(cars);