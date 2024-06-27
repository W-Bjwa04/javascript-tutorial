// hoisting is the terminology for the decleration of the functions in the javascript 

// one way of declearing functions in the js 

function addOne(number){      // this is called as the function decleration 
    return number+1
}  

// another way of declearing the functions 

// is actually assing function to an expression 

const addTwo = function(number){
    return number+2
}


// now what is the difference between these two decleration types 

// is the call of the function 

// in decleration you can call the function before declearation

console.log(addOne(1));


// while in assignment you cannot call the function before the decleartion 

console.log(addTwo(2));