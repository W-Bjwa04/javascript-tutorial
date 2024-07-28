// short hand notation for the if else is 



const balance = 1000



if (balance>500) console.log(`Your Account Have Too Much  Balance`);


let marks = 90

function gardeCalculator(marks){

    if(marks >=85){
        console.log(`A Grade`);
    } else if(marks>=80){
        console.log(`A- Grade`);
    } else if(marks>=75){
        console.log(`Grade B+`);
    } else if(marks>=70){
        console.log(`Grade B-`);
    } else if(marks>=65){
        console.log(`Garde C`);
    } else if(marks>=60){
        console.log(`Grade D `);
    } else if(marks>=50){
        console.log(`Grade E`);
    } else{
        console.log(`Grade F`);
    }
}


gardeCalculator(marks)


// && operator 

const flag1 = true
let flag2 = true


if(flag1 && flag2){
    console.log(`Both Are True `);
}

flag2=false

if(flag1 || flag2){
    console.log(`Either One Or Both Are True`);
}


// switch statement 

const month = 3

switch (month){
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`Febrauary`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;
   
    default:
        console.log(`Nothing to match `);
}