//An array to hold our hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Select the btn and span class and id's
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// add event listener to the btn to listen for clicks
btn.addEventListener('click', () => {
    // create a variable and assign it to #
    let hexColor = '#';
    //Create a loop that goes through the hex array and for every iteration,
    // Generate a random number or in our case, a random hex value
    for (i = 0; i < 6; i++) {
        hexColor += generateRandomNumber();
    }

    //change the text content to the generated random color
    color.textContent = hexColor;
    //change the background color to the generated hex color
    document.body.style.backgroundColor = hexColor;
});

//Create a function to generate random hex values from the hex array
function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}