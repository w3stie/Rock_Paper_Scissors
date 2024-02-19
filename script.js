let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const playerSelection = document.querySelectorAll('button');
    const score = document.getElementById('score');

    playerSelection.forEach(button => {
        button.addEventListener ('click', () => {
          const playerSelection  = button.id;
  
          const computerSelection = getComputerChoice();
          const result = playRound (playerSelection, computerSelection);
  
          const content = document.createElement('p');
  
          content.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
          score.appendChild(content);
        });
       });


//assigns each button a respective choice ie; rock, paper, scissors
        

function getComputerChoice(){
          const entities = ["rock", "paper", "scissors"];
          const randomIndex = Math.floor(Math.random() * entities.length);
          return entities[randomIndex];
        };
        
        function playRound (playerSelection, computerSelection){
        if (playerSelection === computerSelection){
              return ("It's a tie!");
            } else if((playerSelection === "rock" && computerSelection === "scissors")||
            (playerSelection === "paper" && computerSelection === "rock")||
            (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore ++
                if (playerScore === 5){
                    return `You Won The Game!`
                }
                return `You Win ${playerSelection} beats ${computerSelection}
                Player Score:  ${playerScore} Computer Score: ${computerScore}`
            } else {((playerSelection === "rock" && computerSelection === "paper")||
             (playerSelection === "paper" && computerSelection === "scissors")||
             (playerSelection === "scissors" && computerSelection === "rock"))
                 computerScore ++
                 if (computerScore === 5){
                     return `Computer Won The Game!`
                 };
                };
                 return `You Lost! ${computerSelection} beats ${playerSelection}
                 Player Score: ${playerScore} Computer Score: ${computerScore}`
             };
