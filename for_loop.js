// for loop in the javascript 



for (let i=0; i<=10; i++){
    console.log(i);
}   


// loop on an array 


let myArray = ['suzuki','honda','toyota','kia','hyundai']


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`Car Companies In Pakistan Are ${element}`);    
}


// break and continue keywords 


for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log(`Yes The Number ${index} is desired`);
        break
    } else{
        console.log(`Desired Number Not Coming`);
        continue
        console.log(`Ok`);  // does not print the becuase the break and   
    }                       //and the continue keywords stops the current 
                            // iteration
}

// do - while loop in the js 

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);




// arrays or objects specific loops 


let myArr = [1,2,3,4,5,6,7]

for (const num of myArr) {
    console.log(`Number is ${num}`);    
}


let myName = "Waleed Shahid"

for (const word of myName) {
        console.log(`Word is ${word}`);
}