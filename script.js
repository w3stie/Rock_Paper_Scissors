let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const playerSelection = document.querySelectorAll('button');
    
    
//assigns each button a respective choice ie; rock, paper, scissors
playerSelection.forEach(button => {
    button.addEventListener ('click', () => {
      const playerSelection  = button.id;

      const computerSelection = getComputerChoice();
      const result = playRound (playerSelection, computerSelection);
      updateScore()
      updateScoreInfoAndMessage(result, playerSelection, computerSelection);
      updateChoices(playerSelection, computerSelection)
    });
   });


//function for the computer to generate a random choice between rock, paper and scissors
function getComputerChoice(){
          const entities = ["rock", "paper", "scissors"];
          const randomIndex = Math.floor(Math.random() * entities.length);
          return entities[randomIndex];
        };

//function to execute one successful round
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundWinner = 'tie'
          return ("It's a tie!");
        }
        
    if((playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "scissors" && computerSelection === "paper")){
            playerScore ++
            roundWinner = 'player';

            if (playerScore === 5){
                return `You Won The Game!`}
            };

    computerScore ++
    roundWinner = 'computer';

    updateScore();
    checkWInner();

    if (computerScore === 5){
        return `Computer Won The Game!`}
    };     
        
//UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerSign = document.getElementById('playerSign');
const playerScorePara = document.getElementById('playerScore');
const computerSign = document.getElementById('computerSign');
const computerScorePara = document.getElementById('computerScore');

function updateScore() {
    // Update text content of player score and computer score elements
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}
updateScore();

// Function to update score info and message
function updateScoreInfoAndMessage(result, playerSelection, computerSelection) {
    // Update text content of score info and score message elements based on the result
    if (roundWinner === "tie") {
        scoreInfo.textContent = "It's a Tie!";
        scoreMessage.textContent = `${playerSelection} ties with ${computerSelection}`;
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = "You Won!";
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = "Computer Won!";
        scoreMessage.textContent = `${computerSelection} beats ${playerSelection}`;
    }
}

//function to alter the signs to the corresponding selected option
function updateChoices(playerSelection, computerSelection){
    switch (playerSelection){
        case 'rock':
        playerSign.textContent = '🪨'
        break
        case 'paper':
        playerSign.textContent ='📝';
        break 
        case 'scissors':
        playerSign.textContent = '✂️'  
        break 
    }
    switch (computerSelection){
        case 'rock':
        computerSign.textContent = '🪨'
        break
        case 'paper':
        computerSign.textContent ='📝';
        break 
        case 'scissors':
        computerSign.textContent = '✂️' 
        break  
    }
};

function checkWInner(){
    if (playerScore === 5){
        alert ('You Won The Game!')
        resetGame();
    } else if (computerScore === 5){
        alert ('Computer Won The Game!')
        resetGame();
    }
};

function resetGame (){
    //reset scores
    playerScore = 0;
    computerScore = 0;

  // Update the displayed scores
  updateScore();
  // Clear previous choices
  playerSign.textContent = '❔';
  computerSign.textContent = '❔';
};