
// new variable called randomNumber1 (between 0 & 0.9999999)
let randomNumber1 = Math.random();
// set the value of this variable to a random number between 0 and 6
randomNumber1 = randomNumber1 * 6; 

// Round randomNumber1 down to the nearest whole number because we are shooting dice (there are no decimals lol).
// Must add 1 because without it, randomNumber1 will always be between 0 and 5 and will never hit 6; this makes no sense
// because there is no '0' value on a die and there should be a possibility that a die can be 6.
randomNumber1 = Math.floor(randomNumber1) + 1;

console.log('randomNumber1 = ', randomNumber1);

// Use randomNumber1 to pick out a random dice image between dice1.png to dice 6.png 
// then place this image inside the left <img> element.

// retrieve the image of the left die
let leftImage = document.querySelectorAll(".img1")[0];
console.log('leftImage = ', leftImage);

// set the image on the left to the image of the die wih ramdomNumber1 number of dots on it
leftImage.setAttribute("src", `./images/dice${randomNumber1}.png`);