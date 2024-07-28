// getOwnPropertyDescriptor

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);



// new object 

const car = {
    name:"corolla",
    type:"sedan",
    engine:"2NZ-FE"
}


console.log(Object.getOwnPropertyDescriptor(car,"engine"));