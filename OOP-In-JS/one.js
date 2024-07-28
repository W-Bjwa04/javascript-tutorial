

// setting up an constructor 


function Car(model,year,make,engineCapacity){
    this.model = model
    this.year = year
    this.make = make
    this.engineCapacity=engineCapacity

    this.drive = ()=>{
        console.log("I Have an ability to drive");
    }
}



let car1 = new Car(
    "corolla",
    2020,
    "Toyota",
    1300
)


console.log(car1);

car1.drive()

Car.prototype.stop=()=>{
    console.log("I have an ability to stop");
}

car1.stop()