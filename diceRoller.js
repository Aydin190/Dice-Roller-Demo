const diceFace = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
const winningScore = 50;
let gameActive = true;
const diceSound = document.getElementById("diceSound");
const winSound = document.getElementById("winSound");



function rollDice() {
    // If the gameActive is false, just return.
    if (gameActive == false) {
        return;
    }


    // Grab the dice one and dice two id.
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

    // Grab the roll button.
    let roll = document.getElementById("rollBtn");

    // Grab the result one.
    let result = document.getElementById("result");

    // Mission: MAKE THE ROLL BUTTON DISABLED.
    roll.disabled = true;

    // Dicesound currentTime 0 
    diceSound.currentTime = 0;

    // Mission: PLAY THE DICE SOUND
    diceSound.play();

    // Use math.random function to multiply by 6 to get any number between 0 to 6 and wrap this inside math.floor to avoid
    // the decimal values and get absolute values from 1 to 6.
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    // Attach the animate class to dice1 and dice2
    dice1.classList.add("animate");
    dice2.classList.add("animate");

    // We need a set timeOut function to play the game.
    // A setTimeout is a function that applies the logic after a speculated time.
    // For this case, we put 1000 milliseconds, so the logic will apply 1 second later/delay by a second.
    setTimeout(() => {
        // Use the roll1 variable as the position of dice faces array can attach it as the text content of dice 1.
        dice1.textContent = diceFace[roll1];
        // suppose roll1 value is 2, it got a random number roll 1 so random function is applied. diceface[2] = ⚂ 
        // the value of the diceface[2] is assigned to the text content of dice1, so dice1.textcontent = ⚂
        dice2.textContent = diceFace[roll2];


        dice1.classList.remove("animate");
        dice2.classList.remove("animate");
        const total = roll1 + roll2 + 2;

        result.textContent = `player${currentPlayer} rolled a ${total}`;
        // Updating the scores
        // If the currentPlayer is 1, just add the total to the player 1 score and you will change the player 1 text content to player 1 score.
        // We then have to change the currentPlayer to 2

        if (currentPlayer === 1) {
            player1Score += total;
            document.getElementById("player1").textContent = player1Score;
            currentPlayer = 2;
        } else {
            player2Score += total;
            document.getElementById("player2").textContent = player2Score;
            currentPlayer = 1;
            // Winning conditions
            const totalScore = 50;
            if (player1Score >= totalScore) {
                result.textContent = `Player 1 wins with ${player1Score} points`;
                roll.disabled = true;
                winSound.currentTime = 0;
                winSound.play();
            } else if(player2Score >= totalScore) {
                result.textContent = `Player 2 wins with ${player2Score} points`;
                roll.disabled = true;
                winSound.currentTime = 0;
                winSound.play();
            } else{
                // Make sure the roll button is not disabled and the roll button text content should have the instruction that wwhich player is rollingwith the help of current player variabel.
                roll.disabled = false;
                roll.textContent = `Player ${currentPlayer} roll`
            }





            // Check if the player1Score is greater than or equals to the total score then change the results text content to player 1 wins and use the dollar sign to get the player 1 score. make sure the roll buttin is disabled and make sure the urrent time of winSound is 0 and you play the winSound. Now end of story goodbyhe.
        }
        // else if the player2score is greater than or equals to the total score then repeat the same thing that i did for player1Score. and make sure the rollButton.textContent tells us which player's turn it is.
    }, 1000);
}

// Function reset game

function resetGame() {
    document.getElementById("dice1").textContent = "🎲";
    document.getElementById("dice2").textContent = "🎲";
    document.getElementById("result").textContent = "";
    document.getElementById("rollBtn").textContent = "Player 1 Roll"
    document.getElementById("rollBtn").disabled = false;
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    document.getElementById("player1").textContent = "0";
    document.getElementById("player2").textContent = "0";
}


// Initiate the button text
   document.getElementById("rollBtn").textContent = "Player 1 Roll";