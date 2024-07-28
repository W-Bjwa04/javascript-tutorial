// Demonstration of promises in JS

// Creation of a new promise
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async Task Is Completed');
        resolve();
    }, 1000);
});

// Consume the promise
promiseOne.then(function() {  // by default one parameter is present 
    console.log('Promise one is completed');
});

// Another way to do this
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async Task 2 Is Completed');
        resolve();
    }, 1000);
}).then(function() {
    console.log('Promise Two Is Consumed');
});

// Passing data to the promise after the task is completed 
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            name: "Waleed Shahid",
            email: "waleedshahid123ml@gmail.com"
        });
    }, 1000);
});

// Get the data from promise if it is fulfilled
promiseThree.then(function(user) {   // by default the object passed in the resolve is 
    // passed as a default argument
    console.log(user);
});

// Demonstration of promise chaining
const promiseFour = new Promise(function(resolve, reject) {
    let internetAvailable = true;
    setTimeout(function() {
        if (internetAvailable) {
            resolve({
                name: "Bajwa Enterprises",
                location: "Lahore"
            });
        } else {
            reject("Internet Not Available");
        }
    }, 1000);
}).then(function(user) {
    console.log(user.name);
    return user.location;
}).then(function(location) {
    console.log(location);
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either fulfilled or not");
});

// Using async/await to consume the promise as compared to then and catch
const promiseFive = new Promise(function(resolve, reject) {
    let error = false;
    setTimeout(function() {
        if (!error) {
            resolve({
                carName: "Mehran",
                price: "530000"
            });
        } else {
            reject("Car has been sold");
        }
    }, 1000);
});

// Resolve the promise
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// Using async/await to call the API data
async function callAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();  // Convert the response to JSON
        console.log(data);
    } catch (error) {
        console.log("ERROR Occurred", error);
    }
}

callAPI();

// Using the then syntax
fetch('https://jsonplaceholder.typicode.com/todos/1')  // it returns a promise
.then(function(response) {
    return response.json();  // Convert the response to JSON
})
.then(function(data) {
    console.log(data);  // Use console.log to display the data
})
.catch(function(error) {
    console.log("ERROR Occurred", error);
});
