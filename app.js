//An array to hold our colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//select the buttn with query selector
const btn = document.getElementById("btn");
// select the hex color in span tag
const color = document.querySelector(".color");
//add event listener to button to listen for clicks

//Add event listener to the clickMe button to listen for clicks 
btn.addEventListener('click', () => {
    //get random number from 0 - 3
    const randomNumber = getRandomNumber();
    //Select the background color and change it to a random color when clicked
    document.body.style.backgroundColor = colors[randomNumber];
    //change the hex code to match the randomNumber
    color.textContent = colors[randomNumber];
});

// create a function that returns a random color from our colors array
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
};