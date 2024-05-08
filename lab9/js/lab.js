/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Regina Kim
   Date: 5/8/2024
*/

$(document).ready(function() {

    // add button to challenge section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

  // add a click listener to the challenge button
  $(document).on("click", "#button-challenge",function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
  });

  $("#problems").append("<button id='button-problems'>Make Special</button>");

  $(document).on("click", "#button-problems",function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
  });

  $("#results").append("<button id='button-results'>Make Special</button>");

  $(document).on("click", "#button-results",function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
  });

});