// rest operator in the js 

// rest opeartors take as many as requried arguments passed to the function 
// makes an array of the arguments passed to the function 


function myfunc1(...number){
    return (number)
}

// testing the rest function 

console.log(myfunc1(23,24,25,26,27,28,29));


// sum of all the numbers passed 

function myfunc2(...number){
    let sum = 0
    for (const num of number){
        sum+=num
    }
    return sum
}

let sum = myfunc2(1,2,3,4,5,6,7,8,9,10)

console.log(`Sum of the numbers is ${sum}`);

// passing objects into the functions 

const user = {
    username:"Waleed",
    userid:"1234"
}

function getUserDetails(user){
    return `UserId : ${user.userid} \nUsername : ${user.username}`
}

console.log(getUserDetails(user));


// passing an array to the function 

function printArray(getArray){
    console.log(getArray[2]);
}

const myArrays = [1,2,3,4,5,6,7,8,9,10]

printArray(myArrays)