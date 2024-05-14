/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Regina Kim
   Date: 2024
*/

function generateRandomText() {
  const text = "The stars whispered secrets of the universe, casting a celestial glow on the midnight horizon. As the night deepened, the gentle hum of the cosmos could be felt in the cool breeze, while the moonlight danced gracefully on the surface of the tranquil lake. Beneath the vast expanse of the sky, the world seemed to pause, immersed in the serene beauty of the nocturnal symphony.";
  const min = 5;
  const max = 50;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});