// Immediately Invoked Functions 

// are used to remoke the problems from the global scope pollution 



// such type of the functions that are called immdiately after their delceation 


(function () {
    console.log("Database is Connected");
})();    // ; is must to use here for the termination 




// More demonstration 

/*
IIFE stands for "Immediately Invoked Function Expression." It is a design pattern in JavaScript that helps avoid polluting the global scope by creating a local scope for variables and functions. Here's a breakdown of what this means:

Global Scope Pollution:

In JavaScript, variables and functions declared in the global scope (outside of any function) are accessible from anywhere in the code. This can lead to conflicts and unexpected behavior, especially in larger codebases or when integrating multiple scripts.
For example, if two different scripts declare a global variable with the same name, one script can inadvertently overwrite the variable of the other, leading to bugs.
Local Scope with IIFE:

An IIFE creates a local scope by defining a function and immediately executing it.
This local scope contains variables and functions that are not accessible from the outside, preventing them from conflicting with other parts of the code.


*/

(function() {
    // This is the local scope of the IIFE
    var localVar = "I'm a local variable";
    console.log(localVar); // Output: I'm a local variable
})();

// Trying to access localVar outside the IIFE will result in an error
console.log(localVar); // Uncaught ReferenceError: localVar is not defined
