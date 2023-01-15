var car = {
    "model":"1998 Mk4 Supra",
    "tyres":4,
    "addons":["NoS", "rollcage", "widebody kit"]
}
var carmodel = car.model
console.log(carmodel) //dot notation to extract data from object

var carmodel = car["model"] // bracket notation for properties with spaces
console.log(carmodel)


car.addons = ["NoS", "rollcage", "widebody kit","spoiler"] // updating objects
console.log(car.addons)

car.colour = "lunar blue" // can also use bracket
console.log(car.colour)

console.log(car) // updated and added list







// CHECKING IN OBJECTS
var dog = {
    "name" : "bruno",
    "age" : 4
};

function checkObj(Obj) { 
if (dog.hasOwnProperty(Obj)){
return dog[Obj] 
}else{return "not found"}
}
console.log(checkObj("name"))