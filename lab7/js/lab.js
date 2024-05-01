// Author: Regina Kim
// Date:5/1/2024

// Functions
function takeInput() {
  var userName = window.prompt("Please type your username: \n");
  console.log("username = ", userName);

  var nameArray = userName.split(" ");
  console.log("nameArray = ", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join(" ");
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//output
document.writeln("Here's your username: ", takeInput(), "</br>");

