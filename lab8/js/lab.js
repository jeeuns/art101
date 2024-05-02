// Author: Regina Kim <rejikim@ucsc.edu>
// Date: 5/2/24

function double(x) {
  return x * 2;
}

//test function
console.log("2 x 2 is: ", double(2));
console.log("5 x 2 is: ", double(5));

//define the array
var array = [1, 2, 3, 4, 5, 6];
console.log("My Array: ", array);

//doubles everything in the array
var result = array.map(double);
console.log("Doubles the value of the array: ", result);

//squares x
var result = array.map(function(x){
  return x ** 2;
});

console.log("Array squared: ", result);

