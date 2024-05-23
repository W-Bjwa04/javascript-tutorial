/*
Demontration of the object de structuring in the js 
*/

var name = "Waleed "  // global 

var flag = true

if (flag){
    var name = "Bajwa"   // local 

    var city = "lahore"
}

console.log(name)

console.log(city);



let name1 = "Zain "


if (flag){
    let name1 = "Bajwa"
}

console.log(name1);  //Zain 

// let has the block level scope 