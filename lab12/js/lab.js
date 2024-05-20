// Author: Regina Kim
// Date: 5/20/24

function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  } else if (mod == 1) {
    return "Ravenclaw"
  } else if (mod == 2) {
    return "Slytherin"
  } else if (mod == 3) {
    return "Hufflepuff"
  }

}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

})