// Lab 6 - Arrays and Objects
// Author: Regina Kim
// Date: 4/26/24

//Variables
var myTransportation = ["Metro Bus", "Roommate Driving", "Airplane", "Uber"];

//object for my main ride
var myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "white",
  year: 2012,
  age: function(){
    return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransportation, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


