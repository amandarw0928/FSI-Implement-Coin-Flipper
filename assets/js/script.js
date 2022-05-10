// TODO: Declare any global variables we need
    let flip;
    let totalFlips = 0;
    let numHeads = 0;
    let numTails = 0;
    let headPerc = 0;
    let tailPerc = 0;
    let flipButton = document.querySelector("#flip");
    let resetButton = document.querySelector("#clear");
    let numHeadsBox = document.querySelector("#heads");
    let percHeadsBox = document.querySelector("#heads-percent");
    let numTailsBox = document.querySelector("#tails");
    let percTailsBox = document.querySelector("#tails-percent");
    let pennyImage = document.querySelector("#pennyImage");
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flipButton.addEventListener("click", flipper);
    function flipper (){
        flip = Math.round(Math.random());
        // heads = 0
        if (flip == 0) {
            totalFlips++;
            numHeads++;
            headPerc = Math.round((numHeads/totalFlips)*100);   
            tailPerc = Math.round((numTails/totalFlips)*100);
            numHeadsBox.textContent = numHeads;
            percHeadsBox.textContent = headPerc;
            numTailsBox.textContent = numTails;
            percTailsBox.textContent = tailPerc;
            pennyImage.src = "assets\\images\\penny-heads.jpg";
        } else {
            totalFlips++;
            numTails++;
            headPerc = Math.round((numHeads/totalFlips)*100);   
            tailPerc = Math.round((numTails/totalFlips)*100);
            numHeadsBox.textContent = numHeads;
            percHeadsBox.textContent = headPerc;
            numTailsBox.textContent = numTails;
            percTailsBox.textContent = tailPerc;
            pennyImage.src = "assets\\images\\penny-tails.jpg";
        }
    }

    resetButton.addEventListener("click", reset);
        function reset (){
                totalFlips = 0;
                numHeads = 0;
                numTails = 0;
                headPerc = 0;  
                tailPerc = 0;
                numHeadsBox.textContent = numHeads;
                percHeadsBox.textContent = headPerc;
                numTailsBox.textContent = numTails;
                percTailsBox.textContent = tailPerc;
        
        }

});

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        