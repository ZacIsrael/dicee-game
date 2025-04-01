
// variable for left die #
let randomNumber1 = generateRandomNumForDie();

// variable for right die #
let randomNumber2 = generateRandomNumForDie();


// console.log('randomNumber1 = ', randomNumber1);

// Use randomNumber1 to pick out a random dice image between dice1.png to dice 6.png 
// then place this image inside the left <img> element.

// retrieve the image of the left die
// let leftImage = document.querySelectorAll(".img1")[0];
// console.log('leftImage = ', leftImage);

// set the image on the left to the image of the die wih ramdomNumber1 number of dots on it
// leftImage.setAttribute("src", `./images/dice${randomNumber1}.png`);

// retrieve the image of the right die
// let rightImage = document.querySelectorAll(".img2")[0];
// console.log('rightImage = ', rightImage);

// rightImage.setAttribute("src", `./images/dice${randomNumber2}.png`);

updateImageByClass(".img1", randomNumber1);
updateImageByClass(".img2", randomNumber2);

// generates a random # for a die
function generateRandomNumForDie(){
    // randomNumber1 (between 0 & 0.9999999)
    let n = Math.random();
    // set the value of this variable to a random number between 0 and 6
    n = n * 6; 
    // Round n down to the nearest whole number because we are shooting dice (there are no decimals lol).
    // Must add 1 because without it, n will always be between 0 and 5 and will never hit 6; this makes no sense
    // because there is no '0' value on a die and there should be a possibility that a die can be 6.
    n = Math.floor(n) + 1;
    return n;
}

// updates the image displayed on the site given the # generated and the image's class name
function updateImageByClass(className, dieValue){
    let image = document.querySelectorAll(className)[0];
    image.setAttribute("src", `./images/dice${dieValue}.png`);

}