
// variable for left die #
let randomNumber1 = generateRandomNumForDie();

// variable for right die #
let randomNumber2 = generateRandomNumForDie();


updateImageByClass(".img1", randomNumber1);
updateImageByClass(".img2", randomNumber2);

// Change the text in the h1, (which currently says Refresh Me) to show which user won 
// or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

// retrieve the h1 element
let h1Element = document.body.firstElementChild.firstElementChild;
if(randomNumber1 > randomNumber2){
    // Player 1 wins
    h1Element.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    // Player 2 wins
    h1Element.innerHTML = "Player 2 Wins!";

} else{
    // It's a draw
    h1Element.innerHTML = "Draw!";
}

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
    // retrieve the image with the class = className
    let image = document.querySelectorAll(className)[0];
    // set the image to the image of the die wih dieValue number of dots on it
    image.setAttribute("src", `./images/dice${dieValue}.png`);

}