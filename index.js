
// new variable called randomNumber1 (between 0 & 0.9999999)
let randomNumber1 = Math.random();
// set the value of this variable to a random number between 0 and 6
randomNumber1 = randomNumber1 * 6; 

// Round randomNumber1 down to the nearest whole number because we are shooting dice (there are no decimals lol).
// Must add 1 because without it, randomNumber1 will always be between 0 and 5 and will never hit 6; this makes no sense
// because there is no '0' value on a die and there should be a possibility that a die can be 6.
randomNumber1 = Math.floor(randomNumber1) + 1;

console.log('randomNumber1 = ', randomNumber1);